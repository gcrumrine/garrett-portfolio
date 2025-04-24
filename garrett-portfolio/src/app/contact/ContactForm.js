'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    toast.loading('Sending message...', { id: 'sendToast' });

    emailjs.sendForm(
      'service_bxb1izq',
      'template_ritzh2b',
      e.target,
      '4qFRWxsFgSRCDOowz'
    ).then(
      () => {
        toast.success('Message sent!', { id: 'sendToast' });
        setStatus('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        toast.error('Failed to send. Please try again.', { id: 'sendToast' });
        setStatus('An error occurred. Please try again.');
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl space-y-6">
      <Toaster position="top-right" />
      <h1 className="text-4xl font-bold text-left text-white">Share your contact information with me so I dont miss anything from you!</h1>
      <form onSubmit={sendEmail} className="space-y-4">
        {[
          { label: 'Title', name: 'title', type: 'text' },
          { label: 'Name', name: 'name', type: 'text', required: true },
          { label: 'Email', name: 'email', type: 'email', required: true },
          { label: 'Phone', name: 'phone', type: 'tel' },
          { label: 'Company', name: 'company', type: 'text' },
          { label: 'Address', name: 'address', type: 'text' }
        ].map(({ label, name, type, required }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium mb-1 text-gray-300">
              {label}
            </label>
            <input
              type={type}
              name={name}
              required={required}
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
        ))}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">Message</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className="text-center mt-2 text-sm text-gray-400">{status}</p>
      )}
    </div>
  );
}
