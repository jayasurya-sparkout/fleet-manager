'use client';

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  logoSrc: string;
  initials: string;
  name: string;
  role: string;
  headerClass?: string;
}

export function Header({ logoSrc, initials, name, role, headerClass }: HeaderProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <header className={`flex justify-between items-center w-full py-6 ${headerClass ? headerClass : ''}`}>
      <div className="flex items-center">
        <Image
          alt="Logo"
          width={161}
          height={70}
          src={logoSrc}
          priority
        />
      </div>
      
      {/* Right: User Info */}
      <div
        className="flex items-center gap-4 px-4 py-3 border-2 border-[#45464E] rounded-xl cursor-pointer transition-all hover:shadow-md"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Avatar Circle */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#CDCDCD] text-[#4E4E4E] font-bold">
          {initials}
        </div>
        
        {/* User Details */}
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-2">
            <span className="font-medium text-white">{name}</span>
            <ChevronDown
              size={20}
              className={`text-white transition-transform duration-300 ${
                hovered ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <span className="text-sm text-[#B2B9CA]">{role}</span>
        </div>
      </div>
    </header>
  );
}
