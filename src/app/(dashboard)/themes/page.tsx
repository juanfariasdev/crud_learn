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
import Link from 'next/link';
import AddThemeModal from './_components/theme/addThemeModal';

export default function ThemesList() {

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Temas</h2>
                    <p className="text-muted-foreground">
                        Gerencie os temas aqui.
                    </p>
                </div>
                <AddThemeModal />

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Mathematics</CardTitle>
                        <CardDescription>
                            Basic and advanced mathematical concepts
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            12 tests • Last updated 2 days ago
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/themes/1">
                            <Button
                            >
                                Visualizar
                            </Button>
                        </Link>
                    </CardFooter>

                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Physics</CardTitle>
                        <CardDescription>
                            Fundamental physics principles and theories
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            8 tests • Last updated 5 days ago
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
