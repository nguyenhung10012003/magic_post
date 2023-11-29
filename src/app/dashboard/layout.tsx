'use client';
// Layout components
import {usePathname} from 'next/navigation';
import React, {useState} from 'react';
import {routes} from '@/routes';
import {getActiveNavbar, getActiveRoute,} from '@/utils/navigation';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/Footer';
import Navbar from "@/components/navbar";

export default function Admin({children}: { children: React.ReactNode }) {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex h-full w-full bg-background-100">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin"/>
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm">
        {/* Main Content */}
        <main
          className={`mx-2.5  flex-none transition-all 
              md:pr-2 xl:ml-[323px]`}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3">
              <Footer/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
