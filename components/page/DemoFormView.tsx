"use client";

import { useState, type FormEvent } from "react";
import type { DemoForm } from "@/lib/types";

// Design-only form: it validates and acknowledges, but nothing is sent anywhere yet.
// TODO: connect each form to the CRM / mailing tool when the backend is chosen.
export default function DemoFormView({ form, compact }: { form: DemoForm; compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="form-thanks" role="status">
        Bedankt! We nemen zo snel mogelijk contact met je op.
      </p>
    );
  }

  return (
    <form id={form.id} className={`demo-form${compact ? " is-compact" : ""}`} onSubmit={onSubmit}>
      {form.title && <p className="form-title">{form.title}</p>}
      {form.fields.map((field) => {
        const id = `${form.id ?? "form"}-${field.name}`;
        return (
          <div key={field.name} className="form-field">
            <label htmlFor={id} className={compact ? "sr-only" : undefined}>
              {field.required && <span aria-hidden="true">* </span>}
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea id={id} name={field.name} required={field.required} rows={4} />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                placeholder={compact ? field.label : undefined}
              />
            )}
          </div>
        );
      })}
      <button type="submit" className="btn btn-block">
        {form.submit}
      </button>
    </form>
  );
}
