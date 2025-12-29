"use client";

import { useEffect, useState } from "react";

export default function SurprisePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to show loading state
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blush">
          <div className="text-gray-700 text-xl">Loading surprise...</div>
        </div>
      ) : (
        <iframe
          src="/surprise/index.html"
          className="w-full h-full border-0"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Surprise"
        />
      )}
    </div>
  );
}

