import { useState, useEffect } from "react";

export default function HRInterview() {
    // ===== STATES =====
    const [videoOn, setVideoOn] = useState(false);
    const [showGuidance, setShowGuidance] = useState(false);
    const [answer, setAnswer] = useState("");
    const [liveHint, setLiveHint] = useState("");

    // ===== QUESTIONS =====
    const questions = [
        "Can you tell me about yourself?",
        "Why do you want to work here?",
        "What are your strengths and weaknesses?",
        "Describe a challenging situation you faced and how you handled it.",
        "Where do you see yourself in five years?"
    ];

    const question = questions[0]; // fixed for demo

    // ===== CAMERA + MIC =====
    useEffect(() => {
        if (videoOn) {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    const video = document.getElementById("video-preview");
                    if (video) {
                        video.srcObject = stream;
                    }
                })
                .catch((err) => console.error("Permission error:", err));
        }
    }, [videoOn]);

    // ===== LIVE TYPING GUIDANCE =====
    const handleTyping = (text) => {
        setAnswer(text);

        if (text.length < 40) {
            setLiveHint("Start with context: briefly describe the situation.");
        } else if (text.length < 120) {
            setLiveHint("Good start. Clearly explain your role and actions.");
        } else {
            setLiveHint("Now highlight the impact and what you learned.");
        }
    };

    // ===== UI =====
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4">HR Mock Interview</h1>

            {/* Camera & Mic */}
            <div className="mb-6 flex flex-col items-center">
                {!videoOn ? (
                    <button
                        onClick={() => setVideoOn(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Start Interview (Camera & Mic)
                    </button>
                ) : (
                    <div className="w-64 h-40 rounded border flex items-center justify-center bg-gray-900 text-white">
                        <video
                            id="video-preview"
                            autoPlay
                            muted
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                )}
            </div>

            {/* Interview Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full border">

                <p className="text-lg font-semibold mb-2">Interview Question:</p>
                <p className="mb-4">{question}</p>

                <textarea
                    value={answer}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Speak or type your answer here..."
                    className="w-full border p-3 rounded mb-3"
                    rows={4}
                />

                {/* Live hint while typing */}
                {answer && (
                    <div className="mb-4 bg-blue-50 border-l-4 border-blue-400 p-3 rounded text-sm">
                        <strong>Live Hint:</strong> {liveHint}
                    </div>
                )}

                <button
                    onClick={() => setShowGuidance(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Get Live Guidance
                </button>

                {/* Post-click micro-guidance */}
                {showGuidance && (
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="font-semibold mb-2">Live Micro-Guidance:</p>
                        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                            <li>Try structuring your answer using the STAR method.</li>
                            <li>Make your contribution explicit, not just the team result.</li>
                            <li>End with one learning or improvement insight.</li>
                        </ul>
                    </div>
                )}
            </div>

            <div className="mt-6 px-4 py-1 text-xs rounded-full bg-green-100 text-green-800">
                AI Assistance ON · Practice Mode · Hints Only
            </div>

        </div>
    );
}
