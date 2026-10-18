import Link from "next/link";
import { Download, ShieldCheck, EyeOff, Lock, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { releaseConfig } from "@/config/release";

export function Hero() {
  return (
    <section style={{ paddingTop: "72px", paddingBottom: "48px", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "920px" }}>
        <div style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="badge">
            <Lock size={14} /> Zero Cloud Leakage • End-to-End Encrypted Desktop Diagnostics
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(38px, 6vw, 64px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "24px",
          color: "var(--text)"
        }}>
          Diagnostics that keep secrets.{" "}
          <span style={{
            background: "linear-gradient(135deg, #5B52CC 0%, #1F7A55 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Never leak user data.
          </span>
        </h1>

        <p style={{
          fontSize: "clamp(17px, 2.2vw, 20px)",
          color: "var(--muted)",
          lineHeight: 1.6,
          marginBottom: "36px",
          maxWidth: "780px",
          margin: "0 auto 36px"
        }}>
          Stop accidentally collecting user API keys, passwords, and file paths in desktop crash logs. 
          Hushlog provides typed allow-list redaction, an interactive user consent dialog, and X25519 public-key encryption so you can debug issues without violating user trust.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
          <Link href="#download" className="btn btn-primary" style={{ fontSize: "16px", padding: "16px 36px" }}>
            <Download size={18} /> Download Studio for Windows (v{releaseConfig.version})
          </Link>
          <Link href="#demo" className="btn btn-secondary" style={{ fontSize: "16px", padding: "16px 36px" }}>
            Try Live Redaction Studio
          </Link>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "28px",
          flexWrap: "wrap",
          fontSize: "14px",
          color: "var(--muted)",
          fontWeight: 600
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <EyeOff size={16} color="var(--accent)" /> Automatic PII & Indian Mobile Scrubbing
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Lock size={16} color="var(--accent)" /> X25519 Sealed Diagnostics Bundles
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ShieldCheck size={16} color="var(--accent)" /> Drop-In React Consent Modal
          </span>
        </div>
      </div>
    </section>
  );
}
