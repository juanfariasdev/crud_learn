import { BarChart, LayoutDashboard, Library, ScrollText, Users } from 'lucide-react';


export const menu = [
    { label: 'Temas', icon: Library, value: 'themes' },
    { label: 'Quizzes', icon: LayoutDashboard, value: 'quizzes' },
    { label: 'Tópicos', icon: ScrollText, value: 'topics' },
    { label: 'Questões', icon: LayoutDashboard, value: 'questions' },
    { label: 'Usuários', icon: Users, value: 'users' },
    { label: 'Reportes', icon: BarChart, value: 'reports' },
] as const;

export type View = (typeof menu)[number]['value'];


