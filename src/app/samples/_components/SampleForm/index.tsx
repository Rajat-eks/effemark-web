"use client";
import React, { useState } from "react";

interface IndexProps {
  // define props here
}

const SampleForm: React.FC<IndexProps> = (props) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [types, setTypes] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleType(type: string) {
    setTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(null);
    if (!form.name || !form.email || !form.phone || types.length === 0) {
      setResult({ ok: false, msg: "Please fill required fields and select at least one type." });
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/sampleRequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company || undefined,
          types,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Failed to submit request");
      }
      setResult({ ok: true, msg: "Thanks! We'll email you the samples shortly." });
      setForm({ name: "", email: "", phone: "", company: "" });
      setTypes([]);
    } catch (err: any) {
      setResult({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <h4 className="md:text-[38px] text-[30px] font-semibold">
        Download samples
      </h4>
      <p className="md:text-[20px] text-[16px] text-center">
        Fill out the form below to access our complete sample portfolio
      </p>
      <div className="md:shadow shadow-red-600 shadow-2xs w-full  md:w-[70%] rounded-xl p-3 md:p-10 my-7">
        <form onSubmit={onSubmit} className="grid grid-cols-2  gap-4 md:gap-10">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Company Name "
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
          <div className="flex flex-col col-span-2 w-full space-y-2">
            <label htmlFor="">Please select the type of samples you need</label>
              <div className="w-full  col-span-2 flex ">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
                checked={types.includes("Trademark Search")}
                onChange={() => toggleType("Trademark Search")}
              />
              <label htmlFor="" className="text-[14px]">Trademark Search</label>
            </div>
               <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
                checked={types.includes("Trademark Monitoring")}
                onChange={() => toggleType("Trademark Monitoring")}
              />
              <label htmlFor="" className="text-[14px]">Trademark Monitoring</label>
            </div>
                <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
                checked={types.includes("Trademark Docketing")}
                onChange={() => toggleType("Trademark Docketing")}
              />
              <label htmlFor="" className="text-[14px]">Trademark Docketing</label>
            </div>
          </div>
          </div>
        
          <div className="flex items-center justify-center w-full col-span-2">
            <button className="bg-[#1264FF] text-white h-[40px] text-[14px] font-semibold  rounded-xl w-[174px] disabled:opacity-60" disabled={submitting} type="submit">
              {submitting ? "Submitting..." : "Submit & Get Access"}
            </button>
          </div>
          {result && (
            <div className={`col-span-2 ${result.ok ? "text-green-600" : "text-red-600"} text-sm`}>
              {result.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SampleForm;
