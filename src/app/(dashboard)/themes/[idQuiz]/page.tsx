"use client"
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Quiz } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import Link from 'next/link';

async function getQuizzes(idQuiz: string) {
    const { quizzes } = await fetch(`/api/themes/${idQuiz}`).then((res) => res.json())
    return quizzes as Quiz[]
}

export default function TestsList({ params }: { params: { idQuiz: string } }) {
    const { idQuiz } = params
    const { data: quizzes } = useQuery({ queryKey: [`quizzes/${idQuiz}`], queryFn: () => getQuizzes(idQuiz) })

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
                            <TableHead>Icone</TableHead>
                            <TableHead>Titulo</TableHead>
                            <TableHead>Dificuldade</TableHead>
                            <TableHead>Tema</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quizzes?.map((quiz) => (
                            <TableRow key={quiz.id}>
                                <TableCell>
                                    {quiz.photoUrl && <img src={quiz.photoUrl} alt={quiz.label} className="w-8 h-8" />}
                                </TableCell>
                                <TableCell className="font-medium">{quiz.label}</TableCell>
                                <TableCell>{quiz.level}</TableCell>
                                <TableCell>{quiz.themeId}</TableCell>
                                <TableCell className="text-right">
                                    <Link href={`/themes/${idQuiz}/${quiz.id}`}>
                                        <Button variant="ghost" size="sm">
                                            Edit
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
