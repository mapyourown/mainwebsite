export default function PrivacyPolicy() {
    return (
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-6">
            Effective Date: 04/01/2026 <br />
            Last Updated: 04/09/2026
          </p>
  
          <Section title="1. Introduction">
            <p>
              Welcome to Mapyourown. This Privacy Policy explains how we collect,
              use, and protect your information when you use our services, including
              communications powered by Twilio.
            </p>
          </Section>
  
          <Section title="2. Information We Collect">
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email, phone number</li>
              <li>Account and login details</li>
              <li>SMS and call data (messages, call logs, recordings if enabled)</li>
              <li>Device and usage data</li>
            </ul>
          </Section>
  
          <Section title="3. How We Use Information">
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain services</li>
              <li>Send SMS notifications and alerts</li>
              <li>Enable voice calls and verification</li>
              <li>Improve user experience</li>
            </ul>
          </Section>
  
          <Section title="4. Use of Twilio">
            <p>
              We use Twilio, a third-party communication provider, to send SMS messages
              and handle voice calls. Twilio may process phone numbers, message content,
              and call data on our behalf.
            </p>
          </Section>
  
          <Section title="5. Consent to Communication">
            <p>
              By providing your phone number, you consent to receive SMS messages and
              voice calls. You can opt out anytime by replying STOP.
            </p>
          </Section>
  
          <Section title="6. Data Sharing">
            <p>
              We do not sell your personal data. We may share data with service providers
              like Twilio or when required by law.
            </p>
          </Section>
  
          <Section title="7. Data Security">
            <p>
              We use industry-standard measures such as encryption and secure servers to
              protect your information.
            </p>
          </Section>
  
          <Section title="8. Your Rights">
            <p>
              You may request access, correction, or deletion of your personal data by
              contacting us.
            </p>
          </Section>
  
          <Section title="9. Contact Us">
            <p>
              Email: mapyourown@gmail.com <br />
            </p>
          </Section>
  
          <div className="mt-8 text-xs text-gray-500 border-t pt-4">
            Message frequency may vary. Message & data rates may apply. Reply STOP to unsubscribe.
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