export default function About() {

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 to-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl w-full">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-5">🚗</div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          About This App
        </h1>

        <p className="text-gray-600 mb-4 leading-relaxed">
          DMV Practice Quiz is a free study tool for anyone preparing for the California DMV
          written permit test. Every question — including road sign recognition — is verified
          against the official California Driver&apos;s Handbook, so you&apos;re studying the
          real rules the test is based on, not AI guesswork.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          It was built for the Bay Area&apos;s Farsi-speaking community, which lacked a study
          tool in their own language. Every question is shown in both English and Farsi/Dari,
          and the app tracks which questions you&apos;ve seen so each practice session brings
          fresh material.
        </p>

        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          No sign-up, no accounts, no ads — just open it on your phone or computer and start
          practicing.
        </p>

        <div className="border-t border-gray-100 mt-6 pt-6">
          <a
            href="https://www.kblwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Built by KBL Web Solutions
          </a>
        </div>
      </div>
    </main>
  )
}