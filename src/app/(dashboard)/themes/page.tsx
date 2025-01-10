"use client"
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Theme } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import AddThemeModal from './_components/theme/addThemeModal';

async function getThemes() {
    const { themes } = await fetch('/api/themes').then((res) => res.json())
    return themes as Theme[]
}


export default function ThemesList() {
    const { data: themes } = useQuery({ queryKey: ['themes'], queryFn: getThemes })
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Temas</h2>
                    <p className="text-muted-foreground">
                        Gerencie os temas aqui.
                    </p>
                </div>
                <AddThemeModal />

            </div>

            <div className="grid gap-5 md:grid-cols-4 lg:grid-cols-5">
                {themes?.map((theme) => (
                    <Card key={theme.id} className='p-0 text-center'>
                        <CardHeader>
                            <CardTitle>{theme.label}</CardTitle>
                            <CardDescription>{theme.description}</CardDescription>
                        </CardHeader>
                        <CardContent className='flex justify-center'>
                            {theme.photoUrl &&
                                <img src={theme.photoUrl} alt={theme.label} className='max-h-32' />
                            }
                        </CardContent>
                        <CardFooter className='w-full justify-center'>
                            <Link href={`/themes/${theme.id}`}>
                                <Button>
                                    Visualizar
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
