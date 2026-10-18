import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How does Hushlog differ from Sentry or Bugsnag?",
    a: "Sentry and Bugsnag require sending raw crash reports to their cloud servers, where employee PII, local file paths, and database tokens can be stored. Hushlog redacts PII client-side before serialization, presents a clear user consent modal to the end-user, and seals the bundle directly to your public key."
  },
  {
    q: "Does Hushlog comply with India's DPDP Act and GDPR?",
    a: "Yes. By scrubbing user identities and local directory names on the client device, Hushlog helps desktop app publishers satisfy data minimization and consent requirements."
  },
  {
    q: "What is your refund policy?",
    a: "We offer an unconditional 30-day money-back guarantee. If Hushlog does not fit your application architecture, email support@valentir.com for a full refund."
  }
];

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Technical details on X25519 cryptography, redaction accuracy, and consent modals.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 800, marginBottom: "8px", color: "var(--text)", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <HelpCircle size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                {faq.q}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, paddingLeft: "28px" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
