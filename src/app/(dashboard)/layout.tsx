
"use client"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MobileNavigation } from "./_components/Sidebar/MobileNavigation";
import { SidebarContent } from "./_components/Sidebar/SidebarContent";


const queryClient = new QueryClient()

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        {/* Desktop Sidebar */}
        <div className="hidden md:fixed md:inset-y-0 md:left-0 md:z-50 md:w-64 md:block md:bg-card md:border-r">
          <SidebarContent />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation />

        {/* Main Content */}
        <div className="p-10 md:pl-72">
          <div className="max-w-7xl mx-auto">
            {children}

          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
