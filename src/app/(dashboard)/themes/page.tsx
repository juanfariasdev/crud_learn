import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Plus } from 'lucide-react';

export default function ThemesList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Themes</h2>
                    <p className="text-muted-foreground">
                        Manage your educational themes here.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Theme
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Example Theme Cards */}
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
