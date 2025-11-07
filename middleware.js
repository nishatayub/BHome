// Middleware is disabled to avoid Edge Runtime issues with MongoDB
// Authentication is handled in individual route handlers
export function middleware(request) {
  return;
}

export const config = {
  matcher: [],
};
