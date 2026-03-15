import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Instagram, BookOpen } from 'lucide-react'; // BookOpen as an alternative for note

const Header = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Site Name */}
          <Link 
            to="/" 
            className="text-lg font-medium tracking-tight text-stone-900 hover:text-stone-600 transition-colors"
          >
            Nakamura.
          </Link>

          {/* Navigation & SNS */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <div className="hidden sm:flex items-center gap-5 text-stone-500">
              <a href="https://x.com/your_account" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/your_account" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://note.com/your_account" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors" aria-label="note">
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
            
            <Link 
              to={isAbout ? "/" : "/about"}
              className={`text-sm font-medium transition-colors ${
                isAbout ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {isAbout ? 'Gallery' : 'About'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
