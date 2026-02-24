import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — KrishDigital Solutions',
  description: 'Privacy Policy of KrishDigital Solutions Limited. How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-brand-50/40">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-slate max-w-none space-y-10 text-slate-600">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              KrishDigital Solutions Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your information when you visit our website at krishdigital.eu, use our services, or communicate with us. By using our website or services, you consent to the practices described in this policy. We may update this policy from time to time; the &quot;Last updated&quot; date above indicates when it was last revised.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is KrishDigital Solutions Limited. You can contact us at info@krishdigital.eu or at our registered address: Hong Kong, China.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Information We Collect</h2>
            <p className="mb-3">We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal identification data:</strong> Name, email address, phone number, job title, and company name that you provide when filling out contact forms, requesting a quote, or subscribing to our communications.</li>
              <li><strong>Technical and usage data:</strong> IP address, browser type and version, operating system, device type, referring URLs, pages visited, time and date of access, and other diagnostic data. This may be collected automatically when you browse our website.</li>
              <li><strong>Cookies and similar technologies:</strong> We use cookies, web beacons, and similar technologies to recognise you, remember your preferences, and analyse how you use our website. You can control cookies through your browser settings. For more details, see the &quot;Cookies&quot; section below.</li>
              <li><strong>Communications data:</strong> Records of correspondence when you contact us by email or through our contact form, including the content of your messages and our responses.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Legal Basis for Processing (where applicable)</h2>
            <p>
              Where required by applicable law (for example under the GDPR for individuals in the EEA/UK), we process your personal data on the following legal bases: (a) your consent, e.g. when you subscribe to our newsletter or agree to non-essential cookies; (b) performance of a contract or steps prior to entering into a contract, e.g. when we respond to your project enquiries; (c) our legitimate interests, such as improving our website, providing and promoting our services, and ensuring security, provided these interests are not overridden by your rights; and (d) compliance with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries, provide information about our services, and communicate with you in relation to potential or ongoing projects.</li>
              <li>Send you marketing communications (such as newsletters or updates about our services) only where you have given your consent or where we are otherwise permitted by law.</li>
              <li>Improve, personalise, and analyse the use of our website and services, and to develop new features and content.</li>
              <li>Ensure the security and integrity of our website and IT systems, and to detect and prevent fraud or abuse.</li>
              <li>Comply with applicable laws, regulations, legal process, or enforceable governmental requests.</li>
              <li>Establish, exercise, or defend legal claims.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Sharing and Disclosure of Your Information</h2>
            <p>
              We do not sell your personal information. We may share your data with: (a) service providers who assist us in operating our website and business (e.g. hosting, analytics, email delivery), subject to confidentiality and data processing agreements; (b) professional advisers (e.g. lawyers, accountants) where necessary; and (c) law enforcement or other authorities when required by law or to protect our rights and safety. We may also share aggregated or anonymised data that does not identify you. If we transfer personal data to countries outside your country of residence, we will ensure appropriate safeguards are in place as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. For example, contact form submissions and correspondence may be retained for the duration of our business relationship and for a reasonable period thereafter for legal and operational purposes. Technical and usage data may be retained in aggregated or anonymised form for longer. You may request deletion of your data subject to applicable law (see &quot;Your Rights&quot; below).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include secure hosting, encryption where appropriate, access controls, and staff training. However, no method of transmission over the Internet or electronic storage is completely secure; we cannot guarantee absolute security of your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Cookies</h2>
            <p className="mb-3">
              Our website may use cookies and similar technologies. Cookies are small text files stored on your device. We may use: (a) strictly necessary cookies required for the website to function; (b) analytical/performance cookies to understand how visitors use our site; and (c) functional cookies to remember your preferences. You can set your browser to refuse or restrict cookies; some features of the site may not work properly if you do so.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you and receive a copy.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request erasure of your personal data in certain circumstances.</li>
              <li>Object to or request restriction of processing in certain circumstances.</li>
              <li>Data portability (receive your data in a structured, machine-readable format where applicable).</li>
              <li>Withdraw consent where processing is based on consent, without affecting the lawfulness of processing before withdrawal.</li>
              <li>Lodge a complaint with a supervisory authority if you believe our processing violates applicable data protection law.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at info@krishdigital.eu. We will respond within the timeframe required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Children</h2>
            <p>
              Our website and services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us and we will take steps to delete such information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="mt-3">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@krishdigital.eu" className="text-brand-600 hover:text-brand-700">
                info@krishdigital.eu
              </a>
              <br />
              <strong>Address:</strong> KrishDigital Solutions Limited, Hong Kong, China
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 text-center">
          <Link href="/" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
