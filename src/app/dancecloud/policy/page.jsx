"use client";
import Image from "next/image";
import Icon from "../assets/icon.png";

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <div className="relative z-0 text-left">
            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">1. Introduction</h2>
            <p>Welcome to the <strong>Dance Cloud</strong> mobile application. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our app. This policy is published by <strong>Smooth Path Digital S.R.L.</strong>, a company registered in Romania with tax ID 48772749 and headquartered at Municipiul Cluj-Napoca, Strada EUGEN IONESCO, Nr. 67, Camera 1, Bloc C, Scara 1, Etaj 4, Ap. 29, Judet Cluj.</p>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">2. Information We Collect</h2>
            <p className="mb-2"><strong>A. Location Data</strong><br />We collect and use your location data to provide GPS-based speed tracking. This information is used solely for the purpose of displaying your real-time speed and route information while you use the app.</p>

            <p className="mb-2"><strong>B. Firebase</strong><br />When you use the Dance Cloud app, Firebase collects certain data, including user analytics and crash reports, to help us improve the app&apos;s functionality and performance.</p>

            <p className="mb-2"><strong>C. Facebook Login</strong><br />If you choose to log in using your Facebook account, we may collect your public Facebook profile information, email address, and user ID. We use this information for user authentication and account management.</p>

            <p className="mb-2"><strong>D. Google Login</strong><br />If you choose to log in using your Google account, we may collect your Google account information, including your email address, profile picture, and user ID. This information is used for user authentication and account management.</p>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide you with GPS-based speed tracking services.</li>
              <li>To improve and personalize your experience with the Dance Cloud app.</li>
              <li>To facilitate user authentication through Facebook Login and Google Login.</li>
              <li>To send you important notifications related to your account or app updates.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">4. Data Sharing and Disclosure</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>With third-party service providers, such as Firebase, to help us improve the app&apos;s functionality and performance.</li>
              <li>With social media platforms (Facebook and Google) for user authentication purposes.</li>
              <li>As required by law or to protect our rights, privacy, safety, or property.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">5. Data Security</h2>
            <p>We take reasonable measures to protect your data, but no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.</p>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">6. Your Choices</h2>
            <p>You can choose not to provide certain information, but this may limit your ability to use specific features of the Dance Cloud app.</p>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">7. Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted within the app, and the revised policy will be effective immediately. We encourage you to review this policy periodically.</p>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">8. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at <strong>contact@smoothpath.com</strong>.</p>

            <h2 className="text-xl font-bold text-gray-100 mb-4 mt-4">9. Acceptance of Terms</h2>
            <p>By using the Dance Cloud mobile app, you agree to this Privacy Policy and the practices described herein.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
