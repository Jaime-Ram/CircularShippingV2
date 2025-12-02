'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  const teamMembers = [
    {
      name: 'Joost',
      role: 'Co-founder & CEO',
      description: 'Joost leidt de strategische visie van het bedrijf en bouwt partnerships met webshops en logistieke partners.',
      image: '/images/joost2.jpg',
    },
    {
      name: 'Boris',
      role: 'Co-founder & CTO',
      description: 'Als technisch specialist focust Boris zich op het ontwikkelen van innovatieve verpakkingsoplossingen.',
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
          <Image 
            src="/images/Missie.jpg" 
            alt="Circular Shipping missie"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_70%] blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60"></div>
        
        <div className="relative z-10 h-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto">
            <ScrollReveal>
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
                Een wereld zonder single-use verpakkingen
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content Section Below */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-12">
            <ScrollReveal>
              <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-circular-dark tracking-tight">
                Van frustratie<br className="hidden sm:block" />naar <span className="text-circular-green">een circulaire oplossing</span>
              </h2>
            </ScrollReveal>
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
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-[300px] sm:h-[400px]">
              <Image
                src="/images/Delft.jpg"
                alt="TU Delft studenten"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                className="object-cover"
                priority
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
            <ScrollReveal>
              <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-circular-dark tracking-tight mb-4">
                Ontmoet onze founders
              </h2>
            </ScrollReveal>
            <p className="text-gray-700">
              Bart, Joris en Joost vormen het kernteam achter Circular Shipping en leiden dagelijks onze circulaire ambities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {teamMembers.map(member => (
              <div key={member.name} className="group bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-80 sm:h-96 overflow-hidden relative bg-gray-100 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3 flex-1">
                  <div>
                    <p className="text-base sm:text-lg font-medium text-circular-dark">{member.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{member.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}

    </div>
  )
}

