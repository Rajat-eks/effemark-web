"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    company: "",
    howWeCanHelp: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(null);
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.country ||
      !form.message
    ) {
      setResult({ ok: false, msg: "Please fill all required fields." });
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/contactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Failed to send message");
      }
      setResult({ ok: true, msg: "Thanks! We will contact you shortly." });
      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        company: "",
        howWeCanHelp: "",
      });
      // Close modal after successful submission
      setTimeout(() => {
        onClose();
        setResult(null);
      }, 2000);
    } catch (err: any) {
      setResult({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-bet  ween p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Get Free Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Phone Number *"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Country *"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="How can we help you? (Optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                value={form.howWeCanHelp}
                onChange={(e) => update("howWeCanHelp", e.target.value)}
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Message *"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                required
              />
            </div>

            {/* Result Message */}
            {result && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  result.ok
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {result.msg}
              </div>
            )}

            {/* Privacy Notice */}
            <div className="text-xs text-gray-600">
              <p>
                By clicking the submit button, you give EffeMark consent to
                store and process the personal information submitted above.
                EffeMark is committed to protecting and respecting your privacy,
                we'll only use your information to provide the products and
                services you requested from us.
              </p>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              disabled={submitting}
              type="submit"
            >
              {submitting ? "Sending..." : "Get Free Consultation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
