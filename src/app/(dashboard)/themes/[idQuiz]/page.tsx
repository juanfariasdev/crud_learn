"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function TestsList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Quizzes</h2>
                    <p className="text-muted-foreground">
                        Create and manage your tests here.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Test
                </Button>
            </div>

            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Theme</TableHead>
                            <TableHead>Questions</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                Algebra Basics
                            </TableCell>
                            <TableCell>Mathematics</TableCell>
                            <TableCell>15</TableCell>
                            <TableCell>
                                <Badge>Published</Badge>
                            </TableCell>
                            <TableCell>2 days ago</TableCell>
                            <TableCell className="text-right">
                                <Link href="/themes/1/1">
                                    <Button variant="ghost" size="sm">
                                        Edit
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Newton's Laws
                            </TableCell>
                            <TableCell>Physics</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>
                                <Badge variant="secondary">Draft</Badge>
                            </TableCell>
                            <TableCell>5 days ago</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
