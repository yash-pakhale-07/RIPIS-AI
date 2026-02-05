import { useState } from "react";

export default function CodingInterview() {
    const [approach, setApproach] = useState("");
    const [liveHint, setLiveHint] = useState("");
    const [showHint, setShowHint] = useState(false);

    const problem =
        "Given an array of integers, find the maximum sum of a contiguous subarray.";

    const handleTyping = (text) => {
        setApproach(text);

        if (text.length < 40) {
            setLiveHint("Start by thinking about brute-force vs optimized approach.");
        } else if (text.length < 120) {
            setLiveHint("Can you reduce repeated calculations?");
        } else {
            setLiveHint("Consider maintaining a running value instead of nested loops.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4">Coding Interview</h1>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
                <p className="font-semibold mb-2">Problem:</p>
                <p className="mb-4">{problem}</p>

                <textarea
                    value={approach}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Explain your approach here..."
                    className="w-full border p-3 rounded mb-3"
                    rows={4}
                />

                {approach && (
                    <div className="mb-4 bg-blue-50 border-l-4 border-blue-400 p-3 rounded text-sm">
                        <strong>Live Hint:</strong> {liveHint}
                    </div>
                )}

                <button
                    onClick={() => setShowHint(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Get Hint
                </button>

                {showHint && (
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="font-semibold mb-2">Thinking Nudge:</p>
                        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                            <li>Focus on time complexity improvements.</li>
                            <li>Avoid recalculating overlapping subproblems.</li>
                            <li>Track the best result seen so far.</li>
                        </ul>
                    </div>
                )}
            </div>

            <p className="mt-6 text-sm text-gray-600">
                AI Assistance: Practice Mode (Hints Only)
            </p>
        </div>
    );
}
