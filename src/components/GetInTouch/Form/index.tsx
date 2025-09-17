"use client";
import React, { useState } from "react";

interface IndexProps {
  // define props here
}

const Form: React.FC<IndexProps> = (props) => {
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
    } catch (err: any) {
      setResult({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="shadow-md  rounded-xl flex flex-col items-center justify-center p-4 space-y-2 bg-white ">
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-[32px]">Get in Touch</h5>
        <h6>You can reach us any time</h6>
      </div>
      <form onSubmit={onSubmit} className="w-full space-y-3 ">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Phone Number"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company Name (optional)"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="How we can help you (optional)"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.howWeCanHelp}
            onChange={(e) => update("howWeCanHelp", e.target.value)}
          />
        </div>
        <div>
          <textarea
            rows={4}
            cols={10}
            placeholder="Message"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            required
          ></textarea>
        </div>
        {result && (
          <div
            className={
              result.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"
            }
          >
            {result.msg}
          </div>
        )}
        <button
          className="bg-[#1264FF] text-white py-2 px-4 rounded-lg w-full disabled:opacity-60"
          disabled={submitting}
          type="submit"
        >
          {submitting ? "Sending..." : "Connect with our expert"}
        </button>
      </form>
    </div>
  );
};

export default Form;
