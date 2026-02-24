import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — KrishDigital Solutions',
  description: 'Terms of Service governing the use of KrishDigital Solutions Limited website and services.',
}

export default function TermsOfService() {
  return (
    <>
      <section className="bg-brand-50/40">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-slate max-w-none space-y-10 text-slate-600">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and KrishDigital Solutions Limited (&quot;KrishDigital,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of our website at krishdigital.eu (the &quot;Website&quot;) and any related services. By accessing or using the Website or our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Website or our services. We may update these Terms from time to time; the &quot;Last updated&quot; date indicates when they were last revised. Continued use of the Website after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years of age and have the legal capacity to enter into a binding contract to use our Website and services. By using the Website, you represent and warrant that you meet these requirements. If you are using the Website on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Use of the Website and Licence</h2>
            <p className="mb-3">
              We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Website for lawful, personal or internal business purposes. Under this licence you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, modify, distribute, sell, or create derivative works from any content, code, or materials on the Website without our prior written consent.</li>
              <li>Use the Website for any commercial purpose that competes with or exploits our services without a separate agreement.</li>
              <li>Attempt to reverse engineer, decompile, disassemble, or otherwise derive source code from the Website or any software used to operate it.</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices on the Website.</li>
              <li>Use automated means (e.g. scrapers, bots) to access the Website or collect data without our permission.</li>
              <li>Introduce viruses, malware, or other harmful code, or attempt to gain unauthorised access to our systems or networks.</li>
              <li>Use the Website in any way that violates applicable laws, regulations, or third-party rights, or that is fraudulent, harassing, or otherwise objectionable.</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate your access to the Website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Our Services</h2>
            <p>
              KrishDigital provides software development, digital transformation, and related technology services. The information on the Website is for general informational purposes only and does not constitute a binding offer. Specific services, scope, deliverables, fees, and terms will be set out in separate agreements (e.g. statements of work, service agreements) that we enter into with clients. Nothing on the Website creates a client relationship or contractual obligation until a separate written agreement is executed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Intellectual Property</h2>
            <p>
              All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of KrishDigital or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use our trademarks, logos, or branding without our prior written consent. Any feedback, ideas, or suggestions you provide to us regarding the Website or our services may be used by us without obligation to you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. User Content and Communications</h2>
            <p>
              If you submit information through our contact forms or otherwise communicate with us, you grant us a non-exclusive, royalty-free licence to use that information to respond to you and to provide and improve our services. You represent that you have the right to provide such information and that it does not violate any third-party rights or applicable law. We are not obligated to maintain or return any submissions; please do not send confidential or proprietary information through the Website without first discussing it with us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The Website and all content and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by applicable law, KrishDigital disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy. We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the Website is at your sole risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, KrishDigital and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or goodwill) arising out of or in connection with your use of the Website or our services, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damages. In no event shall our total liability to you for all claims arising from or related to the Website or these Terms exceed the amount you have paid to us in the twelve (12) months preceding the claim, or one hundred (100) US dollars, whichever is greater. Some jurisdictions do not allow the exclusion or limitation of certain damages; in such jurisdictions, our liability shall be limited to the greatest extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless KrishDigital and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to (a) your use of the Website, (b) your violation of these Terms, or (c) your violation of any third-party rights or applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Third-Party Links and Services</h2>
            <p>
              The Website may contain links to third-party websites or services. We do not endorse and are not responsible for the content, privacy practices, or terms of any third-party sites. Your use of third-party sites is at your own risk. We encourage you to read the terms and privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Hong Kong, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Website shall first be attempted to be resolved by good-faith negotiation. If the dispute cannot be resolved within thirty (30) days, it may be submitted to the exclusive jurisdiction of the courts of Hong Kong, and you consent to the personal jurisdiction of such courts. Nothing in this section shall prevent us from seeking injunctive or other equitable relief in any jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the parties&apos; intent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">13. Waiver</h2>
            <p>
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by us to be effective.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and KrishDigital regarding the Website and supersede any prior agreements. For the avoidance of doubt, these Terms do not govern any separate service agreements we may enter into with you for the provision of software development or other professional services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">15. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
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
