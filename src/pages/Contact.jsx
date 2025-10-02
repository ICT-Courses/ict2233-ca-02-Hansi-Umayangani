"use client"

import Layout from "../components/Layout";
import { ContactHero } from "../components/ContactHero"
import { ContactForm } from "../components/ContactForm"
import { ContactInfo } from "../components/ContactInfo"

export default function ContactPage() {
  return (
    <Layout>
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-4 md:py-2">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
    </Layout>
  )
}
