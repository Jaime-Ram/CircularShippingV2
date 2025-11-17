'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Business() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<string | null>('medium')
  const [activeSlide, setActiveSlide] = useState(1)
  const slideCount = 3

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const nextSlide = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1)
  }

  const prevSlide = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount)
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-circular-dark">Waarom overstappen naar herbruikbare verpakkingen?</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
            Duurzame verpakkingsoplossingen voor uw bedrijf. Ontdek hoe herbruikbare verpakkingen uw logistieke processen kunnen verbeteren en bijdragen aan een circulaire economie.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Stat Block 1 - Opvouwbaar */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col min-h-[220px] md:min-h-[260px] relative overflow-hidden">
            <div className="absolute top-6 right-6 w-12 h-12">
              <Image
                src="/images/Foldable.jpeg"
                alt="Opvouwbaar icoon"
                width={96}
                height={96}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="text-3xl font-medium text-gray-900 mb-2">Opvouwbaar</div>
            <div className="text-gray-600 mb-4">Makkelijk in te leveren. Houd emissies laag bij retour.</div>
            <a href="#pricing" className="mt-auto text-circular-green font-medium hover:text-circular-dark-green transition-colors">Ontdek meer →</a>
          </div>

          {/* Stat Block 2 - Goedkoper */}
          <div className="bg-gradient-to-br from-circular-dark-green to-circular-green rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col min-h-[240px] md:min-h-[320px] text-white relative">
            <div className="absolute top-6 right-6 text-4xl font-semibold text-white">
              €
            </div>
            <div className="text-3xl font-medium mb-2">Goedkoper</div>
            <div className="text-white/90 mb-4">Break-even na slechts 12 maanden (B2B). Goedkoper dan karton (B2C).</div>
            <a href="#pricing" className="mt-auto text-white font-medium hover:text-circular-teal transition-colors">Ontdek meer →</a>
          </div>

          {/* Stat Block 3 - Herbruikbaar */}
          <div className="bg-gradient-to-br from-circular-teal to-circular-green rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col min-h-[260px] md:min-h-[360px] text-white relative overflow-hidden">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-circular-green flex items-center justify-center">
              <Image
                src="/images/Recyclable.png"
                alt="Herbruikbaar icoon"
                width={28}
                height={28}
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            </div>
            <div className="text-3xl font-medium mb-2">Herbruikbaar</div>
            <div className="text-white/90 mb-4">Gemaakt van gerecycled plastic bespaart 80% CO₂. Minder dan 6 hergebruiken om break-even te bereiken (CO₂).</div>
            <a href="#pricing" className="mt-auto text-white font-medium hover:text-gray-200 transition-colors">Ontdek meer →</a>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-circular-dark-green">
        <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 mx-auto">
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-4">
                Verpakkingen & tarieven
              </h2>
              <p className="text-lg text-white/80">
                Kies het formaat dat past bij jouw verzendbehoeften
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Verzendzak Column */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200">
                <div className="bg-circular-green rounded-2xl px-6 py-3 mb-5">
                  <h3 className="text-xl sm:text-2xl font-medium text-white">Onze verzendzak</h3>
                </div>

                {/* Features */}
                <div className="mb-6 space-y-2.5 text-sm text-gray-700">
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Bespaart 90% CO₂ ten opzichte van karton</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Kan gemiddeld 80 keer worden hergebruikt</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Eenvoudig en snel in te pakken</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Biedt meer bescherming</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Gemaakt van geupcyclede PP Big Bags</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 space-y-2.5">
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">M</span> (50 x 30 x 12 cm)
                    </div>
                    <div className="text-base font-medium text-circular-dark-green">€1,69</div>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">L</span> (60 x 35 x 15 cm)
                    </div>
                    <div className="text-base font-medium text-circular-dark-green">€1,79</div>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">XL</span> (100 x 50 x 30 cm)
                    </div>
                    <div className="text-base font-medium text-circular-dark-green">€1,99</div>
                  </div>
                </div>

                <a href="#contact" className="inline-flex justify-center items-center w-full py-3 px-6 text-base font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200">
                  Neem contact op
                </a>
              </div>

              {/* Verzenddoos Column */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200">
                <div className="bg-circular-green rounded-2xl px-6 py-3 mb-5">
                  <h3 className="text-xl sm:text-2xl font-medium text-white">Onze verzenddoos</h3>
                </div>

                {/* Features */}
                <div className="mb-6 space-y-2.5 text-sm text-gray-700">
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Bespaart 80% CO₂ ten opzichte van karton</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Kan gemiddeld 20 keer worden hergebruikt</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Is gemakkelijk en sneller te verpakken dan karton</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="shrink-0 size-4 text-circular-green mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Gemaakt van gerecycled PP</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 space-y-2.5">
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">M</span> (20 x 10 x 10 cm)
                    </div>
                    <div className="text-base font-medium text-circular-dark-green">€2,29</div>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">L</span> (30 x 20 x 11 cm)
                    </div>
                    <div className="text-base font-medium text-circular-dark-green">€2,49</div>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">XL</span> (60 x 40 x 40 cm)
                    </div>
                    <div className="text-base font-medium text-circular-dark-green">€3,29</div>
                  </div>
                </div>

                <a href="#contact" className="inline-flex justify-center items-center w-full py-3 px-6 text-base font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200">
                  Neem contact op
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-center text-sm text-white/80">
              <p className="mb-2">*Andere maten kunnen op aanvraag worden geproduceerd</p>
              <p>**Prijzen staan niet vast en variëren per project, afhankelijk van onder andere volume en retourpercentage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50">
        <div className="max-w-[85rem] px-4 py-12 sm:py-16 md:py-24 mx-auto">
          <div className="max-w-xs sm:max-w-md md:max-w-none mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-4 sm:mb-6 text-circular-dark">Wat onze klanten zeggen</h2>
            <p className="text-sm sm:text-base text-gray-700">Duizenden tevreden klanten die hun verzendproces hebben veranderd</p>
          </div>

          <div className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-between -mx-4">
              {/* Previous Button */}
              <div className="px-4 order-last md:order-first">
                <button
                  onClick={prevSlide}
                  className="inline-block mr-4 text-gray-700 hover:text-circular-green transition-colors"
                  aria-label="Vorige testimonial"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4 16H7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 24.4L7.59998 16L16 7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Carousel Content */}
              <div className="w-full md:w-2/3 lg:w-auto px-4 mb-12 md:mb-0">
                <div className="relative px-6">
                  {/* Background Card */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-full w-full py-8">
                    <div className="h-full bg-gray-50 bg-opacity-70 shadow-md rounded-2xl"></div>
                  </div>

                  {/* Main Card */}
                  <div className="relative py-12 px-8 sm:px-12 md:px-16 text-center bg-white shadow-md rounded-2xl">
                    <div className="max-w-2xl mx-auto">
                      {/* Stars */}
                      <div className="mb-6 inline-block mx-auto">
                        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.1033 4.81663C11.4701 4.07346 12.5299 4.07346 12.8967 4.81663L14.5486 8.16309C14.6941 8.45794 14.9753 8.6624 15.3006 8.70995L18.9962 9.25012C19.8161 9.36996 20.1429 10.3778 19.5493 10.956L16.8768 13.559C16.6409 13.7887 16.5333 14.1199 16.5889 14.4444L17.2194 18.1206C17.3595 18.9376 16.502 19.5606 15.7684 19.1747L12.4655 17.4378C12.1741 17.2845 11.8259 17.2845 11.5345 17.4378L8.23163 19.1747C7.498 19.5606 6.64045 18.9376 6.78057 18.1206L7.41109 14.4444C7.46675 14.1199 7.35908 13.7887 7.12321 13.559L4.45068 10.956C3.85709 10.3778 4.18387 9.36996 5.00378 9.25012L8.69937 8.70995C9.02472 8.6624 9.30591 8.45794 9.45145 8.16309L11.1033 4.81663Z" fill="#09BC8A"/>
                          <path d="M35.1033 4.81663C35.4701 4.07346 36.5299 4.07346 36.8967 4.81663L38.5486 8.16309C38.6941 8.45794 38.9753 8.6624 39.3006 8.70995L42.9962 9.25012C43.8161 9.36996 44.1429 10.3778 43.5493 10.956L40.8768 13.559C40.6409 13.7887 40.5333 14.1199 40.5889 14.4444L41.2194 18.1206C41.3595 18.9376 40.502 19.5606 39.7684 19.1747L36.4655 17.4378C36.1741 17.2845 35.8259 17.2845 35.5345 17.4378L32.2316 19.1747C31.498 19.5606 30.6405 18.9376 30.7806 18.1206L31.4111 14.4444C31.4667 14.1199 31.3591 13.7887 31.1232 13.559L28.4507 10.956C27.8571 10.3778 28.1839 9.36996 29.0038 9.25012L32.6994 8.70995C33.0247 8.6624 33.3059 8.45794 33.4514 8.16309L35.1033 4.81663Z" fill="#09BC8A"/>
                          <path d="M59.1033 4.81663C59.4701 4.07346 60.5299 4.07346 60.8967 4.81663L62.5486 8.16309C62.6941 8.45794 62.9753 8.6624 63.3006 8.70995L66.9962 9.25012C67.8161 9.36996 68.1429 10.3778 67.5493 10.956L64.8768 13.559C64.6409 13.7887 64.5333 14.1199 64.5889 14.4444L65.2194 18.1206C65.3595 18.9376 64.502 19.5606 63.7684 19.1747L60.4655 17.4378C60.1741 17.2845 59.8259 17.2845 59.5345 17.4378L56.2316 19.1747C55.498 19.5606 54.6405 18.9376 54.7806 18.1206L55.4111 14.4444C55.4667 14.1199 55.3591 13.7887 55.1232 13.559L52.4507 10.956C51.8571 10.3778 52.1839 9.36996 53.0038 9.25012L56.6994 8.70995C57.0247 8.6624 57.3059 8.45794 57.4514 8.16309L59.1033 4.81663Z" fill="#09BC8A"/>
                          <path d="M83.1033 4.81663C83.4701 4.07346 84.5299 4.07346 84.8967 4.81663L86.5486 8.16309C86.6941 8.45794 86.9753 8.6624 87.3006 8.70995L90.9962 9.25012C91.8161 9.36996 92.1429 10.3778 91.5493 10.956L88.8768 13.559C88.6409 13.7887 88.5333 14.1199 88.5889 14.4444L89.2194 18.1206C89.3595 18.9376 88.502 19.5606 87.7684 19.1747L84.4655 17.4378C84.1741 17.2845 83.8259 17.2845 83.5345 17.4378L80.2316 19.1747C79.498 19.5606 78.6405 18.9376 78.7806 18.1206L79.4111 14.4444C79.4667 14.1199 79.3591 13.7887 79.1232 13.559L76.4507 10.956C75.8571 10.3778 76.1839 9.36996 77.0038 9.25012L80.6994 8.70995C81.0247 8.6624 81.3059 8.45794 81.4514 8.16309L83.1033 4.81663Z" fill="#09BC8A"/>
                          <path d="M107.103 4.81663C107.47 4.07346 108.53 4.07346 108.897 4.81663L110.549 8.16309C110.694 8.45794 110.975 8.6624 111.301 8.70995L114.996 9.25012C115.816 9.36996 116.143 10.3778 115.549 10.956L112.877 13.559C112.641 13.7887 112.533 14.1199 112.589 14.4444L113.219 18.1206C113.36 18.9376 112.502 19.5606 111.768 19.1747L108.465 17.4378C108.174 17.2845 107.826 17.2845 107.535 17.4378L104.232 19.1747C103.498 19.5606 102.64 18.9376 102.781 18.1206L103.411 14.4444C103.467 14.1199 103.359 13.7887 103.123 13.559L100.451 10.956C99.8571 10.3778 100.184 9.36996 101.004 9.25012L104.699 8.70995C105.025 8.6624 105.306 8.45794 105.451 8.16309L107.103 4.81663Z" fill="#09BC8A"/>
                        </svg>
                      </div>

                      {/* Slides */}
                      <div className="overflow-hidden">
                        <div 
                          className="flex -mx-4 transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                        >
                          {/* Slide 1 */}
                          <div className="flex-shrink-0 px-4 w-full">
                            <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-10 text-gray-900">
                              &ldquo;Circular Shipping heeft ons verzendproces getransformeerd. Efficiënt, duurzame technologie, uitstekende service!&rdquo;
                            </h4>
                            <span className="block text-lg sm:text-xl font-medium text-gray-900">Jenny Wilson</span>
                            <span className="block text-base sm:text-lg text-gray-700">Logistiek Manager</span>
                          </div>

                          {/* Slide 2 */}
                          <div className="flex-shrink-0 px-4 w-full">
                            <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-10 text-gray-900">
                              &ldquo;Circular Shipping heeft ons energieverbruik gerevolutioneerd. Milieuvriendelijke technologie, uitzonderlijke service!&rdquo;
                            </h4>
                            <span className="block text-lg sm:text-xl font-medium text-gray-900">Mary Jane</span>
                            <span className="block text-base sm:text-lg text-gray-700">Operations Director</span>
                          </div>

                          {/* Slide 3 */}
                          <div className="flex-shrink-0 px-4 w-full">
                            <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-10 text-gray-900">
                              &ldquo;Circular Shipping heeft onze verzendgewoonten volledig veranderd. Moderne, milieubewuste oplossingen, toondersteuning!&rdquo;
                            </h4>
                            <span className="block text-lg sm:text-xl font-medium text-gray-900">Anastasia Relo</span>
                            <span className="block text-base sm:text-lg text-gray-700">Supply Chain Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <div className="px-4 order-last">
                <button
                  onClick={nextSlide}
                  className="inline-block text-gray-700 hover:text-circular-green transition-colors"
                  aria-label="Volgende testimonial"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.59998 16H24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-circular-dark tracking-tight">
              Neem <span className="text-circular-green">contact</span> op!
            </h1>
          </div>

          <div className="mt-12 grid items-start lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Form Card */}
            <div className="order-1 lg:order-1 flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="mb-8 text-xl font-medium text-circular-blue">
                Waar kunnen we je mee helpen?
              </h2>

              <form>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hs-firstname-contact" className="sr-only">Voornaam</label>
                      <input type="text" id="hs-firstname-contact" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Voornaam" />
                    </div>
                    <div>
                      <label htmlFor="hs-lastname-contact" className="sr-only">Achternaam</label>
                      <input type="text" id="hs-lastname-contact" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Achternaam" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hs-email-contact" className="sr-only">Email</label>
                    <input type="email" id="hs-email-contact" autoComplete="email" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-contact" className="sr-only">Telefoonnummer</label>
                    <input type="text" id="hs-phone-contact" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Telefoonnummer" />
                  </div>

                  <div>
                    <label htmlFor="hs-details-contact" className="sr-only">Details</label>
                    <textarea id="hs-details-contact" rows={4} className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Details"></textarea>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button type="submit" className="w-full py-2.5 px-4 inline-flex justify-center items-center text-sm font-medium text-circular-dark-green hover:text-white border border-circular-dark-green hover:bg-circular-dark-green rounded-full transition duration-200 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">Verstuur aanvraag</button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-600">
                    We nemen binnen 1-2 werkdagen contact met je op.
                  </p>
                </div>
              </form>
            </div>
            {/* End Card */}

            {/* Info Column */}
            <div className="order-2 lg:order-2 space-y-6">
              <p className="text-lg text-gray-600 hidden lg:block">
                Heb je vragen, wil je een proefpakket aanvragen of wil je samenwerken? Laat hier je gegevens achter via ons contactformulier en we nemen zo snel mogelijk contact met je op.
              </p>

              <div className="mt-8 divide-y divide-gray-200">
                <div className="flex gap-x-7 py-6">
                  <svg className="shrink-0 size-6 mt-1.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                  <div className="grow">
                    <h3 className="font-medium text-circular-blue">Veelgestelde vragen</h3>
                    <p className="mt-1 text-sm text-gray-600">Zoek in onze FAQ voor antwoorden op je vragen.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-circular-teal hover:text-circular-blue focus:outline-hidden focus:text-circular-blue" href="#faq">
                      Bekijk FAQ
                      <svg className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-7 py-6">
                  <svg className="shrink-0 size-6 mt-1.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
                  <div className="grow">
                    <h3 className="font-medium text-circular-blue">Contacteer ons per email</h3>
                    <p className="mt-1 text-sm text-gray-600">Liever direct mailen? We reageren binnen één werkdag.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-circular-teal hover:text-circular-blue focus:outline-hidden focus:text-circular-blue" href="mailto:info@circularshipping.nl">
                      info@circularshipping.nl
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-7 py-6">
                  <svg className="shrink-0 size-6 mt-1.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18"/><path d="M6 8h12"/><path d="M9 11h6"/><path d="M4 5l2 14h12l2-14"/></svg>
                  <div className="grow">
                    <h3 className="font-medium text-circular-blue">Bel ons</h3>
                    <p className="mt-1 text-sm text-gray-600">Direct overleg of een afspraak plannen? Bel ons team.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-circular-teal hover:text-circular-blue focus:outline-hidden focus:text-circular-blue" href="tel:+31642360448">
                      +31 6 42 36 04 48
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Section */}

      {/* FAQ Section */}
      <div id="faq" className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto scroll-mt-16 md:scroll-mt-20">
        <div className="relative bg-circular-dark-green rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/20"></div>
          <div className="relative grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="max-w-xs">
                <h2 className="text-5xl font-medium text-white sm:text-5xl md:text-5xl md:leading-tight tracking-tight">Veelgestelde vragen zakelijk</h2>
                <p className="mt-2 text-white/80">
                  Antwoorden op de meest gestelde vragen van onze zakelijke partners.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              {/* Accordion */}
              <div className="divide-y divide-white/20">
                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('one')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Waarom zou ik kiezen voor herbruikbare verpakkingen in plaats van karton?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'one' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'one' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      Op korte termijn kan karton goedkoper lijken, maar bij herhaalde inzet verlagen herbruikbare dozen de kosten per zending, verminderen retourstromen en versterken ze uw duurzame merkpositionering. Daarnaast beperken ze afvalstromen en CO₂-uitstoot.
                      <br />
                      <a href="#contact" className="inline-flex items-center gap-1 text-white mt-3 font-medium underline decoration-white/60 decoration-2 underline-offset-4 hover:text-circular-teal transition-colors">
                        Plan een adviesgesprek
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('two')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Wie is verantwoordelijk bij schade of productverlies?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'two' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'two' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      Wij adviseren en ondersteunen bij contractuele afspraken. In veel gevallen is de leverancier verantwoordelijk voor de verpakking. Bespreek productaansprakelijkheid en AVB altijd met uw verzekeraar; wij denken graag mee over best practices.
                    </p>
                  </div>
                </div>

                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('three')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Wat zijn de logistieke vereisten?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'three' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'three' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      Onze verpakkingen zijn ontworpen voor standaard handling. We leveren logistieke specificaties zoals afmetingen, stapelbelasting en retour-QR-code, zodat uw fulfilmentpartner direct kan opschalen zonder extra aanpassingen.
                    </p>
                  </div>
                </div>

                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('four')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Hoe garanderen jullie hygiëne en reiniging?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'four' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'four' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      Geretourneerde verpakkingen worden visueel geïnspecteerd en, waar nodig, professioneel gereinigd. Voor gevoelige productcategorieën spreken we aanvullende eisen af en leggen we aangepaste reinigingsprotocollen vast.
                    </p>
                  </div>
                </div>

                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('five')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Wat is de terughaalstrategie?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'five' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all	duration-300 ${openFaq === 'five' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      Voor interne stromen kunt u de verpakkingen zelf retourneren. Leveringen aan consumenten kunnen wij per gebruik uitleveren én weer inzamelen. We adviseren de meest kostenefficiënte optie op basis van uw logistieke set-up.
                    </p>
                  </div>
                </div>

                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('six')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Kan de verpakking mijn branding krijgen?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'six' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all	duration-300 ${openFaq === 'six' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      Voor kleinere oplages bieden we momenteel geen volledige custom branding. Vanaf 10.000 verpakkingen zijn er meer mogelijkheden, zoals sleeves of bedrukking. We bespreken graag wat past bij uw merk.
                    </p>
                  </div>
                </div>

                <div className="pb-3 pt-6 first:pt-0">
                  <button
                    onClick={() => toggleFaq('seven')}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                  >
                    Hoe zit het met verlies en vervangingen?
                    <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'seven' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div className={`overflow-hidden transition-all	duration-300 ${openFaq === 'seven' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/80 pt-2">
                      We monitoren retourratio’s en verwerken vervangingen in abonnementsmodellen. De tarieven per gebruik houden rekening met gemiddelde verliespercentages. Consumenten betalen bovendien statiegeld, zodat er geen onverwachte kosten bij u terechtkomen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End FAQ Section */}
    </div>
  )
}
