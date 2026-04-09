export default function TermsAndConditions() {
    return (
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-6">
            Effective Date: 04/01/2026 <br />
            Last Updated: 04/09/2026 
          </p>
  
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using mapyourown, you agree to be bound by these
              Terms and Conditions. If you do not agree, you must not use our Services.
            </p>
          </Section>
  
          <Section title="2. Description of Services">
            <ul className="list-disc pl-6 space-y-1">
              <li>Web and mobile applications</li>
              <li>SMS messaging and voice communication</li>
              <li>Notifications and alerts</li>
            </ul>
          </Section>
  
          <Section title="3. User Accounts">
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Responsible for all account activity</li>
            </ul>
          </Section>
  
          <Section title="4. SMS and Voice Communications">
            <p className="mb-2">
              By providing your phone number, you consent to receive SMS messages and voice calls.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reply STOP to opt out</li>
              <li>Message frequency may vary</li>
              <li>Message & data rates may apply</li>
            </ul>
          </Section>
  
          <Section title="5. Acceptable Use">
            <ul className="list-disc pl-6 space-y-1">
              <li>No illegal or fraudulent use</li>
              <li>No spam or abuse of messaging systems</li>
              <li>No unauthorized access attempts</li>
            </ul>
          </Section>
  
          <Section title="6. Third-Party Services">
            <p>
              Our platform may use third-party services such as Twilio for communications.
              We are not responsible for third-party service interruptions.
            </p>
          </Section>
  
          <Section title="7. Intellectual Property">
            <p>
              All content and software are owned by [Your Company Name]. You may not copy
              or distribute without permission.
            </p>
          </Section>
  
          <Section title="8. Privacy">
            <p>
              Your use of the Services is also governed by our Privacy Policy.
            </p>
          </Section>
  
          <Section title="9. Disclaimer of Warranties">
            <p>
              Services are provided “as is” without warranties of any kind.
            </p>
          </Section>
  
          <Section title="10. Limitation of Liability">
            <p>
              We are not liable for indirect damages, data loss, or communication failures.
            </p>
          </Section>
  
          <Section title="11. Termination">
            <p>
              We may suspend or terminate your account if you violate these Terms.
            </p>
          </Section>
  
          <Section title="12. Governing Law">
            <p>
              These Terms are governed by the laws of [Your State/Country].
            </p>
          </Section>
  
          <Section title="13. Contact Us">
            <p>
              Email: mapyourown@gmail.com <br />
            </p>
          </Section>
  
          <div className="mt-8 text-xs text-gray-500 border-t pt-4">
            Message frequency may vary. Message & data rates may apply. Reply STOP to unsubscribe. Text HELP for assistance.
          </div>
  
        </div>
      </div>
    );
  }
  
  function Section({ title, children }: any) {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="text-gray-700 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    );
  }