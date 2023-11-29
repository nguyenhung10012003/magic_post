'use client'


import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import Loader from "../Loader";

const LeaderDash = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="flex h-screen overflow-hidden">
                    {/* <!-- ===== Sidebar Start ===== --> */}
                    <Sidebar
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    {/* <!-- ===== Sidebar End ===== --> */}

                    {/* <!-- ===== Content Area Start ===== --> */}
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        {/* <!-- ===== Header Start ===== --> */}
                        <Header
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        />
                        {/* <!-- ===== Header End ===== --> */}

                        {/* <!-- ===== Main Content Start ===== --> */}
                        <main>
                        <div className="p-10 h-screen bg-gray-100">
                            <Content></Content>
                        </div>
                        </main>
                        {/* <!-- ===== Main Content End ===== --> */}
                    </div>
                    {/* <!-- ===== Content Area End ===== --> */}
                    </div>
                )}
                </div>
            </body>
        </html>
  );
    
}

export default LeaderDash;