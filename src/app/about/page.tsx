import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — KrishDigital Solutions',
  description: 'Learn about KrishDigital Solutions Limited — our mission, values and the team behind innovative software development.',
}

const values = [
  {
    title: 'Innovation',
    description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    title: 'Reliability',
    description: 'Our clients trust us because we consistently meet deadlines and exceed expectations.',
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of quality in code, design, and user experience.',
  },
  {
    title: 'Partnership',
    description: 'We believe in building long-term relationships. Your success is our success.',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-16 md:pt-40 md:pb-20">
        <p className="text-brand-600 font-medium text-sm mb-4">About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5 max-w-2xl">
          Building the Future of Digital
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
          KrishDigital Solutions Limited is a software development company specializing
          in creating innovative digital solutions for businesses of all sizes.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Our Story</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between business needs and technology
                solutions, KrishDigital Solutions has grown into a trusted partner for companies
                seeking digital excellence.
              </p>
              <p>
                Our team of experienced developers, designers, and strategists work together
                to create software that not only meets technical requirements but also drives
                real business value.
              </p>
              <p>
                We believe that great software is built through collaboration, transparency,
                and a relentless focus on quality. Every project we undertake is an opportunity
                to make a meaningful impact.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-10 flex flex-col items-center justify-center text-center">
            <svg className="w-14 h-14 text-brand-200 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <p className="text-xl font-bold text-slate-900 mb-1">KrishDigital</p>
            <p className="text-brand-600 text-sm">Solutions Limited</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50/70 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Values</h2>
          <p className="text-slate-500 mb-12 max-w-xl">
            The principles that guide everything we do and every solution we build.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-sm hover:border-gray-200 transition-all">
                <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Want to Work With Us?</h2>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            We&apos;re always looking for exciting projects and new partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
