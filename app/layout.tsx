import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const HelveticaNeue = localFont({
   src: [
      {
         path: "../public/fonts/helvetica-neue.ttf",
         weight: "400",
      },
      {
         path: "../public/fonts/helvetica-neue-md.ttf",
         weight: "500",
      },
      {
         path: "../public/fonts/helvetica-neue-bd.ttf",
         weight: "700",
      },
   ],
});



export const metadata: Metadata = {
   title: "technical interview app",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={HelveticaNeue.className + " w-full overflow-hidden"}>
            {children}
         </body>
      </html>
   );
}
