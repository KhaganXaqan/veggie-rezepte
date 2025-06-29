import { notFound, redirect } from 'next/navigation'

// This page redirects to the correct recipe URL
export default function GriessnockerRedirect() {
  // Redirect to the correct recipe URL structure
  redirect('/rezepte/griessnockerl')
}