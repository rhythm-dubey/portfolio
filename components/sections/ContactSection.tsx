"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/portfolio";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-section-gap bg-surface-container-low relative">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-gutter text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl text-on-background mb-4">
          {contact.title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {contact.subtitle}
        </p>
      </div>
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-gutter">
        <form
          onSubmit={handleSubmit}
          className="glass p-8 md:p-12 rounded-2xl space-y-6"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label
                htmlFor="contact-name"
                className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-1"
              >
                {contact.fields.name.label}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder={contact.fields.name.placeholder}
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface code-syntax focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
            </div>
            <div className="space-y-2 text-left">
              <label
                htmlFor="contact-email"
                className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-1"
              >
                {contact.fields.email.label}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder={contact.fields.email.placeholder}
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface code-syntax focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>
          <div className="space-y-2 text-left">
            <label
              htmlFor="contact-message"
              className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-1"
            >
              {contact.fields.message.label}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder={contact.fields.message.placeholder}
              className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface code-syntax focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-error font-body-md text-body-md text-left" role="alert">
              Please fill in all fields before submitting.
            </p>
          )}
          {status === "success" && (
            <p
              className="text-primary font-body-md text-body-md text-left"
              role="status"
            >
              Message received. Thank you for reaching out!
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-on-primary py-4 rounded-lg font-code-md text-code-md font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(78,222,163,0.4)] transition-all active:scale-95"
          >
            {contact.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
