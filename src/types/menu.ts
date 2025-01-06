import { BarChart, LayoutDashboard, Library, ScrollText, Users } from 'lucide-react';


export const menu = [
    { label: 'Themes', icon: Library, value: 'themes' },
    { label: 'Tests', icon: ScrollText, value: 'tests' },
    { label: 'Questions', icon: LayoutDashboard, value: 'questions' },
    { label: 'Users', icon: Users, value: 'users' },
    { label: 'Reports', icon: BarChart, value: 'reports' },
] as const;

export type View = (typeof menu)[number]['value'];


