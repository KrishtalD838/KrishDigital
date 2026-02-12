import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Logo />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Software development company creating innovative digital solutions for businesses of all sizes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-900 font-medium text-sm mb-4">Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-slate-500 hover:text-slate-800 text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-slate-800 text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-slate-800 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="mailto:info@krishdigital.eu" className="hover:text-slate-800 transition-colors">
                  info@krishdigital.eu
                </a>
              </li>
              <li>London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} KrishDigital Solutions Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
