"use client";

"use client";

import { useState } from 'react';
import AnimatedButton from './animated-button';

export default function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Since there's no email input, we'll just simulate a successful join
      // You can modify this logic based on your needs
      setTimeout(() => {
        setStatus('success');
      }, 1000);
    } catch (err: unknown) {
      console.error('Failed to submit:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <AnimatedButton
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#0015ff] text-white hover:bg-[#0011cc]"
        >
          {status === 'loading' ? 'Booking...' : 'Book a Call'}
        </AnimatedButton>
        <AnimatedButton
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#0015ff] text-white hover:bg-[#0011cc]"
        >
          {status === 'loading' ? 'Connecting...' : 'Chat with me'}
        </AnimatedButton>
      </div>
      
      {status === 'success' && (
        <p className="mt-2 text-green-600 text-sm">Successfully joined the waitlist!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
