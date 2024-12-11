"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Icon from "../assets/icon.png";

export default function Home() {
    const searchParams = useSearchParams();
    const mode = searchParams.get("mode");
    const title = mode === "resetPassword" ? "Reset Password" : "Verify Email";
    const parans = searchParams.toString();
    const url = `smpath.dance.cloud://dancecloud/actions?${parans}`;

    return (
        <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#060619" }}>
            <div className="text-center p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#111126" }}>
                <div className="flex flex-col items-center">
                    <Image
                        src={Icon}
                        alt="Dance Cloud"
                        className="w-24 h-24 mb-4 rounded-[20px]"
                    />
                    <h1 className="text-2xl font-bold text-gray-300 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Experience a cleaner and more intuitive design that makes navigation and usability smoother than ever.<br />
                        We&apos;ve optimized the app to run faster and more efficiently, reducing load times and enhancing overall stability.
                    </p>
                    {parans && (
                        <a
                            href={url}
                            className="px-6 py-3 text-white rounded-lg shadow hover:bg-blue-600 transition"
                            style={{ backgroundColor: "#c200ff" }}
                        >
                            Open the Application
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
