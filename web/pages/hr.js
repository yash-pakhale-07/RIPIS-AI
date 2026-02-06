import { useEffect, useState } from "react";

export default function HRInterview() {
    const [videoOn, setVideoOn] = useState(true);
    const [showGuidance, setShowGuidance] = useState(false);

    const question = "Can you tell me about yourself?";

    useEffect(() => {
        if (videoOn) {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    const video = document.getElementById("video-preview");
                    if (video) video.srcObject = stream;
                })
                .catch((err) => console.error(err));
        }
    }, [videoOn]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-6">HR Mock Interview</h1>

            {/* Camera Preview */}
            <video
                id="video-preview"
                autoPlay
                muted
                className="w-full max-w-md rounded-xl border-2 border-gray-700 mb-6"
            />

            {/* Interview Card */}
            <div className="bg-gray-900 rounded-xl shadow-2xl p-6 max-w-xl w-full">
                <p className="text-lg font-semibold mb-2 text-white">
                    Interview Question:
                </p>

                <p className="text-gray-300 mb-4">{question}</p>

                <textarea
                    className="w-full border-2 border-gray-700 bg-black text-white
                     placeholder-gray-500 p-3 rounded mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Speak or type your answer here..."
                />

                <button
                    onClick={() => setShowGuidance(true)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition"
                >
                    Get Live Guidance
                </button>

                {showGuidance && (
                    <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded">
                        <p className="text-sm text-green-400">
                            Tip: Keep your introduction structured — background, skills, and
                            what you’re looking for.
                        </p>
                    </div>
                )}
            </div>

            <p className="mt-6 text-sm text-green-400 bg-gray-900 px-4 py-2 rounded-full">
                AI Assistance ON · Practice Mode · Hints Only
            </p>
        </div>
    );
}