
"use client"

import { MobileNavigation } from "./_components/Sidebar/MobileNavigation";
import { SidebarContent } from "./_components/Sidebar/SidebarContent";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:left-0 md:z-50 md:w-64 md:block md:bg-card md:border-r">
        <SidebarContent />
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />

      {/* Main Content */}
      <div className="md:pl-64">
        {children}
      </div>
    </div>

  );
}
