'use client';
import {usePathname} from 'next/navigation';
import React, {useState} from 'react';
import {routes} from '@/routes';
import {getActiveNavbar, getActiveRoute,} from '@/utils/navigation';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/Footer';
import Navbar from "@/components/navbar";
import withAuth from "@/hook/withAuth";

const DashboardLayout = ({children, user}: { children: React.ReactNode, user: any }) => {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex h-full w-full bg-backDropColor">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" user={user}/>
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
            <div className="mx-auto min-h-screen p-2 !pt-[55px] md:p-2">
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

export default withAuth(DashboardLayout);
