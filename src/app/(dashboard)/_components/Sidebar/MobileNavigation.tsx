import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { View } from '@/types/menu';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { SidebarContent } from './SidebarContent';

export function MobileNavigation() {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState<View>('themes');


    return (
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-card px-4 py-4 border-b md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                    <SidebarContent

                    />
                </SheetContent>
            </Sheet>
            <div className="flex-1">
                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
        </div>
    );
}
