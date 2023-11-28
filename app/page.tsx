import Image from "next/image";
import SubmitEmailBtn from "./components/ui/submit-email-btn";

export default function Home() {

   return (
      <main className="flex w-full min-h-screen flex-col items-center justify-between">
         <footer className="w-full p-6 xl:flex xl:p-16">
            <div className="grid gap-8 mb-8 xl:pe-24 xl:flex-shrink-0 xl:border-t xl:border-r xl:border-woodsmoke">
               <div className="footer__logo xl:mt-12">
                  <Image
                     src="/logo.png"
                     alt="logo"
                     className="w-[125px] xl:w-[180px]"
                     width={100}
                     height={32}
                     sizes="(max-width: 768px) 100vw,  1920px"
                  />
               </div>
               <p className="footer__text max-w-[258px]  opacity-70 text-sm">
                  In the blog you will find fascinating articles about the life
                  of our this is worxpace, also about future
               </p>
               <div className="footer__mail">
                  <form>
                     <div className="input__group flex gap-2 w-full">
                        <input
                           className="h-14 xl:h-16  px-6 w-full max-w-xs flex-shrink outline-none rounded-full border border-woodsmoke "
                           type="email"
                           name="email"
                           id="input-email"
                           placeholder="Your email"
                        />
                        <SubmitEmailBtn />
                     </div>
                  </form>
               </div>
               <div className="footer__copyright">
                  <p className="text-sm  hidden md:block">
                     © 2022 Spotbusiness All rights reserved
                  </p>
               </div>
            </div>

            <div className="footer__menu w-full  md:border-t md:border-woodsmoke ">
               <div className="footer__menu w-full md:flex md:justify-between md:px-[100px]  xl:px-[180px]">
                  <ul className="menu__principal relative grid grid-cols-2 xl:grid-cols-1 gap-6 border-t border-woodsmoke py-10 after:content-[''] after:absolute after:h-2 after:bg-woodsmoke after:left-1/2 after:top-0 after:w-[1px]  xl:after:hidden md:border-none">
                     <li>
                        <a
                           href="#"
                           className=" font-medium text-[22px] leading-7 "
                        >
                           Solutions
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-[22px] leading-7 "
                        >
                           Locations
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-[22px] leading-7 "
                        >
                           Contact us
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-[22px] leading-7 "
                        >
                           Enterprise
                        </a>
                     </li>
                  </ul>
                  <ul className="menu__secondary grid grid-cols-2 xl:grid-cols-1 gap-6 border-t border-woodsmoke py-10 relative  after:content-[''] after:absolute after:h-2 after:bg-woodsmoke after:left-1/2 after:top-0 after:w-[1px] xl:after:left-0  md:border-none xl:ps-4">
                     <li>
                        <a
                           href="#"
                           className="font-medium text-sm leading-7 "
                        >
                           Private office
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-sm leading-7 "
                        >
                           Co-working space
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-sm leading-7 "
                        >
                           Virtual office
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-sm leading-7 "
                        >
                           Meeting room
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="font-medium text-sm leading-7 "
                        >
                           Partners
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="w-full xl:flex xl:justify-between items-center border-t border-woodsmoke md:px-[100px]  xl:ps-[180px] ">
                  <ul className="footer__term hidden xl:block ">
                     <li>
                        <a href="">Privacy Policy</a>
                     </li>
                     <li>
                        <a href="">Terms & Conditions</a>
                     </li>
                  </ul>
                  <ul className="media_list flex justify-between md:justify-center md:gap-2 relative  after:content-[''] after:absolute after:h-2 after:bg-woodsmoke after:left-1/2 after:top-0 after:w-[1px] xl:after:left-0 xl:ps-4 after:hidden xl:after:block xl:py-12 py-6">
                     <li className="p-3 border border-woodsmoke rounded-full">
                        <a href="">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z"
                                 fill="#151718"
                              />
                           </svg>
                        </a>
                     </li>
                     <li className="p-3 border border-woodsmoke rounded-full">
                        <a href="">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M7.80477 6.0716C7.80477 7.07334 7.05073 7.87491 5.83999 7.87491H5.8178C4.65206 7.87491 3.89844 7.07334 3.89844 6.0716C3.89844 5.04866 4.67502 4.26953 5.86287 4.26953C7.05073 4.26953 7.78224 5.04866 7.80477 6.0716ZM7.57778 9.29883V19.7317H4.10547V9.29883H7.57778ZM20.1004 19.7325L20.1005 13.7507C20.1005 10.5461 18.3875 9.05469 16.1026 9.05469C14.259 9.05469 13.4336 10.0673 12.9727 10.7777V9.29995H9.5C9.54577 10.2789 9.5 19.7328 9.5 19.7328H12.9727V13.9062C12.9727 13.5944 12.9953 13.2834 13.0871 13.0602C13.338 12.4372 13.9094 11.7923 14.8687 11.7923C16.1257 11.7923 16.6282 12.749 16.6282 14.1509V19.7325H20.1004Z"
                                 fill="#151718"
                              />
                           </svg>
                        </a>
                     </li>
                     <li className="p-3 border border-woodsmoke rounded-full">
                        <a href="">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                                 fill="#151718"
                              />
                           </svg>
                        </a>
                     </li>
                     <li className="p-3 border border-woodsmoke rounded-full">
                        <a href="">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                           >
                              <path
                                 d="M23.0364 6.46506C22.7771 5.50114 22.0171 4.7413 21.0533 4.48175C19.2926 4 12.2497 4 12.2497 4C12.2497 4 5.20708 4 3.44638 4.46349C2.50114 4.72276 1.72263 5.50128 1.46335 6.46506C1 8.22562 1 11.8768 1 11.8768C1 11.8768 1 15.5464 1.46335 17.2885C1.7229 18.2523 2.4826 19.0121 3.44652 19.2717C5.22562 19.7536 12.25 19.7536 12.25 19.7536C12.25 19.7536 19.2926 19.7536 21.0533 19.2901C22.0173 19.0307 22.7771 18.2708 23.0367 17.3071C23.4999 15.5464 23.4999 11.8953 23.4999 11.8953C23.4999 11.8953 23.5184 8.22562 23.0364 6.46506ZM10.0074 15.2499V8.50371L15.864 11.8768L10.0074 15.2499Z"
                                 fill="#151718"
                              />
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </footer>
      </main>
   );
}
