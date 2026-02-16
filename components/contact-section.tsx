"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "vka5@illinois.edu",
    href: "mailto:vka5@illinois.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (447) 902-6743",
    href: "tel:+14479026743",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vinit",
    href: "#",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "vinit.dev",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/vinit",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {"Feedback / Contact"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {"Have a question or want to work together? I'd love to hear from you."}
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-fit">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-6 rounded-lg bg-primary/5 p-4 text-center text-sm font-medium text-primary">
              Open to full-time data engineering / analytics roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
