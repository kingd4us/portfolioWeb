import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Layer 2: Our hidden honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formLoadTime, setFormLoadTime] = useState(0); // Layer 3: State for timestamp

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Layer 3: Timestamp Check
    if (Date.now() - formLoadTime < 3000) {
      console.log('Bot submission detected (too fast)');
      setIsSubmitting(false);
      return;
    }

    // Layer 2: Honeypot Check
    if (formData.honeypot) {
      console.log('Bot submission detected (honeypot filled)');
      setIsSubmitting(false);
      return;
    }

    const submissionData = {
      ...formData,
      access_key: '344366ee-e5d5-45ad-b242-983691a0b7db', // Your key is already here
    };
    
    // Remove honeypot from the final data sent
    delete (submissionData as any).honeypot;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success'); // This will trigger the animation
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        console.error('Submission Error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for the form and success message
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
              GET IN TOUCH
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Ready to collaborate? Let's discuss how we can build something amazing together.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">fmanalu900@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white">Linkedin</p>
                  <p className="text-gray-600 dark:text-gray-400">http://linkedin.com/firdaus-manalu</p>
                </div>
              </div>
            </div>
          </div>
          {/* Form Area */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                // This is the new success message card
                <motion.div
                  key="success"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                  <h3 className="mt-4 text-2xl font-semibold text-black dark:text-white">Message Sent!</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                // Your original form, now wrapped for animation
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors" placeholder="your email" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors" placeholder="Project discussion" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors resize-vertical" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                    {isSubmitting ? (<span>Sending...</span>) : (<><Send size={20} /><span>Send Message</span></>)}
                  </button>
                  {submitStatus === 'error' && (<div className="text-red-600 text-center">Failed to send message. Please try again.</div>)}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;