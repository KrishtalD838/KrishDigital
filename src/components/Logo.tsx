import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#logoGradient)" />
        <path
          d="M12 11V25M12 18L21 11M12 18L21 25"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-slate-900 font-semibold text-lg tracking-tight">
        Krish<span className="gradient-text">Digital</span>
      </span>
    </Link>
  )
}
