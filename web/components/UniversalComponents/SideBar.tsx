import Image from 'next/image';
import React from 'react';

interface SideBarProps {
  title: string;
  para: string;
  quote: string;
  author: string;
}

const SideBar: React.FC<SideBarProps> = ({ title, para, quote, author }) => {
  return (
    <div className="hidden md:flex md:w-1/2 relative bg-black">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://imgs.search.brave.com/_Z6M0-Gj5zZICXHbUoxHL-9fdCs06LI1OeXocvO9Vaw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/ZXgtYmFja2dyb3Vu/ZC1uZXR3b3JraW5n/XzUyNjgzLTEzNzg3/Ny5qcGc_c2VtdD1h/aXNfaHlicmlk"
        alt="Login background"
        layout="fill"
        objectFit="cover"
        className="mix-blend"
        priority
      />
      <div className="relative z-20 p-12 flex flex-col justify-between h-full text-white">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-4 text-gray-300 max-w-md">
            {para}
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-300">
            {quote}
          </p>
          <p className="font-medium">- {author}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
