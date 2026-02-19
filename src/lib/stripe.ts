import { loadStripe } from '@stripe/stripe-js'

let stripePromise: ReturnType<typeof loadStripe>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder')
  }
  return stripePromise
}

const PAYMENT_LINK = "https://buy.stripe.com/5kQcMYbUmdczcai0iK6J200"

export async function createCheckoutSession(
  _amount: number,
  _listingId: string,
  _type: 'listing' | 'featured',
  _userId: string,
  email?: string
) {
  const encodedEmail = email ? encodeURIComponent(email) : ''
  const url = `${PAYMENT_LINK}${encodedEmail ? `?prefilled_email=${encodedEmail}` : ''}`
  window.location.href = url
  return { url }
}

export const LISTING_PRICE = 1000 // $10 in cents
export const FEATURED_PRICE = 2000 // $20 in cents
