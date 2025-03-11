import { SiteHeader } from "@/components/site-header"

export default function FAQLayout({
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