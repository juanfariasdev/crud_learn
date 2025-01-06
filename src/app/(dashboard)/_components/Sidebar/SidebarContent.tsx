import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { menu, View } from '@/types/menu';
import { LogOut, Moon, Sun, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function buttonColor(theme: string, currentView: View, itemView: View) {
    if (theme === 'light') {
        return currentView === itemView ? 'secondary' : 'ghost';
    } else {
        return currentView === itemView ? 'secondary' : 'outline';
    }
}

export function SidebarContent() {
    const { theme, setTheme } = useTheme();
    const [view, setView] = useState<View>('themes');

    return (
        <div className="flex flex-col h-full">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {menu.map((item) => (
                    <Button
                        asChild
                        key={item.value}
                        variant={buttonColor(theme, view, item.value)}
                        className="w-full justify-start"
                        onClick={() => setView(item.value)}
                    >
                        <Link href={`/${item.value}`}>
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.label}
                        </Link>
                    </Button>
                ))}
            </nav>
            <div className="p-4 border-t">
                <div className="flex items-center mb-4">
                    <User className="h-6 w-6 mr-2" />
                    <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">Admin</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="p-0"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? (
                            <Moon className="h-4 w-4 text-black" />
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                    </Button>
                    <Button variant="ghost" size="icon" className="p-0">
                        <LogOut className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
