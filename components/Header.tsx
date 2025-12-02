'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type Audience = 'consumer' | 'business'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false)
  const [businessMenuMobileOpen, setBusinessMenuMobileOpen] = useState(false)
  const [audience, setAudience] = useState<Audience>('consumer')
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isBusinessPage = pathname === '/business'
  const isDemoPage = pathname === '/demo'
  const isAboutPage = pathname === '/about'
  const isLoginPage = pathname === '/login'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setBusinessMenuOpen(false)
    setBusinessMenuMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (pathname === '/business') {
      setAudience('business')
      window.localStorage.setItem('csc-audience', 'business')
      return
    }

    const storedAudience = window.localStorage.getItem('csc-audience') as Audience | null
    if (storedAudience === 'business' || storedAudience === 'consumer') {
      setAudience(storedAudience)
    } else {
      setAudience('consumer')
    }
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) {
      setBusinessMenuMobileOpen(false)
    }
  }, [mobileMenuOpen])

  const shouldShowGreenBackground = isBusinessPage || isDemoPage || isLoginPage || isScrolled || mobileMenuOpen
  const businessMenuLabel = audience === 'business' ? 'Zakelijk' : 'Inleveren'
  const logoHref = audience === 'business' ? '/business' : '/'

  const handleAudienceChange = (value: Audience) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('csc-audience', value)
    }
    setAudience(value)
    setBusinessMenuOpen(false)
    setBusinessMenuMobileOpen(false)
  }

  const consumerLink = '/#contact'
  const businessLink = '/business#contact'
  const consumerFaq = '/#faq'
  const businessFaq = '/business#faq'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      mobileMenuOpen ? 'h-auto' : ''
    } ${shouldShowGreenBackground ? 'bg-circular-dark-green shadow-sm' : 'bg-transparent'} py-2.5 md:py-3.5 min-h-[64px] md:min-h-[72px] h-[64px] md:h-[72px] flex items-center`}>
      {shouldShowGreenBackground && (
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/20"></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="flex justify-between items-center h-full relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={logoHref} className="flex items-center">
              <Image
                src="/images/CSCLOGO.png"
                alt="Circular Shipping Company"
                width={160}
                height={60}
                className="h-12 md:h-14 w-auto brightness-0 invert"
                priority
              />
            </a>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/about"
              className={`text-white text-base font-medium transition-colors relative ${
                isAboutPage ? 'after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-circular-green' : ''
              }`}
            >
              Over ons
            </a>
            <a
              href={audience === 'business' ? businessLink : consumerLink}
              className="text-white text-base font-medium transition-colors relative"
            >
              Contact
            </a>
            <a
              href={audience === 'business' ? businessFaq : consumerFaq}
              className="text-white text-base font-medium transition-colors relative"
            >
              FAQ
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={() => setBusinessMenuOpen((prev) => !prev)}
                className={`inline-flex items-center gap-2 text-base font-medium transition-colors text-white ${
                  (isHomePage && audience === 'consumer') || (isBusinessPage && audience === 'business') 
                    ? 'after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-circular-green relative' 
                    : ''
                }`}
                aria-haspopup="true"
                aria-expanded={businessMenuOpen}
              >
                {businessMenuLabel}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${businessMenuOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 mt-3 w-48 overflow-hidden rounded-2xl border border-white/15 bg-white/95 backdrop-blur shadow-lg shadow-black/10 transition-all duration-200 ${
                  businessMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  <a
                    href="/"
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      audience === 'consumer' ? 'text-circular-green' : 'text-circular-dark hover:text-circular-green'
                    }`}
                    onClick={() => handleAudienceChange('consumer')}
                  >
                    Inleveren
                  </a>
                  <a
                    href="/business"
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      audience === 'business' ? 'text-circular-green' : 'text-circular-dark hover:text-circular-green'
                    }`}
                    onClick={() => handleAudienceChange('business')}
                  >
                    Zakelijk
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Button - Right */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/demo"
                className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200"
              >
                Verpakking inleveren
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white hover:text-circular-dark-green transition duration-200"
                aria-label="Inloggen"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </a>
            </div>
            <a
              href="/login"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white hover:bg-white hover:text-circular-dark-green transition duration-200 lg:hidden"
              aria-label="Inloggen"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>

            {/* Mobile menu button */}
            <div className="lg:hidden">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-circular-teal focus:outline-none focus:text-circular-teal"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden border-t border-white/20 py-4 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0 bg-circular-dark-green -mx-4 sm:-mx-6 px-4 sm:px-6' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
            <nav className="flex flex-col space-y-3">
              <a
                href="/about"
                className="text-white hover:text-circular-teal px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Over ons
              </a>
              <a
                href="#contact"
                className="text-white hover:text-circular-teal px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={audience === 'business' ? businessFaq : consumerFaq}
                className="text-white hover:text-circular-teal px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button
                type="button"
                className="flex items-center justify-between text-white hover:text-circular-teal px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setBusinessMenuMobileOpen((prev) => !prev)}
                aria-expanded={businessMenuMobileOpen}
              >
                {businessMenuLabel}
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${businessMenuMobileOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${businessMenuMobileOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="mt-1 space-y-2 pl-3">
                  <a
                    href="/"
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      audience === 'consumer' ? 'text-circular-green' : 'text-white/80 hover:text-circular-teal'
                    }`}
                    onClick={() => {
                      handleAudienceChange('consumer')
                      setMobileMenuOpen(false)
                    }}
                  >
                    Inleveren
                  </a>
                  <a
                    href="/business"
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      audience === 'business' ? 'text-circular-green' : 'text-white/80 hover:text-circular-teal'
                    }`}
                    onClick={() => {
                      handleAudienceChange('business')
                      setMobileMenuOpen(false)
                    }}
                  >
                    Zakelijk
                  </a>
                </div>
              </div>
              <a
                href="/login"
                className="inline-flex items-center gap-2 text-white hover:text-circular-teal px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Inloggen
              </a>
              <div className="pt-3">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200 w-full sm:w-auto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Verpakking inleveren
                </a>
              </div>
            </nav>
          </div>
      </div>
    </header>
  )
}
