"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [status, setStatus] = useState("");
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !message) {
      setStatus(
        "Please enter your name and a short description of your project.",
      );
      return;
    }
    const service = String(form.get("service") || "A new project");
    const subject = `${service} — enquiry from ${name}`;
    const body = `Hi PanTech,\n\n${message}\n\nService: ${service}\nName: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email draft is ready in your email app. Please send it there to complete your enquiry. If it did not open, email ${site.email} directly.`,
    );
  }
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Alex Morgan"
          required
          maxLength={100}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          autoComplete="email"
          type="email"
          placeholder="alex@company.com"
          required
          maxLength={254}
        />
      </div>
      <div className="form-field">
        <label htmlFor="service">What would you like to build?</label>
        <select
          id="service"
          name="service"
          defaultValue={
            services.some((service) => service.title === initialService)
              ? initialService
              : ""
          }
        >
          <option value="">Let’s explore an idea</option>
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your idea, goals, and anything else we should know…"
          required
          maxLength={3000}
          rows={5}
        />
      </div>
      <button className="button button--dark" type="submit">
        Create email enquiry <ArrowUpRight size={16} />
      </button>
      <p className="form-note">
        This opens a draft in your email app. Your enquiry is sent only when you
        send that email.
      </p>
      <p role="status" className="form-status">
        {status}
      </p>
    </form>
  );
}
