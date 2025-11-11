export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-circular-green/10 text-circular-green text-sm font-medium">
            Welkom terug
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-medium text-circular-dark tracking-tight">
            Inloggen
          </h1>
          <p className="mt-4 text-gray-600">
            Log in om je retouren te volgen, verpakkingen te beheren en toegang te krijgen tot je circulaire dashboards.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-sm p-6 sm:p-10">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="login-email" className="block text-sm font-medium text-circular-dark">
                E-mailadres
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="naam@bedrijf.nl"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-circular-teal focus:ring-circular-teal text-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="login-password" className="font-medium text-circular-dark">
                  Wachtwoord
                </label>
                <a href="mailto:info@circularshipping.nl?subject=Wachtwoord%20vergeten" className="text-circular-teal hover:text-circular-green">
                  Wachtwoord vergeten?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-circular-teal focus:ring-circular-teal text-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 text-circular-green focus:ring-circular-green" />
                <span className="ml-2">Ingelogd blijven</span>
              </label>
              <a href="mailto:info@circularshipping.nl?subject=Nieuw%20account%20aanvragen" className="text-sm text-circular-teal hover:text-circular-green">
                Nieuw account aanvragen
              </a>
            </div>

            <button
              type="button"
              className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-circular-green text-white px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition"
            >
              Inloggen
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
