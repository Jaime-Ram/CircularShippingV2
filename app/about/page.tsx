'use client'

import { useState } from 'react'

export default function About() {
  const teamMembers = [
    {
      name: 'Joost',
      role: 'Co-founder & CTO',
      description: 'Als technisch specialist focust Joost zich op het ontwikkelen van innovatieve verpakkingsoplossingen.',
      image: '/images/joost2.jpg',
    },
    {
      name: 'Boris',
      role: 'Co-founder & CEO',
      description: 'Boris leidt de strategische visie van het bedrijf en bouwt partnerships met webshops en logistieke partners.',
      image: '/images/Boris.jpg',
    },
    {
      name: 'Bart',
      role: 'Co-founder & COO',
      description: 'Bart zorgt voor de dagelijkse operaties en de implementatie van onze circulaire logistieke processen.',
      image: '/images/Bart%20Kroese.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative z-0 h-[360px] sm:h-[480px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Missie.jpg" 
            alt="Circular Shipping missie"
            className="w-full h-full object-cover object-[center_70%] blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60"></div>
        
        <div className="relative z-10 h-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
              Een wereld zonder single-use verpakkingen
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section Below */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-circular-dark tracking-tight">
              Van frustratie<br className="hidden sm:block" />naar <span className="text-circular-green">circulaire oplossing</span>
            </h2>
          </div>

          {/* Two Blocks */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Left Block - Ons verhaal */}
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-circular-dark mb-4">
                Ons verhaal
              </h3>
              <div className="space-y-3">
                <p className="text-base text-gray-700 leading-relaxed">
                  In 2021 stond één van onze oprichters een tijd in de rij bij een pakketpunt om een zending terug te brengen. Na twintig minuten wachten bleek dat er geen kartonnen dozen meer waren — wat volgde was een lange discussie en veel frustratie.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Dat moment bleef hangen: waarom bestaat er geen herbruikbare, schaalbare oplossing voor verpakkingen? Die vraag leidde tot Circular Shipping.
                </p>
              </div>
            </div>

            {/* Right Block - Wie we zijn */}
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-circular-dark mb-4">
                Wie we zijn
              </h3>
              <div className="space-y-3">
                <p className="text-base text-gray-700 leading-relaxed">
                  Wij zijn drie studenten van de TU Delft met één missie: een wereld zonder single-use verpakkingen.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Onze herbruikbare verpakkingen zijn gemaakt van gerecycled plastic en worden binnen een closed-loop gerecycled. Met onze oplossing willen we een vervuilende industrie veranderen en bedrijven een praktisch, schaalbaar alternatief bieden.
                </p>
              </div>
            </div>
          </div>

          {/* Image below */}
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/Delft.jpg"
                alt="TU Delft studenten"
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-6 sm:p-8 text-right">
                <p className="text-white text-lg sm:text-xl font-medium">Ontstaan in Delft,</p>
                <p className="text-white/90 text-sm sm:text-base">Pakketten door heel Nederland</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-circular-dark tracking-tight mb-4">
              Ontmoet onze founders
            </h2>
            <p className="text-gray-700">
              Bart, Joris en Joost vormen het kernteam achter Circular Shipping en leiden dagelijks onze circulaire ambities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map(member => (
              <div key={member.name} className="group bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">
                <div className="h-72 sm:h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <p className="text-lg font-medium text-circular-dark">{member.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <div className="pb-12 pt-12 lg:pb-24 lg:pt-24 relative overflow-hidden bg-gray-50">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-32">
            <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 sm:mb-6 text-circular-dark">
              Word onderdeel van ons team
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Onze filosofie is simpel – maak de wereld een groenere plek.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Research and Development */}
            <div className="mb-12 sm:mb-16">
              <span className="block font-medium text-gray-600 mb-6">Onderzoek & Ontwikkeling (O&O)</span>

              {/* Job Card 1 */}
              <div className="py-6 px-6 sm:px-8 mb-4 bg-white rounded-2xl shadow-md">
                <div className="flex flex-col sm:flex-row md:justify-between items-start">
                  <div className="mb-6 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-900">Duurzame Verpakkingen Onderzoeker</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Rotterdam, NL</span>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Fulltime</span>
                      </div>
                    </div>
                  </div>
                  <a href="mailto:info@circularshipping.nl?subject=Sollicitatie%20Duurzame%20Verpakkingen%20Onderzoeker" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-circular-dark-green hover:text-white border border-circular-dark-green hover:bg-circular-dark-green rounded-full transition duration-200">
                    Solliciteren
                  </a>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="py-6 px-6 sm:px-8 bg-white rounded-2xl shadow-md">
                <div className="flex flex-col sm:flex-row md:justify-between items-start">
                  <div className="mb-6 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-900">Materiaalwetenschapper</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Rotterdam, NL</span>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Fulltime</span>
                      </div>
                    </div>
                  </div>
                  <a href="mailto:info@circularshipping.nl?subject=Sollicitatie%20Materiaalwetenschapper" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-circular-dark-green hover:text-white border border-circular-dark-green hover:bg-circular-dark-green rounded-full transition duration-200">
                    Solliciteren
                  </a>
                </div>
              </div>
            </div>

            {/* Engineering */}
            <div>
              <span className="block font-medium text-gray-600 mb-6">Techniek</span>

              {/* Job Card 1 */}
              <div className="py-6 px-6 sm:px-8 mb-4 bg-white rounded-2xl shadow-md">
                <div className="flex flex-col sm:flex-row md:justify-between items-start">
                  <div className="mb-6 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-900">Duurzame Verzending Ingenieur</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Rotterdam, NL</span>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Fulltime</span>
                      </div>
                    </div>
                  </div>
                  <a href="mailto:info@circularshipping.nl?subject=Sollicitatie%20Duurzame%20Verzending%20Ingenieur" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-circular-dark-green hover:text-white border border-circular-dark-green hover:bg-circular-dark-green rounded-full transition duration-200">
                    Solliciteren
                  </a>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="py-6 px-6 sm:px-8 mb-4 bg-white rounded-2xl shadow-md">
                <div className="flex flex-col sm:flex-row md:justify-between items-start">
                  <div className="mb-6 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-900">Logistiek Ingenieur</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Rotterdam, NL</span>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Fulltime</span>
                      </div>
                    </div>
                  </div>
                  <a href="mailto:info@circularshipping.nl?subject=Sollicitatie%20Logistiek%20Ingenieur" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-circular-dark-green hover:text-white border border-circular-dark-green hover:bg-circular-dark-green rounded-full transition duration-200">
                    Solliciteren
                  </a>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="py-6 px-6 sm:px-8 bg-white rounded-2xl shadow-md">
                <div className="flex flex-col sm:flex-row md:justify-between items-start">
                  <div className="mb-6 sm:mb-0">
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-900">Circulaire Economie Specialist</h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.75 8.5C16.75 13.75 10 18.25 10 18.25C10 18.25 3.25 13.75 3.25 8.5C3.25 6.70979 3.96116 4.9929 5.22703 3.72703C6.4929 2.46116 8.20979 1.75 10 1.75C11.7902 1.75 13.5071 2.46116 14.773 3.72703C16.0388 4.9929 16.75 6.70979 16.75 8.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 10.75C11.2426 10.75 12.25 9.74264 12.25 8.5C12.25 7.25736 11.2426 6.25 10 6.25C8.75736 6.25 7.75 7.25736 7.75 8.5C7.75 9.74264 8.75736 10.75 10 10.75Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Rotterdam, NL</span>
                      </div>
                      <div className="inline-flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5.5V10L13 11.5" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Fulltime</span>
                      </div>
                    </div>
                  </div>
                  <a href="mailto:info@circularshipping.nl?subject=Sollicitatie%20Circulaire%20Economie%20Specialist" className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-circular-dark-green hover:text-white border border-circular-dark-green hover:bg-circular-dark-green rounded-full transition duration-200">
                    Solliciteren
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Careers Section */}

      {/* Contact Section */}

    </div>
  )
}

