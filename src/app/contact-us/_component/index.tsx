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
    <div className="shadow-md  rounded-xl flex flex-col items-center justify-center p-4 bg-white w-full md:w-full h-full">
      <div className="flex flex-col items-start justify-start w-full">
        <h5 className="w-full text-start pb-4">Send a Message</h5>
      </div>
      <form onSubmit={onSubmit} className="w-full space-y-3 ">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[11px]"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[11px]"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Phone Number"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[11px]"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[11px]"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            required
          />
        </div>

        <div>
          <textarea
            rows={10}
            cols={10}
            placeholder="Message"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[11px]"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <p className="text-[12px] text-[#606060] font-normal text-justify">
            By clicking the submit button, you give EffeMark consent to store
            and process the personal information submitted above. EffeMark is
            committed to protecting and respecting your privacy, we'll only use
            your information to provide the products and services you requested
            from us.
          </p>
        </div>

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
