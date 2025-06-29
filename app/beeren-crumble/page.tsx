import { notFound, redirect } from 'next/navigation'

// This page redirects to the correct recipe URL
export default function BeerenCrumbleRedirect() {
  // Redirect to the correct recipe URL structure
  redirect('/beeren-crumble')
}