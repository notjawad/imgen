"use client";

import { VT323 } from "next/font/google";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { IoCalendar, IoSparkles } from "react-icons/io5";

import { decodeBase64, getInitials, hexToRgba } from "@/lib/utils";

interface WelcomeData {
  avatar: string;
  member_count: string;
  username: string;
  created_at: string;
  avatar_decoration: string;
}

export default function Welcome() {
  const params = useSearchParams();

  const data = decodeBase64<WelcomeData>(params.get("data")!);

  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="border border-neutral-800 max-w-96 shadow py-8 px-4 rounded flex items-center gap-x-4 relative overflow-hidden"
        id="capture"
      >
        <div className="relative">
          {data.avatar ? (
            <Image
              src={data.avatar}
              alt="User Avatar"
              width={80}
              height={80}
              className="rounded-full scale-150 object-cover border-2 z-20 border-fuchsia-500/30"
            />
          ) : (
            <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-50 uppercase border border-white/10">
              {getInitials(data.username)}
            </div>
          )}
          {data.avatar_decoration && (
            <Image
              src={data.avatar_decoration}
              alt="Avatar Decoration"
              className="absolute top-0 left-0 z-10 scale-150"
              width={80}
              height={80}
            />
          )}
        </div>
        <div className="z-20">
          <p className="w-[300px] text-xl truncate text-neutral-50 font-bold text">
            {data.username} just joined the server
          </p>
          <div className="flex items-center gap-x-1">
            <span className="px-1 py-0.5 bg-fuchsia-500/10 text-fuchsia-500 border border-fuchsia-500/5 rounded text-[8px] font-bold flex items-center gap-x-1">
              <IoSparkles className="w-2 h-2" />
              {data.member_count}
            </span>
            <span className="px-1 py-0.5 bg-fuchsia-500/10 text-fuchsia-500 border border-fuchsia-500/5 rounded text-[8px] font-bold flex items-center gap-x-1">
              <IoCalendar className="w-2 h-2" />
              {data.created_at}
            </span>
          </div>
        </div>
        <div
          className="
      absolute w-96 h-96 bg-fuchsia-500/10 rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 z-10 blur-[120px]
      "
        />
        <div
          className="
      absolute w-[550px] h-96 rounded bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 z-10
      "
        >
          hello
        </div>
      </div>
    </div>
  );
}
