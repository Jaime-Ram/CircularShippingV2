'use client'

import Image from 'next/image'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-white relative overflow-hidden z-0">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-52 pb-20 lg:pb-32 min-h-[620px] sm:min-h-[720px] flex flex-col">
                {/* Hero Image */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                  <Image
                    src="/images/HeroAnieuw.png"
                    alt="Hero"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_40%] sm:object-center opacity-100"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/15"></div>
                </div>

                {/* Titel + ondertitel bovenaan, knoppen onderaan (mobiel én desktop) */}
                <div className="relative z-10 flex flex-1 flex-col justify-between min-h-0">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Title */}
                    <div className="max-w-3xl text-left">
                      <h1 className="block font-medium text-white text-5xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight leading-tight md:leading-tight break-words max-w-[15ch] sm:max-w-none">
                        <span className="sm:hidden">
                          De duurzaamste<br />verzend-oplossing<span className="text-circular-teal">.</span>
                        </span>
                        <span className="hidden sm:inline">
                          De duurzaamste<br />verzendoplossing<span className="text-circular-teal">.</span>
                        </span>
                      </h1>
                    </div>
                    {/* End Title */}

                    <div className="max-w-3xl text-left">
                      <p className="text-base sm:text-lg text-white/90 [text-wrap:balance]">Herbruikbare verpakkingen die 80% CO₂ besparen en volledig circulair zijn.<br />De toekomst van duurzaam verzenden, nu{"\u00A0"}beschikbaar.</p>
                    </div>
                  </div>

                  {/* Buttons onderaan */}
                  <div className="text-left mt-auto pt-6 sm:pt-8">
                  <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
                    <a className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200" href="/about">
                      Onze missie
                      <svg className="shrink-0 size-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white/90 border border-white/40 rounded-full transition duration-200 hover:bg-white/10" href="https://boxo.nu/inleverpunten/?locate=" target="_blank" rel="noopener noreferrer">
                      Inleverpunten in mijn buurt
                      <svg className="shrink-0 size-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </div>
                  </div>
                </div>
                {/* End Buttons */}
              </div>
            </div>

      {/* Blog Section */}
      <div className="relative z-10 max-w-[85rem] px-4 py-12 sm:py-16 md:py-16 sm:px-6 lg:px-8 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 lg:mb-14">
          <ScrollReveal>
            <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight text-circular-dark tracking-tight">Samen voor minder uitstoot<span className="text-circular-green">.</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-2 sm:mt-1 text-sm sm:text-base text-gray-600">Ontdek hoe je samen met ons bijdraagt aan een duurzamere toekomst.</p>
          </ScrollReveal>
        </div>
        {/* End Title */}

        {/* Facts Block */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-gradient-to-br from-circular-dark-green to-circular-green rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-medium mb-2">80%</div>
                <div className="text-sm sm:text-base text-white/90">CO₂ besparing t.o.v. karton</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-medium mb-2">80x</div>
                <div className="text-sm sm:text-base text-white/90">Herbruikbaar (verzendzak)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-medium mb-2">Meer</div>
                <div className="text-sm sm:text-base text-white/90">bescherming</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-medium mb-2">Snel</div>
                <div className="text-sm sm:text-base text-white/90">in te pakken</div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
              <p className="text-sm sm:text-base text-white/90 text-center">
                <strong className="text-white">End-of-Life:</strong> Als de verpakking niet meer bruikbaar is, recyclen wij het materiaal en maken we er een nieuwe verpakking van. Zo gaat er geen materiaal verloren!
              </p>
            </div>
          </div>
        </div>
        {/* End Facts Block */}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-6 mt-8 sm:mt-10 lg:mt-16 lg:grid-rows-2 justify-center max-w-5xl mx-auto">
          {/* Card 1 - Large left: op mobiel + middelgroot tekst links + plaatje rechts met gradient; op groot scherm volle achtergrond */}
          <div className="group relative lg:row-span-2 lg:col-span-2 min-h-[280px] sm:min-h-[320px] lg:min-h-0">
            <div className="absolute inset-px rounded-2xl sm:rounded-3xl bg-white border border-gray-200"></div>
            {/* Mobiel + middelgroot: tekst links, plaatje rechts met vloeiende overgang */}
            <div className="relative flex lg:hidden h-full flex-row overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="relative z-10 flex flex-1 flex-col justify-between bg-circular-dark-green px-6 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-3 min-w-0">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Ik heb een pakket ontvangen</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/90">Top dat je koos voor de duurzame optie! Vind via <a href="https://boxo.nu/inleverpunten/?locate=" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400">BOXO</a> een inleverpunt bij jou in de buurt. Volg de instructies op het retourlabel en bedankt dat je meedoet!</p>
                </div>
                <a
                  href="https://boxo.nu/inleverpunten/?locate="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200 w-full sm:w-auto"
                >
                  Terugsturen
                  <svg className="shrink-0 size-3 sm:size-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </div>
              <div className="relative flex-[1.2] min-h-[200px] sm:min-h-0 flex-shrink-0">
                <div className="absolute inset-0 bg-[url('/images/Pakketontvangen.jpeg')] bg-[length:128%] bg-[position:42%_78%] sm:bg-[position:42%_62%] bg-no-repeat" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-r from-circular-dark-green via-circular-dark-green/30 to-transparent w-3/5 pointer-events-none" aria-hidden />
              </div>
            </div>
            {/* Alleen groot scherm (lg+): volle achtergrond met overlay en tekst erop */}
            <div className="hidden lg:flex absolute inset-0 flex-col overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="absolute inset-0">
                <div className="h-full w-full bg-[url('/images/Pakketontvangen.jpeg')] bg-cover bg-[position:50%_40%] lg:bg-center"></div>
              </div>
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="relative z-10 flex flex-col justify-between h-full px-6 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-3 md:px-10 md:pt-10 md:pb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Ik heb een pakket ontvangen</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/90">Top dat je koos voor de duurzame optie! Vind via <a href="https://boxo.nu/inleverpunten/?locate=" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400">BOXO</a> een inleverpunt bij jou in de buurt. Volg de instructies op het retourlabel en bedankt dat je meedoet!</p>
                </div>
                <a
                  href="https://boxo.nu/inleverpunten/?locate="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-circular-green hover:bg-opacity-90 border border-transparent rounded-full transition duration-200 max-lg:mx-auto"
                >
                  Terugsturen
                  <svg className="shrink-0 size-3 sm:size-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl sm:rounded-3xl shadow-sm outline outline-white/15"></div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative max-lg:row-start-2 lg:col-span-2">
            <div className="absolute inset-px rounded-2xl sm:rounded-3xl bg-white border border-gray-200"></div>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 divide-y divide-gray-200">
              <div className="flex gap-x-4 sm:gap-x-7 py-4 sm:py-6">
                <svg className="shrink-0 size-5 sm:size-6 mt-1 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div className="grow">
                  <h3 className="text-sm sm:text-base font-medium text-circular-blue">Hoe kan ik helpen?</h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600">Leuk dat je ons wil helpen! Je helpt enorm door ons te introduceren bij je favoriete webshops. Laat ons weten wie we moeten benaderen, dan nemen wij het contact over.</p>
                  <a className="mt-2 inline-flex items-center gap-x-2 text-xs sm:text-sm font-medium text-circular-teal hover:text-circular-blue focus:outline-hidden focus:text-circular-blue" href="#contact">
                    Ik wil helpen!
                    <svg className="shrink-0 size-2 sm:size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl sm:rounded-3xl shadow-sm outline outline-white/15"></div>
          </div>
          
          {/* Card 3 */}
          <div className="group relative max-lg:row-start-3 lg:col-span-2">
            <div className="absolute inset-px rounded-2xl sm:rounded-3xl bg-white border border-gray-200"></div>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 divide-y divide-gray-200">
              <div className="flex gap-x-4 sm:gap-x-7 py-4 sm:py-6">
                <svg className="shrink-0 size-5 sm:size-6 mt-1 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="5"/></svg>
                <div className="grow">
                  <h3 className="text-sm sm:text-base font-medium text-circular-blue">Ik heb een idee voor jullie</h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600">We horen graag jouw ideeën, van verbeteringen tot samenwerkingen of nieuwe producten. Laat je tip achter en we nemen contact op als we het kunnen oppakken.</p>
                  <a className="mt-2 inline-flex items-center gap-x-2 text-xs sm:text-sm font-medium text-circular-teal hover:text-circular-blue focus:outline-hidden focus:text-circular-blue" href="#contact">
                    Idee delen
                    <svg className="shrink-0 size-2 sm:size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl sm:rounded-3xl shadow-sm outline outline-white/15"></div>
          </div>
        </div>
        {/* End Bento Grid */}
      </div>
      {/* End Blog Section */}

      {/* Features Section */}
      <div id="about" className="w-full scroll-mt-16 md:scroll-mt-20">
        <div className="relative w-full py-12 sm:py-16 md:py-24 min-h-[350px] sm:min-h-[400px] md:min-h-[500px] bg-circular-dark-green flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/10"></div>
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="relative h-full w-full">
              <Image
                src="/images/Icoon.png"
                alt="Decoratief icoon"
                fill
                sizes="100vw"
                className="object-contain opacity-20"
                style={{ transform: 'translate(20%, -10%)' }}
                priority
              />
            </div>
          </div>

          {/* Content - Centered */}
          <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <ScrollReveal>
                <p className="hidden sm:block text-base text-white/80 mb-4">Onze missie</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h3 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-white leading-tight md:leading-tight tracking-tight">
                  <span className="sm:hidden">Meer weten over onze missie?</span>
                  <span className="hidden sm:inline">Wil je meer weten over<br className="hidden sm:block" />onze duurzame missie?</span>
                </h3>
              </ScrollReveal>
              
              <div className="mt-6 sm:mt-10">
                <a className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-circular-green bg-white hover:bg-white/90 border border-transparent rounded-full transition duration-200" href="/about">
                  Ons verhaal
                  <svg className="shrink-0 size-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features */}

      {/* Contact Section */}
      <div id="contact" className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-circular-dark tracking-tight leading-tight md:leading-tight">
                Neem <span className="text-circular-green">contact</span> op!
              </h1>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid items-start lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Form Card */}
            <div className="order-1 lg:order-1 flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="mb-8 text-xl font-medium text-circular-blue">
                Waar kunnen we je mee helpen?
              </h2>

              <form>
                <div className="grid gap-4">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hs-firstname-contacts-1" className="sr-only">Voornaam</label>
                      <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Voornaam" />
                    </div>

                    <div>
                      <label htmlFor="hs-lastname-contacts-1" className="sr-only">Achternaam</label>
                      <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Achternaam" />
                    </div>
                  </div>
                  {/* End Grid */}

                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">Telefoonnummer</label>
                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Telefoonnummer" />
                  </div>

                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows={4} className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-circular-teal focus:ring-circular-teal disabled:opacity-50 disabled:pointer-events-none" placeholder="Details"></textarea>
                  </div>
                </div>
                {/* End Grid */}

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
              {/* Grid */}
              <div className="relative bg-circular-dark-green rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/20"></div>
                <div className="relative grid md:grid-cols-5 gap-10">
                  <div className="md:col-span-2">
                    <div className="max-w-xs">
                      <ScrollReveal>
                        <h2 className="text-5xl font-medium md:text-5xl lg:text-6xl md:leading-tight text-white tracking-tight">Veelgestelde<br /><span className="text-circular-teal">vragen</span></h2>
                      </ScrollReveal>
                      <ScrollReveal delay={100}>
                        <p className="mt-1 hidden md:block text-white/80">Antwoorden op de meest gestelde vragen over onze circulaire verzendoplossingen.</p>
                      </ScrollReveal>
                    </div>
                  </div>
                  {/* End Col */}

                <div className="md:col-span-3">
                  {/* Accordion */}
                  <div className="divide-y divide-white/20">
                    <div className="pb-3 pt-6 first:pt-0">
                      <button 
                        onClick={() => toggleFaq('one')}
                        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                      >
                        Waarom is een herbruikbare verpakking duurzamer dan karton?
                        <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'one' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'one' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-white/80 pt-2">
                          Omdat één herbruikbare verpakking tientallen keren meegaat, daalt de milieubelasting per verzending sterk. Ze zijn gemaakt van gerecycled materiaal en blijven in een gesloten keten circuleren. Zo verbruik je minder grondstoffen en stoot je veel minder CO₂ per gebruik uit.
                        </p>
                      </div>
                    </div>

                    <div className="pb-3 pt-6">
                      <button 
                        onClick={() => toggleFaq('two')}
                        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                      >
                        Hoe lever ik de doos in?
                        <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'two' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'two' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-white/80 pt-2">
                          Bekijk{' '}
                          <a
                            href="https://boxo.nu/inleverpunten/?locate="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-white/60 underline-offset-4 hover:text-circular-teal transition-colors"
                          >
                            boxo.nu/inleverpunten
                          </a>{' '}
                          voor een inleverpunt bij jou in de buurt en volg het retourlabel of de instructies in de e-mail van de webshop.
                        </p>
                      </div>
                    </div>

                    <div className="pb-3 pt-6">
                      <button 
                        onClick={() => toggleFaq('three')}
                        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                      >
                        Is de doos schoon en veilig?
                        <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'three' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'three' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-white/80 pt-2">
                          Ja. Na iedere retourronde inspecteren we de verpakking en reinigen we deze volgens strikte protocollen voordat hij weer de keten in gaat.
                        </p>
                      </div>
                    </div>

                    <div className="pb-3 pt-6">
                      <button 
                        onClick={() => toggleFaq('four')}
                        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                      >
                        Wat als de doos beschadigd is?
                        <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'four' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'four' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-white/80 pt-2">
                          Geen zorgen: kleine slijtage hoort erbij. Lever de verpakking gewoon in; wij beoordelen de staat, repareren waar nodig en vervangen kapotte exemplaren. Versleten materialen worden opnieuw gerecycled.
                        </p>
                      </div>
                    </div>

                    <div className="pb-3 pt-6">
                      <button
                        onClick={() => toggleFaq('five')}
                        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                      >
                        Moet ik betalen voor het terugbrengen?
                        <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'five' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'five' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-white/80 pt-2">
                          Nee, terugbrengen kost je niets. Sterker nog: je ontvangt je statiegeld terug zodra de verpakking is verwerkt. Volg de retouropties uit de instructies van de verzender.
                        </p>
                      </div>
                    </div>

                    <div className="pb-3 pt-6">
                      <button
                        onClick={() => toggleFaq('six')}
                        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start text-white rounded-lg transition hover:text-circular-teal focus:outline-hidden focus:text-circular-teal"
                      >
                        Mijn drop-off punt is vol of gesloten — wat nu?
                        <svg className={`shrink-0 size-5 text-white/80 group-hover:text-circular-teal transition-transform ${openFaq === 'six' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === 'six' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-white/80 pt-2">
                          Controleer een alternatief inleverpunt via BOXO of stuur ons een bericht. We helpen je met een ander adres of een nieuwe retouroptie zodat je de verpakking alsnog eenvoudig kunt inleveren.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Accordion */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
              </div>
      </div>
      {/* End FAQ */}
    </div>
  )
}
