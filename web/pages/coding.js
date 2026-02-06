import { useState } from "react";

export default function CodingInterview() {
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    const problem =
        "Given an array of integers, find the maximum sum of a contiguous subarray.";

    const handleSubmit = () => {
        if (answer.trim().length === 0) {
            setFeedback("Start by explaining your thought process before writing code.");
        } else if (answer.length < 40) {
            setFeedback(
                "You’re on the right track. Try explaining how you would track the maximum sum step-by-step."
            );
        } else {
            setFeedback(
                "Good explanation. Consider mentioning time complexity and how negative values are handled."
            );
        }
    };

    const handleHint = () => {
        setFeedback(
            "Hint: Maintain a running sum and reset it when it becomes negative."
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Coding Interview</h1>

            <div className="bg-gray-900 rounded-xl shadow-2xl p-6 max-w-xl w-full">
                <p className="text-lg font-semibold mb-2 text-white">Problem:</p>
                <p className="text-gray-300 mb-5">{problem}</p>

                <textarea
                    className="w-full border-2 border-gray-700 bg-black text-white
                     placeholder-gray-500 p-3 rounded mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={5}
                    placeholder="Explain your approach here..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />

                <div className="flex gap-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold transition"
                    >
                        Submit Solution
                    </button>

                    <button
                        onClick={handleHint}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition"
                    >
                        Get Hint
                    </button>
                </div>

                {feedback && (
                    <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded">
                        <p className="text-sm text-green-400">{feedback}</p>
                    </div>
                )}
            </div>

            <p className="mt-6 text-sm text-gray-400">
                AI Assistance: Practice Mode (Hints Only)
            </p>
        </div>
    );
}