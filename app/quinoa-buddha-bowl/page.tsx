import { notFound, redirect } from 'next/navigation'

// This page redirects to the correct recipe URL
export default function QuinoaBowlRedirect() {
  // Redirect to the correct recipe URL structure
  redirect('/quinoa-bowl')
}