"use client";
import { forwardRef, useEffect, useRef } from "react";

const SubmitEmailBtn = ({ ...props }) => {
   const buttonRef = useRef<HTMLButtonElement>(null);
   const leftLetterRef = useRef<HTMLSpanElement>(null);
   const rightLetterRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      buttonRef.current?.addEventListener("mouseover", () => {
         leftLetterRef.current?.classList.remove(
            "animate-left-letter-animation-back"
         );
         rightLetterRef.current?.classList.remove(
            "animate-right-letter-animation-back"
         );
         leftLetterRef.current?.classList.add("animate-left-letter-animation");
         rightLetterRef.current?.classList.add(
            "animate-right-letter-animation"
         );
      });

      buttonRef.current?.addEventListener("mouseout", () => {
         leftLetterRef.current?.classList.remove(
            "animate-left-letter-animation"
         );
         rightLetterRef.current?.classList.remove(
            "animate-right-letter-animation"
         );
         leftLetterRef.current?.classList.add(
            "animate-left-letter-animation-back"
         );
         rightLetterRef.current?.classList.add(
            "animate-right-letter-animation-back"
         );
      });
   }, []);

   return (
      <button
         ref={buttonRef}
         className="group w-14 h-14  xl:w-16 xl:h-16 aspect-square  relative rounded-full bg-woodsmoke text-white flex-shrink-0 overflow-hidden"
      >
         <span
            ref={leftLetterRef}
            className="inline-block relative font-bold text-xl "
         >
            G
         </span>
         <span ref={rightLetterRef} className="inline-block font-bold text-xl ">
            O
         </span>
         <div className="button__icon absolute inset-0 w-14 h-14   xl:w-16 xl:h-16 aspect-square rounded-full grid place-content-center scale-50 opacity-0 transition-all ease-in-out duration-300 border border-primary  delay-300 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-primary">
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="#FFFFFF"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M16.0711 5.00034L20.6673 9.59654M23.1421 12.0714L16.0711 19.1425"
                  stroke="#FFFFFF"
                  strokeWidth="1.125"
               />
               <rect
                  width="16"
                  height="1.5"
                  transform="matrix(1 0 0 -1 1 12.8217)"
                  fill="#FFFFFF"
               />
            </svg>
         </div>
      </button>
   );
};

export default SubmitEmailBtn;
