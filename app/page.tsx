import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden">
      {/* AI Grid Pattern Background */}
      <div className="bg-grid-pattern absolute inset-0 opacity-30 pointer-events-none"></div>
      
      {/* AI Particle Elements */}
      <div className="ai-particle absolute top-[10%] left-[20%] bg-primary-400"></div>
      <div className="ai-particle absolute top-[15%] right-[25%] bg-accent-400"></div>
      <div className="ai-particle absolute top-[35%] left-[10%] bg-secondary-400"></div>
      <div className="ai-particle absolute top-[60%] right-[15%] bg-primary-300"></div>
      <div className="ai-particle absolute top-[80%] left-[30%] bg-accent-300"></div>
      
      {/* AI Line Elements */}
      <div className="ai-lines absolute h-[200px] w-[1px] top-[20%] left-[40%]"></div>
      <div className="ai-lines absolute h-[300px] w-[1px] top-[40%] right-[30%]"></div>
      <div className="ai-lines absolute h-[150px] w-[1px] top-[70%] left-[60%]"></div>
      
      {/* Header Navigation */}
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-20 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
            <path fill="#FFFFFF" d="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6,8.8c18.1,17.9,20.4,49.3,10.7,70.8c-9.9,22.2-34.2,28.8-44.5,46.1c-10.4,17.4-11.3,35.3-30.7,43 C89.3,221.6,55.2,199.6,37.5,186z" className="wave-animation"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                Investing <span className="text-accent-400">Simplified</span> for Young Adults
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Start building your financial future today with parent-approved investing that makes learning about stocks fun and rewarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#waitlist" className="hero-btn bg-accent-500 hover:bg-accent-600">
                  Join Waitlist
                </Link>
                <Link href="#how-it-works" className="hero-btn bg-transparent border-2 border-white hover:bg-white hover:text-primary-800">
                  How It Works
                </Link>
              </div>
              <div className="pt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs font-semibold">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  <span className="font-bold">1,000+</span> teens already on the waitlist!
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative elements behind phone */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-36 h-36 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full opacity-30 blur-xl"></div>
                
                {/* Phone frame with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl transform rotate-3 shadow-2xl"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl p-4 md:p-6">
                  {/* Phone content/screen */}
                  <div className="h-full bg-gray-50 rounded-2xl overflow-hidden shadow-inner">
                    {/* App header */}
                    <div className="bg-primary-600 text-white px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-600">B</span>
                        </div>
                        <span className="font-semibold">BooStocks</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-3 md:p-4">
                      {/* Portfolio summary */}
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm mb-3 md:mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-sm font-semibold text-gray-700">Your Portfolio</h3>
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">+2.4%</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-lg md:text-xl font-bold text-gray-800">$1,247.32</span>
                          <span className="text-xs text-green-600">+$29.18 today</span>
                        </div>
                        
                        {/* Stock chart */}
                        <div className="h-16 md:h-20 mb-2 relative">
                          <svg viewBox="0 0 100 30" className="w-full h-full stroke-primary-500 stroke-2 fill-none">
                            <path d="M0,15 Q10,17 20,10 T40,15 T60,5 T80,15 T100,10" className="transform scale-y-[0.85] translate-y-[5px]"></path>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgba(2, 132, 199, 0.3)" />
                              <stop offset="100%" stopColor="rgba(2, 132, 199, 0)" />
                            </linearGradient>
                            <path d="M0,15 Q10,17 20,10 T40,15 T60,5 T80,15 T100,10 V30 H0 Z" className="stroke-none fill-[url(#chartGradient)] transform scale-y-[0.85] translate-y-[5px]"></path>
                          </svg>
                        </div>
                        
                        <div className="flex text-xs text-gray-500 justify-between">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                        </div>
                      </div>
                      
                      {/* Top stocks */}
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Your Stocks</h3>
                      <div className="space-y-2 md:space-y-3">
                        {/* Stock 1 */}
                        <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-800 font-semibold text-xs">AAPL</div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">Apple Inc.</div>
                              <div className="text-[10px] text-gray-500">12 shares</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-semibold text-gray-800">$2,134.21</div>
                            <div className="text-[10px] text-green-600">+1.2%</div>
                          </div>
                        </div>
                        
                        {/* Stock 2 */}
                        <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-800 font-semibold text-xs">MSFT</div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">Microsoft</div>
                              <div className="text-[10px] text-gray-500">8 shares</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-semibold text-gray-800">$1,876.32</div>
                            <div className="text-[10px] text-green-600">+0.8%</div>
                          </div>
                        </div>
                        
                        {/* Stock 3 */}
                        <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-md bg-violet-100 flex items-center justify-center text-violet-800 font-semibold text-xs">NFLX</div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">Netflix Inc.</div>
                              <div className="text-[10px] text-gray-500">5 shares</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-semibold text-gray-800">$943.88</div>
                            <div className="text-[10px] text-red-600">-0.3%</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="absolute bottom-0 inset-x-0 bg-white border-t border-gray-200 py-2 px-3 flex justify-around">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 mb-1 text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-primary-600 font-medium">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 mb-1 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-400">Invest</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 mb-1 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-400">Learn</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 mb-1 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-400">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                
                {/* Decorative dots */}
                <div className="absolute top-20 -right-4 w-8 h-8 bg-accent-500 rounded-full opacity-80"></div>
                <div className="absolute bottom-12 -left-2 w-4 h-4 bg-primary-400 rounded-full opacity-70 animate-pulse"></div>
                
                {/* Small floating achievements */}
                <div className="absolute -right-8 top-1/4 bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2 pulse-animation">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-gray-800">First Investment!</div>
                    <div className="text-[10px] text-gray-500">+50 points</div>
                  </div>
                </div>
                
                <div className="absolute -left-8 bottom-1/3 bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2 float-animation">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-gray-800">7-Day Streak!</div>
                    <div className="text-[10px] text-gray-500">+25 points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose BooStocks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The perfect platform designed specifically for young adults to learn investing with parental guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Parent Approved</h3>
              <p className="text-gray-600">
                Parents have complete visibility and approval rights over investment decisions, ensuring a safe learning environment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Learn By Doing</h3>
              <p className="text-gray-600">
                Interactive lessons, simulations, and real-world investing opportunities with built-in guidance every step of the way.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Gamified Experience</h3>
              <p className="text-gray-600">
                Earn achievements, complete challenges, and climb leaderboards while learning fundamental investing skills.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                Advanced security measures protect your data and investments while complying with all regulations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Comprehensive Education</h3>
              <p className="text-gray-600">
                Access a library of resources to understand market fundamentals, company analysis, and investment strategies.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Community</h3>
              <p className="text-gray-600">
                Connect with other young investors, share insights, and learn together in a moderated, supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        {/* Subtle background effect for this section */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-10 h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-r border-primary-300"></div>
            ))}
          </div>
          <div className="grid grid-rows-10 h-full absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-b border-primary-300"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">How BooStocks Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, educational, and secure investing for young adults with parental oversight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Sign Up Together</h3>
              <p className="text-gray-600">
                Parents create the account and invite their teen to join, setting permissions and funding options.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Learn & Explore</h3>
              <p className="text-gray-600">
                Complete interactive lessons, research companies, and create a watchlist of potential investments.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Invest With Approval</h3>
              <p className="text-gray-600">
                Propose investments for parent review, and once approved, execute trades and track performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-primary-900 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Join the Waitlist</h2>
            <p className="text-xl opacity-90 mb-8">
              Be among the first to experience BooStocks when we launch. Early waitlist members get priority access and special perks!
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-colors"
              >
                Join Waitlist
              </button>
            </form>
            
            <p className="mt-4 text-sm opacity-75">
              By joining, you agree to receive updates about BooStocks. We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BooStocks</h3>
              <p className="opacity-75">
                Empowering the next generation of investors with parent-approved tools and education.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 opacity-75">
                <li><Link href="#" className="hover:text-accent-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Press</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 opacity-75">
                <li><Link href="#" className="hover:text-accent-400">Blog</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Learning Center</Link></li>
                <li><Link href="#" className="hover:text-accent-400">FAQs</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 opacity-75">
                <li><Link href="#" className="hover:text-accent-400">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Security</Link></li>
                <li><Link href="#" className="hover:text-accent-400">Compliance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75">
              &copy; {new Date().getFullYear()} BooStocks. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" aria-label="Twitter" className="text-white hover:text-accent-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="text-white hover:text-accent-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-white hover:text-accent-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-white hover:text-accent-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
