import Link from 'next/link'

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and drive growth.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge technology and innovative digital solutions.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity Services',
    description: 'Protect your digital assets with comprehensive security solutions and industry best practices.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Data & Analytics',
    description: 'Leverage your data with advanced analytics and business intelligence for better decisions.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that users love.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Legacy Modernization',
    description: 'Transform legacy systems into modern, scalable, and maintainable solutions for the future.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.016 4.356v4.992" />
      </svg>
    ),
  },
]

const approach = [
  {
    title: 'Quality First',
    description: 'We prioritize code quality, maintainability, and best practices in every project.',
  },
  {
    title: 'Modern Technologies',
    description: 'Cutting-edge technologies and frameworks to build scalable, future-proof solutions.',
  },
  {
    title: 'Agile Methodology',
    description: 'Iterative approach ensuring flexibility, transparency, and continuous improvement.',
  },
  {
    title: 'Client Collaboration',
    description: 'We work closely with clients to understand their vision and exceed expectations.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 md:pt-40 md:pb-28">
        <p className="text-brand-600 font-medium text-sm mb-4">Software Development Company</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5 max-w-3xl">
          World-class Software Development
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
          We deliver exceptional software solutions that drive digital transformation
          and help businesses achieve their goals. From concept to deployment, we&apos;re
          your trusted technology partner.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50/70 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">What We Do</h2>
          <p className="text-slate-500 mb-12 max-w-xl">
            Comprehensive software development services tailored to your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-sm hover:border-gray-200 transition-all"
              >
                <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Approach</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Technical expertise combined with deep understanding of business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {approach.map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-2 h-2 bg-brand-500 rounded-full mt-2 shrink-0" />
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Ready to Start Your Project?</h2>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss how we can help transform your business with the right technology.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
