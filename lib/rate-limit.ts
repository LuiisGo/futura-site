interface RateLimitRecord {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitRecord>()

let cleanupCounter = 0
function maybeCleanup() {
  cleanupCounter++
  if (cleanupCounter < 100) return
  cleanupCounter = 0
  const now = Date.now()
  const keysToDelete: string[] = []
  rateLimitMap.forEach((record, key) => {
    if (now > record.resetAt) keysToDelete.push(key)
  })
  keysToDelete.forEach((key) => rateLimitMap.delete(key))
}

export function isRateLimited(
  ip: string,
  options: { maxRequests: number; windowMs: number }
): boolean {
  maybeCleanup()
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + options.windowMs })
    return false
  }

  if (record.count >= options.maxRequests) return true

  record.count++
  return false
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() ?? 'unknown'
}
