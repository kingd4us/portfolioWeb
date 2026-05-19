import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-foreground selection:text-background">
      <Header />
      <main className="w-full flex flex-col items-start px-4 md:px-8 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}