import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, AlertCircle } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const captchaRef = useRef<HCaptcha>(null);

  // 1. VANDALISM DEFENSE: Cooldown System
  // Checks if the user submitted a message recently to prevent manual spam
  const COOLDOWN_MINUTES = 10;
  
  useEffect(() => {
    const lastSubmit = localStorage.getItem('last_submission_time');
    if (lastSubmit) {
      const timePassed = Date.now() - parseInt(lastSubmit, 10);
      if (timePassed < COOLDOWN_MINUTES * 60 * 1000) {
        setStatus("success"); // Lock the form in success state
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message") as string;
    const name = formData.get("name") as string;

    // 2. VANDALISM DEFENSE: Strict Validation
    // Prevent whitespace-only submissions and enforce strict lengths
    if (name.trim().length < 2) {
      setErrorMessage("Name must be at least 2 characters long.");
      return;
    }
    
    if (message.trim().length < 15) {
      setErrorMessage("Message is too short. Please provide more detail.");
      return;
    }

    if (message.length > 2000) {
      setErrorMessage("Message exceeds the 2000 character limit.");
      return;
    }

    if (!captchaToken) {
      setErrorMessage("Please verify that you are human.");
      return;
    }

    setStatus("submitting");
    formData.append("access_key", "344366ee-e5d5-45ad-b242-983691a0b7db"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
        
        // Lock the user out of sending another message for 10 minutes
        localStorage.setItem('last_submission_time', Date.now().toString());
      } else {
        setStatus("error");
        setErrorMessage("Server error. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-2">
          <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            maxLength={50} // Hard HTML limit
            disabled={status === "success"}
            className="w-full p-4 border-2 border-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>
        <div className="flex-1 space-y-2">
          <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            maxLength={100} // Hard HTML limit
            disabled={status === "success"}
            className="w-full p-4 border-2 border-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest">Message</label>
        <textarea 
          name="message" 
          id="message" 
          required 
          rows={5}
          maxLength={2500} // Hard HTML limit
          disabled={status === "success"}
          className="w-full p-4 border-2 border-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-y disabled:opacity-50"
          placeholder="Let's discuss matchmaking algorithms, digital signatures, or a new project..."
        ></textarea>
      </div>

      {/* The hCaptcha Widget */}
      {status !== "success" && (
        <div className="py-2">
          <HCaptcha
            ref={captchaRef}
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" 
            reCaptchaCompat={false}
            onVerify={(token) => {
              setCaptchaToken(token);
              setErrorMessage(""); // Clear captcha error if they solve it
            }}
            onExpire={() => setCaptchaToken("")}
            theme="dark" 
          />
        </div>
      )}

      {/* Dynamic Error Messaging Display */}
      {errorMessage && (
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold uppercase tracking-widest text-sm bg-red-600/10 p-4 border-l-4 border-red-600">
          <AlertCircle className="w-5 h-5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === "submitting" || status === "success"}
        className="inline-flex items-center gap-3 border-2 border-foreground px-8 py-4 font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" && <Loader2 className="w-5 h-5 animate-spin" />}
        {status === "success" && <Send className="w-5 h-5" />}
        {status === "idle" || status === "error" ? <Send className="w-5 h-5" /> : null}
        
        {status === "idle" && "Send Message"}
        {status === "submitting" && "Transmitting..."}
        {status === "success" && "Message Sent"}
        {status === "error" && "Retry Transmission"}
      </button>

      {status === "success" && (
        <p className="text-sm font-bold text-green-600 dark:text-green-400 mt-4 uppercase tracking-widest">
          Signal received. Your connection is cooling down.
        </p>
      )}
    </form>
  );
}