import React from "react";
import { toast } from "sonner";

type TextCardProps = {
  index: number;
  text: string;
};

const TextCard = ({ index, text }: TextCardProps) => {
  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copy to clipboard");
  };
  return (
    <div>
      <div className="flex w-full items-center justify-between mb-5">
        <p className="text-xl font-semibold">
          ({`${index + 1}`}) {new Date().toUTCString()}
        </p>
        <button
          onClick={() => copyToClipBoard(text)}
          className="bg-white text-sm md:text-base rounded-md px-5 py-2 transition-all hover:bg-gray-400 text-black"
        >
          Copy
        </button>
      </div>

      <textarea
        defaultValue={text}
        className="w-full min-h-[30vh] bg-gray-600 rounded-xl outline-none p-5"
      ></textarea>
    </div>
  );
};

export default TextCard;
