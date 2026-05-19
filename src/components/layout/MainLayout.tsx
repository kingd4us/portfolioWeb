import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-foreground selection:text-background">
      <Header />
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}