import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import { Download, ShieldCheck } from "lucide-react";

export function SiteHeader() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backdropFilter: "blur(16px)",
      background: "rgba(243, 244, 248, 0.85)",
      borderBottom: "1.5px solid var(--border)"
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "76px"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Logo />
          <div>
            <span style={{ fontWeight: 800, fontSize: "20px", letterSpacing: "-0.01em", color: "var(--text)" }}>
              {siteConfig.name}
            </span>
            <span style={{
              marginLeft: "10px",
              padding: "3px 8px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 800,
              background: "rgba(91, 82, 204, 0.15)",
              color: "var(--accent)",
              border: "1px solid rgba(91, 82, 204, 0.3)"
            }}>
              PRIVACY DIAGNOSTICS
            </span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link href="#demo" style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}>Interactive Demo</Link>
          <Link href="#features" style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}>Redaction Engine</Link>
          <Link href="#sdk" style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}>SDKs (Node/Rust)</Link>
          <Link href="#pricing" style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}>Pricing</Link>
          <Link href="#faq" style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}>FAQ</Link>
          <Link href="#download" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }}>
            <Download size={14} /> Download Studio
          </Link>
        </nav>
      </div>
    </header>
  );
}
