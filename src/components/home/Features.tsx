import { ShieldAlert, EyeOff, Lock, UserCheck, FileCheck, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: EyeOff,
    title: "Deep PII & Path Redaction",
    desc: "Automatically strips Windows user directory names, IP addresses, Indian phone numbers (+91), JWT tokens, database connection strings, and license keys from every log line."
  },
  {
    icon: Lock,
    title: "Asymmetric Sealed Bundles",
    desc: "Crash logs and memory minidumps are encrypted using X25519 + ChaCha20-Poly1305 directly to the developer's public key. No intermediary server can inspect the bundle contents."
  },
  {
    icon: UserCheck,
    title: "Explicit User Consent Dialogs",
    desc: "Includes pre-built, elegant React/Electron consent modals. The user sees an exact breakdown of what is being shared before a single byte leaves their workstation."
  },
  {
    icon: FileCheck,
    title: "Typed Classification System",
    desc: "Tag fields as Public, Internal, Personal, or Secret. Guarantees that sensitive fields are purged before rendering or writing to disk."
  },
  {
    icon: ShieldAlert,
    title: "DPDP Act & GDPR Compliant",
    desc: "Fulfills privacy requirements under India's Digital Personal Data Protection Act and EU GDPR for diagnostic telemetry handling."
  },
  {
    icon: Layers,
    title: "Desktop Bundle Inspector App",
    desc: "Includes a standalone Windows desktop app for developers to decrypt, inspect, and analyze customer diagnostic bundles with full stack trace demangling."
  }
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 className="section-title">Built for desktop developers who respect customer privacy</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Cloud crash reporters like Sentry or Bugsnag make you send raw crashes to their servers. Hushlog keeps privacy on the client.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px"
        }}>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card">
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "#e9ebf3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  marginBottom: "20px"
                }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text)" }}>
                  {f.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
