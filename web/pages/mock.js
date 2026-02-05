import Link from "next/link";

export default function MockInterview() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">

            {/* Header */}
            <h1 className="text-4xl font-bold mb-2">Mock Interview</h1>
            <p className="text-gray-600 mb-10 text-center max-w-xl">
                Practice interviews in a realistic environment with
                <span className="font-semibold"> live micro-guidance </span>
                to improve your thinking during the interview.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">

                {/* HR Interview */}
                <Link href="/hr">
                    <div className="cursor-pointer bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border">
                        <h2 className="text-xl font-semibold mb-2">HR Interview</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Behavioral and situational interview practice with live guidance
                            on structure, clarity, and communication.
                        </p>
                        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                            <li>Camera & microphone enabled</li>
                            <li>Live micro-guidance while answering</li>
                            <li>No answers, hints only</li>
                        </ul>
                        <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Start HR Interview
                        </button>
                    </div>
                </Link>

                {/* Coding Interview */}
                <Link href="/coding">
                    <div className="cursor-pointer bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border">
                        <h2 className="text-xl font-semibold mb-2">Coding Interview</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Practice coding interviews by explaining your approach and
                            receiving real-time thinking hints.
                        </p>
                        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                            <li>Think-aloud problem solving</li>
                            <li>Algorithmic hints in real time</li>
                            <li>Ethical AI assistance</li>
                        </ul>
                        <button className="mt-5 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                            Start Coding Interview
                        </button>
                    </div>
                </Link>

            </div>

            {/* Footer Badge */}
            <div className="mt-10 px-4 py-1 text-xs rounded-full bg-green-100 text-green-800">
                AI Assistance ON · Practice Mode · Hints Only
            </div>
        </div >
    );
}
