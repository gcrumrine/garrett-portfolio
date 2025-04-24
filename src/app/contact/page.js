// src/app/contact/page.js
'use client';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <ContactForm />
    </div>
  );
}
