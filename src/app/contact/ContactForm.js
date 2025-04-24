'use client';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      toast.error('Please verify the reCAPTCHA before submitting.');
      return;
    }

    setSending(true);
    toast.loading('Sending...', { id: 'sending' });

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );      
      toast.success('Message sent!', { id: 'sending' });
      form.current.reset();
      grecaptcha.reset();
    } catch (err) {
      console.error(err);
      toast.error('Failed to send. Please try again.', { id: 'sending' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white space-y-6">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {['title', 'name', 'email', 'phone', 'company', 'address'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium capitalize">{field}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              required={field === 'name' || field === 'email'}
              className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:outline-none"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:outline-none"
          />
        </div>

        {/* ✅ reCAPTCHA widget */}
        <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div>

        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
