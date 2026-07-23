import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Briefrail — Creative work, cleared to move",description:"Briefs, approvals, tracked time, and invoice-ready work on one accountable rail."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
