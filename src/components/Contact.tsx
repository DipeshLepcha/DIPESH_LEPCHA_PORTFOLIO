import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Clock } from 'lucide-react';
import { dipeshProfile } from '../data/profile.ts';
import { validateContactForm } from '../utils/portfolio-logic.ts';
import type { ContactFormData } from '../types/portfolio.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F4F0E8] bg-grain relative overflow-hidden border-t border-[#222421]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
            <span className="w-8 h-[1.5px] bg-[#BD493B]" />
            <span className="font-mono">06</span>
            <span>&bull;</span>
            <span className="tracking-wider uppercase">CONTACT</span>
            <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">&bull; Direct Connection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#222421] tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#817865] max-w-xl font-sans">
            Whether you have an upcoming web project, require robust .NET backend engineering, or want to discuss database architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#222421]/12 p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222421] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email item */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#222421] text-[#F4F0E8] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#BD493B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#817865] block font-sans">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${dipeshProfile.email}`}
                      className="text-sm sm:text-base font-semibold text-[#222421] hover:text-[#BD493B] transition-colors break-all"
                    >
                      {dipeshProfile.email}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#222421] text-[#F4F0E8] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#BD493B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#817865] block font-sans">
                      Location &amp; Roots
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#222421] block font-sans">
                      {dipeshProfile.location}
                    </span>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#222421] text-[#F4F0E8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#BD493B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#817865] block font-sans">
                      Response Time
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#222421] block font-sans">
                      Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-[#222421]/10">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#817865] block mb-3 font-sans">
                  Developer Profiles
                </span>
                <div className="flex space-x-3">
                  <a
                    href={dipeshProfile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#E8E0D2] text-[#222421] text-xs font-semibold hover:bg-[#222421] hover:text-[#F4F0E8] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={dipeshProfile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#E8E0D2] text-[#222421] text-xs font-semibold hover:bg-[#222421] hover:text-[#F4F0E8] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* API Readiness Note */}
            <div className="p-4 rounded-xl bg-[#222421]/5 border border-[#222421]/15 text-xs text-[#222421]/80 leading-relaxed font-sans">
              <span className="font-bold text-[#222421] block mb-1">
                API Architecture Note
              </span>
              This form sends client payloads formatted for future endpoint binding: <code className="font-mono text-[#BD493B]">POST /api/v1/contact</code> backed by ASP.NET Core &amp; MySQL.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border border-[#222421]/12 p-6 sm:p-10 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-[#222421] mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#817865] mb-6 font-sans">
              Fill in your details below and I will get back to you promptly.
            </p>

            {submissionSuccess ? (
              <div className="p-6 rounded-xl bg-stone-50 border border-[#BD493B]/30 text-[#222421] animate-in fade-in duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-[#BD493B] shrink-0" />
                  <h4 className="font-bold text-base font-serif">Message Sent Successfully</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#817865] leading-relaxed font-sans">
                  Thank you for reaching out! Your message has been received. I will review it and reply via email shortly.
                </p>
                <button
                  onClick={() => setSubmissionSuccess(false)}
                  className="mt-4 text-xs font-semibold text-[#BD493B] underline hover:text-[#222421]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 font-sans">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#222421] mb-1.5">
                      Your Name <span className="text-[#BD493B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tenzing Norbu"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        formErrors.name ? 'border-[#BD493B] bg-rose-50/30' : 'border-[#222421]/20 bg-[#F4F0E8]/50'
                      } text-sm text-[#222421] placeholder:text-[#817865]/50 focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-[#BD493B] flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#222421] mb-1.5">
                      Email Address <span className="text-[#BD493B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. tenzing@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        formErrors.email ? 'border-[#BD493B] bg-rose-50/30' : 'border-[#222421]/20 bg-[#F4F0E8]/50'
                      } text-sm text-[#222421] placeholder:text-[#817865]/50 focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-[#BD493B] flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#222421] mb-1.5">
                    Subject <span className="text-[#BD493B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. .NET Web Application Architecture / Collaboration"
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      formErrors.subject ? 'border-[#BD493B] bg-rose-50/30' : 'border-[#222421]/20 bg-[#F4F0E8]/50'
                    } text-sm text-[#222421] placeholder:text-[#817865]/50 focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-[#BD493B] flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#222421] mb-1.5">
                    Message <span className="text-[#BD493B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, technology stack, or questions..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      formErrors.message ? 'border-[#BD493B] bg-rose-50/30' : 'border-[#222421]/20 bg-[#F4F0E8]/50'
                    } text-sm text-[#222421] placeholder:text-[#817865]/50 focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-[#BD493B] flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#222421] hover:bg-[#343630] disabled:opacity-60 text-[#F4F0E8] px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#F4F0E8] border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
