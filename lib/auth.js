/**
 * OAuth Configuration Utility
 * Determines the correct callback URL based on environment (dev vs production)
 */

export const getOAuthCallbackUrl = () => {
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev) {
    return process.env.NEXTAUTH_CALLBACK_URL_DEV || 'http://localhost:3000/api/auth/callback/google'
  }

  return process.env.NEXTAUTH_CALLBACK_URL_PROD || 'https://b-home-rose.vercel.app/api/auth/callback/google'
}

/**
 * Get the authorization endpoint for Google OAuth
 * Constructs a Google OAuth authorization URL with the correct callback
 */
export const getGoogleAuthUrl = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const redirectUri = encodeURIComponent(getOAuthCallbackUrl())
  const scope = encodeURIComponent('openid profile email')
  const state = Math.random().toString(36).substring(7) // Simple state token

  return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}`
}
