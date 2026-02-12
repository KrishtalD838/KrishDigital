import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — KrishDigital Solutions',
  description: 'Get in touch with KrishDigital Solutions Limited. We\'d love to hear about your project.',
}

const contactInfo = [
  {
    title: 'Email',
    value: 'info@krishdigital.eu',
    href: 'mailto:info@krishdigital.eu',
    description: 'Send us an email and we\'ll respond within 24 hours.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Location',
    value: 'London, United Kingdom',
    href: null,
    description: 'Our team operates from London.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Working Hours',
    value: 'Mon — Fri, 9:00 — 18:00',
    href: null,
    description: 'Business hours, GMT timezone.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-16 md:pt-40 md:pb-20">
        <p className="text-brand-600 font-medium text-sm mb-4">Contact Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5 max-w-2xl">
          Let&apos;s Connect
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
          Have a project in mind? We&apos;d love to hear from you.
          Reach out and let&apos;s start a conversation.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactInfo.map((info) => (
            <div key={info.title} className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center">
              <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-slate-900 font-semibold mb-1">{info.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{info.description}</p>
              {info.href ? (
                <a href={info.href} className="text-brand-600 hover:text-brand-700 font-medium text-sm transition-colors">
                  {info.value}
                </a>
              ) : (
                <span className="text-slate-600 text-sm font-medium">{info.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50/70 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
          <p className="text-slate-500 mb-10">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Send Message
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-brand-600 font-medium text-sm mb-2">Our Location</p>
          <h3 className="text-slate-900 text-lg font-semibold mb-1">London, United Kingdom</h3>
          <p className="text-slate-400 text-sm">KrishDigital Solutions Limited</p>
        </div>
      </section>
    </>
  )
}
