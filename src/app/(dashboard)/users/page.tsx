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
import { Mail, Plus, Shield } from 'lucide-react';

export default function UsersList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Users</h2>
                    <p className="text-muted-foreground">
                        Manage system users and their roles.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add User
                </Button>
            </div>

            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                        <Shield className="h-4 w-4" />
                                    </div>
                                    John Doe
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                    john@example.com
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary">Admin</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary">Active</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                        <Shield className="h-4 w-4" />
                                    </div>
                                    Jane Smith
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                    jane@example.com
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge>Editor</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary">Active</Badge>
                            </TableCell>
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
