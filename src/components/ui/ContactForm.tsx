import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Your Web3Forms Key
    formData.append("access_key", "344366ee-e5d5-45ad-b242-983691a0b7db"); 

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage('Message sent successfully! I will get back to you soon.');
        
        (e.target as HTMLFormElement).reset(); 
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection or disable ad-blockers.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full">
      
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-foreground/80">
          Name
        </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required 
          disabled={status === 'submitting'}
          className="bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50" 
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-foreground/80">
          Email
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required 
          disabled={status === 'submitting'}
          className="bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50" 
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-foreground/80">
          Message
        </label>
        <textarea 
          name="message" 
          id="message" 
          rows={5} 
          required 
          disabled={status === 'submitting'}
          className="bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none disabled:opacity-50" 
        />
      </div>

      <div className="self-start">
        <HCaptcha
          ref={captchaRef}
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" 
          reCaptchaCompat={false}
          theme="dark" 
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full md:w-auto self-start border-2 border-foreground px-8 py-4 font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {/* THE NOTIFICATIONS MOVED TO THE BOTTOM */}
      {status === 'success' && (
        <div className="p-4 mt-2 border-2 border-green-500 bg-green-500/10 text-green-600 dark:text-green-400 font-bold uppercase tracking-widest text-sm transition-all">
          {message}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 mt-2 border-2 border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 font-bold uppercase tracking-widest text-sm transition-all">
          {message}
        </div>
      )}

    </form>
  );
}