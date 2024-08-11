import { Montserrat, Oswald } from "next/font/google"
import localFont from "next/font/local"

// Cooper Hewitt (local font)
export const cooperHewitt = localFont({
  src: "./fonts/CooperHewitt-Book.woff",
  variable: "--font-cooper-hewitt",
  display: "swap",
})

// Oswald (Google Font)
export const oswald = Oswald({
  subsets: ["latin"],
  weight: "700", // Bold
  variable: "--font-oswald",
  display: "swap",
})

// Montserrat (Google Font)
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300", // Light
  variable: "--font-montserrat",
  display: "swap",
})
