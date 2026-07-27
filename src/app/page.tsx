import RoadSign from "./components/RoadSign"

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ===== Hero section ===== */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-indigo-950 px-4 py-20 sm:py-28">

        {/* Decorative background texture + glow blobs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Floating road-sign illustrations — decorative, tied to the road-sign quiz feature */}
        <div className="hidden lg:block absolute top-16 right-[10%] w-28 h-28 animate-float-pos drop-shadow-2xl">
          <RoadSign type="yield" />
        </div>
        <div className="hidden lg:block absolute bottom-12 left-[8%] w-28 h-28 animate-float-neg drop-shadow-2xl">
          <RoadSign type="stop" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">

          {/* Top badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 text-blue-100 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Verified • Free • California DMV
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
            style={{ animationDelay: '0.08s' }}>
            Pass Your Permit Test on the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-emerald-300">
              First Try
            </span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up text-base sm:text-xl text-blue-100/80 mb-2 max-w-xl mx-auto"
            style={{ animationDelay: '0.16s' }}>
            Practice with questions verified against the official California Driver&apos;s Handbook,
            including road-sign recognition, in English and Farsi.
          </p>
          <p className="animate-fade-up text-sm sm:text-lg text-blue-100/60 mb-10 max-w-xl mx-auto text-center"
            dir="rtl" style={{ animationDelay: '0.2s' }}>
            با سؤالاتی که مطابق با کتابچه راهنمای رسمی رانندگان کالیفرنیا تأیید شده‌اند، از جمله تشخیص علائم
            راهنمایی، به زبان انگلیسی و فارسی تمرین کنید.
          </p>

          {/* ===== Language selector ===== */}
          <div className="animate-fade-up flex flex-col items-center gap-4 w-full" style={{ animationDelay: '0.24s' }}>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">

              {/* English start button */}
              <a href="/quiz?lang=en"
                className="group bg-linear-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg
                  shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5
                  transition-all duration-200 text-center">
                Start in English <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>

              {/* Farsi / Dari start button */}
              <a href="/quiz?lang=fa"
                className="group bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg
                  shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5
                  transition-all duration-200 text-center">
                شروع به فارسی
              </a>

            </div>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-10 w-full max-w-md border-t border-white/10 pt-6">
              <div>
                <p className="text-xl sm:text-3xl font-bold text-white">114</p>
                <p className="text-[11px] sm:text-sm text-blue-200/70">Questions</p>
              </div>
              <div>
                <p className="text-xl sm:text-3xl font-bold text-white">14</p>
                <p className="text-[11px] sm:text-sm text-blue-200/70">Road Signs</p>
              </div>
              <div>
                <p className="text-xl sm:text-3xl font-bold text-white">2</p>
                <p className="text-[11px] sm:text-sm text-blue-200/70">Languages</p>
              </div>
              <div>
                <p className="text-xl sm:text-3xl font-bold text-white">$0</p>
                <p className="text-[11px] sm:text-sm text-blue-200/70">Always Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="bg-white py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Why Use This App?
          </h2>
          <p className="text-center text-gray-500 mb-10 sm:mb-14">Everything you need to pass your DMV written test</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

            {/* Feature 1 */}
            <div className="group text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">✅</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Verified Questions</h3>
              <p className="text-gray-500 text-sm">Every question is grounded in the official California Driver&apos;s Handbook, so you study the real rules.</p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🚸</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Road Sign Recognition</h3>
              <p className="text-gray-500 text-sm">Practice identifying real road signs, not just reading rules — a key part of the actual DMV test.</p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Track Progress</h3>
              <p className="text-gray-500 text-sm">See your score after every quiz and know exactly if you are ready for the real test.</p>
            </div>

            {/* Feature 4 */}
            <div className="group text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-violet-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Bilingual</h3>
              <p className="text-gray-500 text-sm">Every question shown in English and Farsi, serving the California community.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== How It Works Section ===== */}
      <section className="bg-linear-to-b from-gray-50 to-blue-50 py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-500 mb-12 sm:mb-16">
            Ready to practice in under 30 seconds
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

            {/* Connecting line, desktop only */}
            <div className="hidden md:block absolute top-6 left-[16.6%] right-[16.6%] h-0.5 bg-linear-to-r from-blue-300 via-blue-400 to-blue-300" />

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30 relative z-10">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Click Start</h3>
              <p className="text-gray-500">No signup, no account needed. Just click and start practicing instantly.</p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30 relative z-10">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Answer Questions</h3>
              <p className="text-gray-500">Work through DMV questions and road signs in English and Farsi. Get instant feedback on every answer.</p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30 relative z-10">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">See Your Score</h3>
              <p className="text-gray-500">Get your results instantly. Pass or fail, then practice again with a fresh set.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 text-center">
        <p className="text-gray-500 text-sm">
          Built by <span className="font-semibold text-gray-700">KBL Web Solutions</span> •
          <a href="https://www.kblwebsolutions.com/" className="text-blue-600 hover:underline ml-1" target="_blank">KBL Web Solutions</a>
        </p>
        {/* Attribution for handbook content, required under the handbook's CC BY-NC license. */}
        <p className="text-gray-400 text-xs mt-1">
          Questions based on the California Driver&apos;s Handbook (California DMV), CC BY-NC 4.0.
        </p>

        {/* Legal disclaimer: clarifies this is an independent practice tool, not a government service */}
<p className="text-gray-400 text-xs mt-3 max-w-xl mx-auto">
  This is an independent practice tool and is not affiliated with, endorsed by, or operated by the California Department of Motor Vehicles or any government agency. Practice questions are for study purposes only. Always refer to the official{" "}
  <a href="https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/"
    className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
    California Driver&apos;s Handbook
  </a>{" "}
  for current rules. Passing this practice quiz does not guarantee passing the official DMV test.
</p>
      </footer>

    </main>
  )
}
