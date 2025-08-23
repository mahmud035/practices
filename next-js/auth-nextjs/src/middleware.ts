import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' || path === '/signup' || path === '/verifyemail';

  const accessToken = request.cookies.get('accessToken')?.value || '';

  if (isPublicPath && accessToken) {
    return NextResponse.rewrite(new URL('/profile', request.nextUrl));
  }

  if (!isPublicPath && !accessToken) {
    return NextResponse.rewrite(new URL('/login', request.nextUrl));
  }
};

// Matching Paths
export const config = {
  matcher: ['/', '/profile/:path*', '/login', '/signup', '/verifyemail'],
};
