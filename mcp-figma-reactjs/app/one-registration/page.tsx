"use client";

import { useState } from "react";
import "./one-tokens.css";

const STEPS = [
  { id: 1, label: "Account & User Information", done: true },
  { id: 2, label: "Company Information", active: true },
  { id: 3, label: "Additional Information", active: false },
  { id: 4, label: "Review Registration", active: false },
];

const inputBase =
  "w-full bg-[var(--one-bg-white)] text-[var(--one-text-primary)] border rounded-[var(--one-input-border-radius)] focus:outline-none focus:ring-2 focus:ring-(--one-magenta)/30 focus:border-[var(--one-magenta)] [border-color:var(--one-border)]";
const inputHeight = "h-[var(--one-input-height)]";
const inputPadding = "px-[var(--one-input-px)]";
const labelClass =
  "block text-[var(--one-text-primary)] font-(--one-font-weight-medium) mb-[var(--one-gap-label-input)]";
const labelSize = "text-[var(--one-font-label)] leading-[var(--one-line-height-label)]";
const selectChevron =
  "appearance-none bg-no-repeat pr-10 bg-[length:16px] bg-[position:right_12px_center] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23666%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')]";

export default function OneRegistrationPage() {
  const [roleDecision, setRoleDecision] = useState<"yes" | "no" | "undetermined">("yes");

  return (
    <div className="one-registration min-h-screen flex flex-col" style={{ background: "var(--one-bg-page)" }}>
      {/* Header – 56px height, 24px horizontal padding */}
      <header
        className="flex items-center justify-between border-b"
        style={{
          height: "var(--one-header-height)",
          paddingLeft: "var(--one-header-px)",
          paddingRight: "var(--one-header-px)",
          background: "var(--one-bg-white)",
          borderColor: "var(--one-border)",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            background: "var(--one-magenta)",
            padding: "var(--one-space-8) var(--one-space-16)",
          }}
        >
          <span
            className="text-white font-(--one-font-weight-bold) tracking-tight"
            style={{ fontSize: "var(--one-font-heading)" }}
          >
            ONE
          </span>
        </div>
        <nav
          className="flex items-center"
          style={{ gap: "var(--one-space-32)" }}
        >
          <a
            href="#"
            className="font-(--one-font-weight-medium) hover:opacity-80"
            style={{ fontSize: "var(--one-font-nav)", color: "var(--one-text-primary)" }}
          >
            ONE Solutions
          </a>
          <a
            href="#"
            className="font-(--one-font-weight-medium) hover:opacity-80"
            style={{ fontSize: "var(--one-font-nav)", color: "var(--one-text-primary)" }}
          >
            Support
          </a>
          <button
            type="button"
            className="p-2 hover:opacity-80"
            style={{ color: "var(--one-text-secondary)" }}
            aria-label="Account"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 font-(--one-font-weight-medium)"
            style={{ fontSize: "var(--one-font-nav)", color: "var(--one-text-primary)" }}
          >
            English
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main – max-width 1152px (72rem), 24px side padding, 40px top/bottom */}
      <main
        className="flex-1 w-full mx-auto"
        style={{
          maxWidth: 1152,
          padding: "var(--one-space-40) var(--one-space-24)",
        }}
      >
        {/* Page title – 24px, semibold, center, 40px bottom */}
        <h1
          className="text-center font-(--one-font-weight-semibold)"
          style={{
            fontSize: "var(--one-font-title)",
            lineHeight: "var(--one-line-height-title)",
            color: "var(--one-text-primary)",
            marginBottom: "var(--one-space-40)",
          }}
        >
          Welcome to ONE Registration
        </h1>

        {/* Progress steps – 40px circle, 8px gap to label, dashed connector */}
        <div
          className="relative flex items-start justify-between mb-[40px]"
          style={{ paddingLeft: "var(--one-space-16)", paddingRight: "var(--one-space-16)" }}
        >
          <div
            className="absolute z-0 border-t border-dashed"
            style={{
              top: 20,
              left: "15%",
              right: "15%",
              height: 1,
              borderColor: "var(--one-border)",
            }}
          />
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center flex-1 relative z-10"
              style={{ maxWidth: 200 }}
            >
              <div
                className="rounded-full flex items-center justify-center font-(--one-font-weight-semibold)"
                style={{
                  width: "var(--one-step-circle-size)",
                  height: "var(--one-step-circle-size)",
                  fontSize: "var(--one-font-body)",
                  marginBottom: "var(--one-space-8)",
                  ...(step.done
                    ? { background: "var(--one-success)", color: "white" }
                    : step.active
                      ? { background: "var(--one-magenta)", color: "white" }
                      : {
                          background: "var(--one-step-inactive-bg)",
                          color: "var(--one-step-inactive-text)",
                        }),
                }}
              >
                {step.done ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <span
                className="text-center"
                style={{
                  fontSize: "var(--one-font-body)",
                  lineHeight: "var(--one-line-height-body)",
                  color: step.active ? "var(--one-magenta)" : "var(--one-text-secondary)",
                  fontWeight: step.active ? "var(--one-font-weight-semibold)" : "var(--one-font-weight-medium)",
                }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form card – 8px radius, 32px padding, 1px border */}
        <div
          className="overflow-hidden"
          style={{
            background: "var(--one-bg-white)",
            borderRadius: "var(--one-card-radius)",
            border: "1px solid var(--one-border)",
            padding: "var(--one-card-padding)",
          }}
        >
          {/* Section title – 20px, semibold, teal, 24px bottom */}
          <h2
            className="font-(--one-font-weight-semibold) mb-[24px]"
            style={{
              fontSize: "var(--one-font-heading)",
              lineHeight: "var(--one-line-height-heading)",
              color: "var(--one-section-title)",
            }}
          >
            Company Information
          </h2>

          {/* Two columns – 40px gap between columns, 24px between rows */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              columnGap: "var(--one-gap-form-col)",
              rowGap: "var(--one-gap-form-row)",
            }}
          >
            {/* Left column */}
            <div className="flex flex-col" style={{ gap: "var(--one-gap-form-row)" }}>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Company Name</label>
                <input
                  type="text"
                  defaultValue="ONE TECH STOP VIETNAM"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Local Language Name (Optional)</label>
                <input
                  type="text"
                  defaultValue="ONE TECH STOP VIETNAM"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Trade Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Trade Name"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Shipping Party Type</label>
                <select
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) ${selectChevron}`}
                >
                  <option value="">Shipping Party Type</option>
                </select>
              </div>
              <div>
                <label className={`${labelClass} ${labelSize} flex items-center gap-[6px]`}>
                  Company Business Type
                  <span
                    className="rounded-full text-white text-[10px] flex items-center justify-center font-bold shrink-0"
                    style={{
                      width: "var(--one-info-icon-size)",
                      height: "var(--one-info-icon-size)",
                      background: "var(--one-info-icon-bg)",
                    }}
                  >
                    i
                  </span>
                </label>
                <select
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) ${selectChevron}`}
                >
                  <option value="">Company Business Type</option>
                </select>
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`} style={{ marginBottom: "var(--one-space-8)" }}>
                  As part of your role, do you make contract & ocean carrier selection decisions?
                </label>
                <div className="flex gap-6">
                  {(["yes", "no", "undetermined"] as const).map((value) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="roleDecision"
                        checked={roleDecision === value}
                        onChange={() => setRoleDecision(value)}
                        className="w-4 h-4 focus:ring-(--one-magenta)"
                        style={{ accentColor: "var(--one-magenta)" }}
                      />
                      <span
                        className="capitalize"
                        style={{ fontSize: "var(--one-font-body)", color: "var(--one-text-primary)" }}
                      >
                        {value === "undetermined" ? "Undetermined" : value === "yes" ? "Yes" : "No"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col" style={{ gap: "var(--one-gap-form-row)" }}>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Address</label>
                <input
                  type="text"
                  defaultValue="No. 7 Asafoatse Nettey Road"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>City</label>
                <input
                  type="text"
                  defaultValue="San Francisco"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div className="relative group">
                <label className={`${labelClass} ${labelSize}`}>Country</label>
                <input
                  type="text"
                  defaultValue="UNITED"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
                <div
                  className="absolute left-full ml-2 top-0 w-64 p-3 bg-white border rounded z-10 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-opacity"
                  style={{
                    borderColor: "var(--one-border)",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    fontSize: "var(--one-font-label)",
                    lineHeight: "var(--one-line-height-label)",
                    color: "var(--one-text-secondary)",
                  }}
                >
                  Please select the nearest major city to your specified address. This ensures we can connect you with our relevant Sales representative best positioned to support your area when required.
                </div>
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>State</label>
                <input
                  type="text"
                  defaultValue="CALIFORNIA"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div>
                <label className={`${labelClass} ${labelSize} flex items-center gap-[6px]`}>
                  Location
                  <span
                    className="rounded-full text-white text-[10px] flex items-center justify-center font-bold shrink-0"
                    style={{
                      width: "var(--one-info-icon-size)",
                      height: "var(--one-info-icon-size)",
                      background: "var(--one-info-icon-bg)",
                    }}
                  >
                    i
                  </span>
                </label>
                <select
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) ${selectChevron}`}
                >
                  <option value="">Location</option>
                </select>
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Zip Code</label>
                <input
                  type="text"
                  defaultValue="550000"
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
                />
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Department</label>
                <select
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) ${selectChevron}`}
                >
                  <option value="">Department</option>
                </select>
              </div>
              <div>
                <label className={`${labelClass} ${labelSize}`}>Trade</label>
                <select
                  className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) ${selectChevron}`}
                >
                  <option value="">Trade</option>
                </select>
              </div>
            </div>
          </div>

          {/* Supplementary Information – 32px top, 24px padding-top, border-top */}
          <div
            className="mt-[32px] pt-[24px]"
            style={{ borderTop: "1px solid var(--one-border-light)" }}
          >
            <h3
              className="font-(--one-font-weight-semibold) mb-[16px]"
              style={{
                fontSize: "var(--one-font-section)",
                lineHeight: "var(--one-line-height-body)",
                color: "var(--one-section-title)",
              }}
            >
              Supplementary Information
            </h3>
            <div style={{ maxWidth: 448 }}>
              <label className={`${labelClass} ${labelSize} flex items-center gap-[6px]`}>
                Tax ID
                <span
                  className="rounded-full text-white text-[10px] flex items-center justify-center font-bold shrink-0"
                  style={{
                    width: "var(--one-info-icon-size)",
                    height: "var(--one-info-icon-size)",
                    background: "var(--one-info-icon-bg)",
                  }}
                >
                  i
                </span>
              </label>
              <input
                type="text"
                placeholder="Tax ID"
                className={`${inputBase} ${inputHeight} ${inputPadding} border text-(--one-font-body) placeholder:text-(--one-text-placeholder)`}
              />
            </div>
          </div>

          {/* Actions – 32px top, 24px padding-top, border-top, 12px gap */}
          <div
            className="flex justify-end gap-3 mt-[32px] pt-[24px]"
            style={{ borderTop: "1px solid var(--one-border-light)" }}
          >
            <button
              type="button"
              className="font-(--one-font-weight-medium) rounded-(--one-button-radius) hover:opacity-90 transition-opacity"
              style={{
                height: "var(--one-button-height)",
                paddingLeft: "var(--one-button-px)",
                paddingRight: "var(--one-button-px)",
                border: "2px solid var(--one-magenta-border)",
                background: "transparent",
                color: "var(--one-button-outline-text)",
                fontSize: "var(--one-font-body)",
              }}
            >
              Previous
            </button>
            <button
              type="button"
              className="font-(--one-font-weight-medium) text-white rounded-(--one-button-radius) hover:opacity-90 transition-opacity"
              style={{
                height: "var(--one-button-height)",
                paddingLeft: "var(--one-button-px)",
                paddingRight: "var(--one-button-px)",
                background: "var(--one-magenta)",
                fontSize: "var(--one-font-body)",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer – 24px padding, 8px gap, 14px text */}
      <footer
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          background: "var(--one-bg-page)",
          borderTop: "1px solid var(--one-border)",
          padding: "var(--one-space-24)",
          gap: "var(--one-space-8)",
        }}
      >
        <p
          style={{
            fontSize: "var(--one-font-body)",
            lineHeight: "var(--one-line-height-body)",
            color: "var(--one-text-secondary)",
          }}
        >
          Copyright 2021 Ocean Network Express Pte. Ltd. All Rights Reserved.
        </p>
        <div
          className="flex"
          style={{ gap: "var(--one-space-24)" }}
        >
          <a
            href="#"
            className="font-(--one-font-weight-medium) hover:underline"
            style={{ fontSize: "var(--one-font-body)", color: "var(--one-magenta)" }}
          >
            Privacy Cookie Statement
          </a>
          <a
            href="#"
            className="font-(--one-font-weight-medium) hover:underline"
            style={{ fontSize: "var(--one-font-body)", color: "var(--one-magenta)" }}
          >
            Legal Terms of Use
          </a>
        </div>
        {/* Decorative ship shapes */}
        <div
          className="absolute bottom-0 left-0 w-48 h-24 pointer-events-none opacity-[0.08]"
          style={{ background: "var(--one-magenta)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-48 h-24 pointer-events-none opacity-[0.08]"
          style={{ background: "var(--one-magenta)" }}
        />
      </footer>
    </div>
  );
}
