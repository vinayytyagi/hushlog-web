"use client";

import React, { useState } from "react";
import { ShieldCheck, Eye, EyeOff, Lock, CheckCircle2, Copy, Sparkles, Terminal } from "lucide-react";

export function RedactionInspectorDemo() {
  const [isRedacted, setIsRedacted] = useState(true);
  const [showConsentModal, setShowConsentModal] = useState(false);

  return (
    <div id="demo" style={{
      background: "var(--surface)",
      border: "2px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(91, 82, 204, 0.08)"
    }}>
      {/* Studio Header Bar */}
      <div style={{
        padding: "18px 28px",
        background: "var(--surface-raised)",
        borderBottom: "1.5px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ShieldCheck size={18} color="var(--accent)" />
          <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--text)" }}>
            Real-Time PII Redaction & Consent Studio
          </span>
          <span style={{
            fontSize: "12px",
            padding: "3px 10px",
            background: "#ffffff",
            color: "var(--accent)",
            borderRadius: "6px",
            fontWeight: 800,
            border: "1px solid var(--border)"
          }}>
            INDIAN DPDP & GDPR COMPLIANT
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => setIsRedacted(!isRedacted)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 700,
              background: isRedacted ? "var(--accent)" : "#ffffff",
              color: isRedacted ? "#ffffff" : "var(--text)",
              border: "1.5px solid var(--border)"
            }}
          >
            {isRedacted ? <EyeOff size={14} /> : <Eye size={14} />}
            {isRedacted ? "Redaction: ACTIVE" : "Redaction: DISABLED"}
          </button>
          <button
            onClick={() => setShowConsentModal(true)}
            className="btn btn-secondary"
            style={{ padding: "6px 14px", fontSize: "13px" }}
          >
            Preview Consent Modal
          </button>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div style={{ padding: "36px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "28px",
          alignItems: "start"
        }}>
          {/* Left: Code Log Viewer */}
          <div style={{
            background: "#14161f",
            color: "#e8eaf4",
            borderRadius: "14px",
            padding: "24px",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            lineHeight: 1.8,
            boxShadow: "0 12px 32px rgba(20, 22, 31, 0.2)"
          }}>
            <div style={{ color: "#9a94ff", fontWeight: 700, marginBottom: "14px", borderBottom: "1px solid #282b3d", paddingBottom: "8px" }}>
              // IN-PROCESS LOG EVENT (CRASH DISPATCH)
            </div>

            <div>
              <span style={{ color: "#7dd3fc" }}>[ERROR]</span> Unhandled IPC rejection in window renderer:
            </div>
            <div>
              <strong>User Identity:</strong>{" "}
              {isRedacted ? (
                <span style={{ background: "#282b3d", padding: "1px 8px", borderRadius: "4px", color: "#9a94ff" }}>
                  [REDACTED_USER_HASH: 7a9f2e]
                </span>
              ) : (
                <span style={{ color: "#f43f5e" }}>vinay_tyagi (vinay@valentir.com)</span>
              )}
            </div>
            <div>
              <strong>Indian Mobile:</strong>{" "}
              {isRedacted ? (
                <span style={{ background: "#282b3d", padding: "1px 8px", borderRadius: "4px", color: "#9a94ff" }}>
                  [REDACTED_PHONE]
                </span>
              ) : (
                <span style={{ color: "#f43f5e" }}>+91 98104 29104</span>
              )}
            </div>
            <div>
              <strong>Local File Path:</strong>{" "}
              {isRedacted ? (
                <span style={{ background: "#282b3d", padding: "1px 8px", borderRadius: "4px", color: "#9a94ff" }}>
                  C:\Users\[USERNAME]\Projects\secret_app\main.ts:142
                </span>
              ) : (
                <span style={{ color: "#f43f5e" }}>C:\Users\Vinay\Desktop\secret_app\main.ts:142</span>
              )}
            </div>
            <div>
              <strong>Auth Bearer:</strong>{" "}
              {isRedacted ? (
                <span style={{ background: "#282b3d", padding: "1px 8px", borderRadius: "4px", color: "#9a94ff" }}>
                  Bearer [REDACTED_JWT_TOKEN]
                </span>
              ) : (
                <span style={{ color: "#f43f5e" }}>Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...</span>
              )}
            </div>
          </div>

          {/* Right: Privacy Rules Summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="card" style={{ padding: "24px" }}>
              <h4 style={{ fontSize: "16px", fontWeight: 800, color: "var(--text)", marginBottom: "8px" }}>
                Allow-List Typed Classification
              </h4>
              <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                Unlike dumb regex search-and-replace that misses obfuscated secrets, Hushlog assigns formal privacy classifications at log time:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
                <span style={{ color: "#1f7a55" }}>✓ PUBLIC: App version, OS build, error code</span>
                <span style={{ color: "#b45309" }}>⚠ PERSONAL: Redacted before bundle build</span>
                <span style={{ color: "#b42318" }}>🔒 SECRET: Discarded immediately in-memory</span>
              </div>
            </div>

            <div style={{ background: "var(--surface-raised)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>
                X25519 ASYMMETRIC ENCRYPTION
              </div>
              <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                Bundles are sealed to your public key using ChaCha20-Poly1305. Even if an attacker intercepts the zip bundle in transit, only your offline private key can open it.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulated User Consent Modal */}
      {showConsentModal && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(29, 33, 51, 0.6)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
          padding: "20px"
        }}>
          <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            border: "2px solid var(--border)",
            maxWidth: "480px",
            width: "100%",
            padding: "28px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.2)"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text)", marginBottom: "8px" }}>
              Share Diagnostic Crash Report?
            </h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "16px" }}>
              An unexpected error occurred. You can choose to send an encrypted diagnostics bundle to help the developer fix this issue.
            </p>
            <div style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "12px",
              fontFamily: "var(--font-mono)",
              color: "#334155",
              marginBottom: "20px"
            }}>
              ✓ File paths: Redacted<br />
              ✓ Usernames & IPs: Scrubbed<br />
              ✓ Sealed to Developer Public Key
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setShowConsentModal(false)}
                className="btn btn-secondary"
                style={{ padding: "8px 18px", fontSize: "13px" }}
              >
                Don't Send
              </button>
              <button
                onClick={() => setShowConsentModal(false)}
                className="btn btn-primary"
                style={{ padding: "8px 18px", fontSize: "13px" }}
              >
                Allow & Send Encrypted
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
