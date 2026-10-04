import { LegalList, LegalPage, LegalSection } from "../components/legalLayout";

const updated = "October 4, 2026";

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated={updated}>
      <p>
        These Terms of Service ("Terms") govern your access to and use of the
        Bokmarke website, browser extension, and related services
        (collectively, the "Service"), operated by Bokmarke ("Bokmarke", "we",
        "us", or "our"). By creating an account or using the Service, you agree
        to be bound by these Terms. If you do not agree, please do not use the
        Service.
      </p>

      <LegalSection id="agreement" title="1. Agreement to These Terms">
        <p>
          By accessing or using the Service, you confirm that you have read,
          understood, and agree to these Terms and to our Privacy Policy. If you
          use the Service on behalf of an organisation, you represent that you
          have authority to bind that organisation to these Terms.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="2. Eligibility">
        <p>
          You must be at least 16 years old to use the Service. By using the
          Service, you represent that you meet this requirement and that you
          will comply with all laws and regulations applicable to you.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="3. Your Account">
        <LegalList
          items={[
            "You are responsible for providing accurate account information and keeping it up to date.",
            "You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account.",
            "You must notify us promptly if you suspect any unauthorised use of your account or any other breach of security.",
            "We may suspend or terminate accounts that we reasonably believe are being used in violation of these Terms.",
          ]}
        />
      </LegalSection>

      <LegalSection id="acceptable-use" title="4. Acceptable Use">
        <p>You agree not to misuse the Service. In particular, you will not:</p>
        <LegalList
          items={[
            "Use the Service for any unlawful, harmful, or fraudulent purpose.",
            "Attempt to gain unauthorised access to the Service, other users' accounts, or our systems and networks.",
            "Interfere with or disrupt the integrity or performance of the Service, including by introducing malware or conducting denial-of-service attacks.",
            "Scrape, harvest, or bulk-collect data from the Service without our written permission.",
            "Reverse engineer, decompile, or attempt to extract the source code of the Service, except as permitted by law.",
            "Infringe the intellectual property, privacy, or other rights of any third party.",
          ]}
        />
      </LegalSection>

      <LegalSection id="your-content" title="5. Your Content">
        <p>
          You retain ownership of the bookmarks and other content you save
          through the Service ("Your Content"). You grant us a limited,
          worldwide, non-exclusive licence to host, store, process, and display
          Your Content solely to operate, provide, and improve the Service.
        </p>
        <p>
          You are solely responsible for Your Content and for ensuring that you
          have the right to save and use it. You represent that Your Content
          does not violate any law or the rights of any third party.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="6. Intellectual Property">
        <p>
          The Service, including its software, design, text, graphics, logos,
          and trademarks, is owned by Bokmarke or its licensors and is protected
          by intellectual property laws. Except for the limited right to use the
          Service in accordance with these Terms, no rights are granted to you.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="7. Third-Party Services and Links">
        <p>
          The Service may integrate with third-party services, such as Google
          sign-in, and your saved bookmarks may link to third-party websites. We
          do not control and are not responsible for the content, policies, or
          practices of any third party. Your use of third-party services is
          governed by their own terms and policies.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="8. Disclaimers">
        <p>
          The Service is provided on an "as is" and "as available" basis,
          without warranties of any kind, whether express, implied, or
          statutory, including warranties of merchantability, fitness for a
          particular purpose, and non-infringement. We do not warrant that the
          Service will be uninterrupted, error-free, secure, or free of harmful
          components, or that your content will always be available or
          preserved.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Bokmarke and its operators
          will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for any loss of profits, data,
          goodwill, or other intangible losses, arising out of or relating to
          your use of, or inability to use, the Service. To the fullest extent
          permitted by law, our total aggregate liability for any claim relating
          to the Service will not exceed the greater of the amount you paid us,
          if any, in the twelve months before the claim arose, or EUR 50.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the limitation of certain liabilities, so some of the above may not
          apply to you.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="10. Termination">
        <p>
          You may stop using the Service and delete your account at any time. We
          may suspend or terminate your access to the Service at any time if you
          breach these Terms or if we are required to do so by law. Upon
          termination, your right to use the Service ends immediately, and we
          may delete your account and content in accordance with our Privacy
          Policy.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="11. Governing Law">
        <p>
          These Terms and any dispute or claim arising out of or in connection
          with them or the Service are governed by and construed in accordance
          with the laws of the Republic of Ireland, without regard to its
          conflict-of-law rules. Subject to any mandatory consumer protections
          that apply to you, the courts of the Republic of Ireland will have
          exclusive jurisdiction over any such dispute.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we make material
          changes, we will update the "Last updated" date above and, if
          appropriate, notify you through the Service. Your continued use of the
          Service after changes take effect constitutes acceptance of the
          revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact Us">
        <p>
          If you have questions about these Terms, contact us at{" "}
          <a
            className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
            href="mailto:gaintlord690@gmail.com"
          >
            gaintlord690@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
