import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white">
          RIPIS
        </h1>

        <p className="text-lg text-gray-300 mb-2">
          <span className="font-semibold">
            Real-Time Interview Practice Intelligence System
          </span>
        </p>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Practice interviews in a realistic environment with
          <span className="font-semibold text-white"> live micro-guidance </span>
          that helps you correct your thinking
          <span className="font-semibold text-white"> during the interview</span> —
          not after it ends.
        </p>

        {/* CTA */}
        <Link href="/mock">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg">
            Start Mock Interview
          </button>
        </Link>

        {/* Feature badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full border border-gray-700">
            🎯 Practice-Time Feedback
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full border border-gray-700">
            🧠 Live Micro-Guidance
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full border border-gray-700">
            ⚖️ Ethical AI (Hints Only)
          </span>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-500">
          Designed for mock interviews · Not for assessment or cheating
        </p>
      </div>
    </div>
  );
}
