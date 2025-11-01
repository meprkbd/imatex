"use client";

import convertor from "@/lib/convertor";
import React, { useRef, useState } from "react";
import { IoImage } from "react-icons/io5";
import TextCard from "./cards/TextCard";

const UploadFileSection = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [processing, setProcessing] = useState<boolean>(false);
  const [texts, setTexts] = useState<Array<string>>([]);

  const convert = async (url: string) => {
    if (url) {
      setProcessing(true);
      const txt = await convertor(url);
      if (txt) setTexts((prev) => [...prev, txt]);
      setProcessing(false);
    }
  };

  const openBrowse = () => {
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url: string = URL.createObjectURL(e.target.files[0]);
      //   console.log(url);
      await convert(url);
      URL.revokeObjectURL(url);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const url = URL.createObjectURL(e.dataTransfer.files[0]);
      await convert(url);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section>
      <h2 className="px-5 pt-10 text-center md:text-6xl text-3xl font-extrabold">
        Imatex by{" "}
        <span className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          PRK
        </span>
      </h2>

      <input
        type="file"
        hidden
        required
        onChange={handleFileChange}
        ref={fileInputRef}
      />

      <div className="w-full max-w-7xl mx-auto p-5 md:p-20 flex items-center justify-center">
        <div
          onClick={openBrowse}
          onDrop={handleDrop}
          onDragOver={(e: any) => {
            e.preventDefault();
          }}
          className="w-full p-5 bg-gray-600 min-h-[50vh] rounded-xl flex flex-col items-center justify-center text-gray-400 cursor-pointer"
        >
          <p className="text-4xl font-bold">
            {processing
              ? "Processing Image..."
              : "Browse Or Drop Your Image Here"}
          </p>
          <span className="text-">
            <IoImage size={150} className={processing ? "animate-pulse" : ""} />
          </span>
        </div>
      </div>

      <div className="my-10 md:px-20 px-5">
        {texts.map((text, index) => (
          <TextCard key={index} index={index} text={text} />
        ))}
      </div>
    </section>
  );
};

export default UploadFileSection;
