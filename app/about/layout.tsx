import { SiteHeader } from "@/components/site-header"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  )
} 