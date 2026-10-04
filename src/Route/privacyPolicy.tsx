import { LegalList, LegalPage, LegalSection } from "../components/legalLayout";

const updated = "October 4, 2026";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated={updated}>
      <p>
        This Privacy Policy explains how Bokmarke ("Bokmarke", "we", "us", or
        "our") collects, uses, and protects your information when you use the
        Bokmarke website, browser extension, and related services
        (collectively, the "Service"). Please read it carefully so you
        understand what we do with your information. By using the Service, you
        agree to the practices described in this policy.
      </p>
      <p>
        We designed Bokmarke to collect only what is necessary to operate the
        Service: to create and secure your account, to authenticate you, and to
        store and display the bookmarks you choose to save.
      </p>

      <LegalSection id="information-we-collect" title="1. Information We Collect">
        <p>We collect the following categories of information:</p>
        <p className="font-bold text-blue-950">Information you provide to us</p>
        <LegalList
          items={[
            "Account details, such as your email address and, optionally, a display name.",
            "Credentials. Your password is stored only as a one-way bcrypt hash and is never kept or readable in plain text.",
            "Verification data, including a one-time passcode (OTP) used to confirm that you own your email address.",
          ]}
        />
        <p className="font-bold text-blue-950">
          Information from Google Sign-In
        </p>
        <p>
          If you choose to continue with Google, we receive your email address,
          your name, and a unique Google account identifier (the "sub" claim).
          We use this to create or link your Bokmarke account. We do not receive
          or store your Google password, and we do not use Google sign-in to
          access any other Google data.
        </p>
        <p className="font-bold text-blue-950">Bookmark content</p>
        <p>
          We store the bookmarks you save, which may include the web address
          (URL), website domain, page title, preview image, and the date and
          time the bookmark was saved.
        </p>
        <p className="font-bold text-blue-950">
          Technical and usage information
        </p>
        <p>
          When you use the Service, we automatically collect limited technical
          information, including your IP address, browser user agent, and the
          cookie and session identifiers described in Section 3. We use this
          information to keep you signed in, secure your account, and prevent
          abuse.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <LegalList
          items={[
            "Create, maintain, and secure your account.",
            "Authenticate you and keep you signed in across sessions.",
            "Verify your email address and help you recover access to your account.",
            "Store, organise, and display the bookmarks you save.",
            "Detect, prevent, and address fraud, abuse, and security incidents.",
            "Comply with applicable legal obligations.",
            "Communicate with you about the Service, including important account and security notices.",
          ]}
        />
        <p>
          We do not use your information for advertising, and we do not sell
          your personal information.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="3. Cookies and Similar Technologies">
        <p>
          We use cookies and browser storage to operate the Service. The main
          technologies we use are:
        </p>
        <LegalList
          items={[
            <>
              <span className="font-bold text-blue-950">ACCESS_TOKEN</span> — a
              short-lived session cookie that identifies you on each request so
              you remain signed in.
            </>,
            <>
              <span className="font-bold text-blue-950">DR_TAG_TOKEN</span> — a
              long-lived, HTTP-only refresh cookie used only to issue new access
              tokens. It is rotated each time it is used.
            </>,
            <>
              <span className="font-bold text-blue-950">KMTE_STE</span> — a
              temporary cookie set during Google sign-in to protect against
              cross-site request forgery. It lasts only a few minutes.
            </>,
            "Local browser storage, used to hold a session token so the interface can load your data.",
          ]}
        />
        <p>
          These technologies are essential to the Service. Blocking them may
          prevent you from signing in or using core features. We do not use
          third-party advertising or tracking cookies.
        </p>
      </LegalSection>

      <LegalSection id="google" title="4. Google Sign-In">
        <p>
          Google sign-in is provided through Google's OAuth 2.0 service. When
          you use it, Google independently processes your data under its own
          privacy policy. We receive only the limited account information
          described in Section 1, and only after we verify that Google has
          confirmed your email address.
        </p>
        <p>
          If you sign in with Google using an email address that already has a
          Bokmarke account, we may link that Google identity to your existing
          account based on the verified email address.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="5. How We Share Information">
        <p>
          We do not sell or rent your personal information. We share it only in
          the limited circumstances below:
        </p>
        <LegalList
          items={[
            "Service providers. We use trusted providers to host and operate the Service, who process information on our behalf under confidentiality obligations.",
            "Legal and safety. We may disclose information if required by law or if we believe in good faith that disclosure is necessary to protect rights, safety, or security.",
            "Business transfers. If the Service is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to this policy.",
          ]}
        />
      </LegalSection>

      <LegalSection id="retention" title="6. Data Retention">
        <p>
          We retain your account information for as long as your account is
          active. If you delete your account, we delete or anonymise your
          personal information within a reasonable period, except where we are
          required to retain it to comply with legal obligations, resolve
          disputes, or prevent abuse. Security and technical records, such as
          session and refresh-token records, are retained only for as long as
          necessary to operate and protect the Service.
        </p>
      </LegalSection>

      <LegalSection id="security" title="7. How We Protect Your Information">
        <p>
          We use industry-standard safeguards designed to protect your
          information, including:
        </p>
        <LegalList
          items={[
            "Passwords are hashed with bcrypt and are never stored in plain text.",
            "Refresh tokens are stored only as HMAC hashes and are single-use, rotating on each refresh.",
            "Session cookies are HTTP-only and, in production, marked Secure.",
            "Access to production systems is restricted and monitored.",
          ]}
        />
        <p>
          No method of transmission or storage is completely secure. While we
          work to protect your information, we cannot guarantee absolute
          security, and you use the Service at your own risk.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="8. Your Rights">
        <p>
          Depending on where you live, you may have the following rights over
          your personal information. We honour these rights for all users to the
          extent required by applicable law.
        </p>
        <p className="font-bold text-blue-950">
          If you are in the European Economic Area, the United Kingdom, or
          Switzerland (GDPR/UK GDPR)
        </p>
        <LegalList
          items={[
            "Access: request a copy of the personal information we hold about you.",
            "Rectification: ask us to correct inaccurate or incomplete information.",
            "Erasure: ask us to delete your personal information, subject to legal exceptions.",
            "Restriction: ask us to limit how we use your information.",
            "Portability: receive the information you provided to us in a structured, machine-readable format.",
            "Objection: object to processing that is based on our legitimate interests.",
            "Withdraw consent: where processing is based on consent, withdraw it at any time.",
          ]}
        />
        <p className="font-bold text-blue-950">
          If you are a California resident (CCPA/CPRA)
        </p>
        <LegalList
          items={[
            "Right to know the categories and specific pieces of personal information we collect, use, and disclose.",
            "Right to delete personal information we have collected from you.",
            "Right to correct inaccurate personal information.",
            "Right to opt out of the sale or sharing of personal information. We do not sell or share your personal information as those terms are defined by the CCPA/CPRA.",
            "Right to limit the use of sensitive personal information. We do not collect sensitive personal information for purposes that require this right.",
            "Right to non-discrimination for exercising your privacy rights.",
          ]}
        />
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
            href="mailto:gaintlord690@gmail.com"
          >
            gaintlord690@gmail.com
          </a>
          . We will verify your request using the email address associated with
          your account and respond within the time required by law. You may also
          designate an authorised agent to make a request on your behalf where
          the law permits.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="9. International Data Transfers">
        <p>
          We may process and store your information on servers located outside
          your country of residence. Where we transfer personal information out
          of the European Economic Area, the United Kingdom, or Switzerland, we
          take steps to ensure it receives an adequate level of protection
          through appropriate safeguards recognised under applicable law.
        </p>
      </LegalSection>

      <LegalSection id="children" title="10. Children's Privacy">
        <p>
          The Service is not directed to children under the age of 16, and we do
          not knowingly collect personal information from them. If you believe a
          child has provided us with personal information, please contact us and
          we will take appropriate steps to delete it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will update the "Last updated" date above and, if
          appropriate, notify you through the Service. We encourage you to
          review this policy periodically.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact Us">
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, contact us at{" "}
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
