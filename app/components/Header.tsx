import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-nav">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">B</span>
          </div>
          <span className="text-2xl font-bold text-primary-700">BooStocks</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          <Link href="#features" className="menu-item">Features</Link>
          <Link href="#how-it-works" className="menu-item">How It Works</Link>
          <Link href="#waitlist" className="menu-item bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors">Join Waitlist</Link>
        </nav>
        
        <button className="md:hidden text-primary-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 