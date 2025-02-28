'use client';
import { Delete } from '../../../components';
import Image from "next/image";
import Icon from "../assets/icon.png";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#060619" }}>
      <div className="text-center p-8 rounded-lg shadow-lg" style={{ backgroundColor: "#111126" }}>
        <div className="flex flex-col items-center">
          <Image
            src={Icon}
            alt="Podium Picks"
            className="w-24 h-24 mb-4 rounded-[20px]"
          />
          <h1 className="text-2xl font-bold text-gray-300 mb-4">
            Delete Account
          </h1>
          <div className="relative z-0">
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
}
