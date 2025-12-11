import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-auto bg-white w-full">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <a className="flex-none text-xl font-medium focus:outline-hidden focus:opacity-80" href="/" aria-label="Circular Shipping Company">
              <Image src="/images/CSCLOGO.png" alt="Circular Shipping Company" width={160} height={60} className="h-12 w-auto" />
            </a>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-medium text-gray-900">Navigatie</h4>
            <div className="mt-3 grid space-y-2 text-sm text-gray-600">
              <a href="/" className="hover:text-circular-dark-green transition-colors">Home</a>
              <a href="/about" className="hover:text-circular-dark-green transition-colors">Over ons</a>
              <a href="/business" className="hover:text-circular-dark-green transition-colors">Zakelijk</a>
              <a href="https://boxo.nu/inleverpunten/?locate=" target="_blank" rel="noopener noreferrer" className="hover:text-circular-dark-green transition-colors">Inleverpunten</a>
              <a href="/#contact" className="hover:text-circular-dark-green transition-colors">Contact</a>
              <a href="/#faq" className="hover:text-circular-dark-green transition-colors">FAQ</a>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-medium text-gray-900">Contact</h4>

            <div className="mt-3 grid space-y-2 text-sm text-gray-600">
              <p>Circular Shipping Company B.V.</p>
              <p>Hooidrift 116A-02</p>
              <p>3023KV Rotterdam</p>
              <p className="mt-2"><a href="mailto:info@circularshipping.nl" className="hover:text-circular-dark-green">info@circularshipping.nl</a></p>
              <p><a href="tel:+31642360448" className="hover:text-circular-dark-green">+31 6 42 36 04 48</a></p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-medium text-gray-900">Bedrijfsgegevens</h4>

            <div className="mt-3 grid space-y-2 text-sm text-gray-600">
              <p>BTW: NL865622474B01</p>
              <p>KVK: 91337410</p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="text-sm text-gray-600">
              © 2025 Circular Shipping Company B.V.
            </p>
          </div>
          {/* End Col */}

          {/* Social Brands */}
          <div>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-600 hover:text-circular-dark-green focus:outline-hidden focus:text-circular-dark-green disabled:opacity-50 disabled:pointer-events-none" href="https://www.linkedin.com/company/circular-shipping-company/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  )
}