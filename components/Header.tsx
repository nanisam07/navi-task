'use client';

import TopBar from './TopBar';
import { NavbarMenu } from "@/components/ui/Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <NavbarMenu />
    </header>
  );
}
