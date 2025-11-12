import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Add caching headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/)) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  // Add caching headers for fonts
  if (request.nextUrl.pathname.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  // Add caching headers for HTML pages
  if (request.nextUrl.pathname.endsWith("/") || request.nextUrl.pathname.match(/\.(html)$/)) {
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400")
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
}
