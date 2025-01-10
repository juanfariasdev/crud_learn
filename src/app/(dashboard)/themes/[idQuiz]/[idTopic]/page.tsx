
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { QuestionsBuilder } from './questions-builder';

export default function QuestionsList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Tópico sobre "xxxx"
                    </h2>
                    <p className="text-muted-foreground">
                        Gerencie as questões aqui
                    </p>
                </div>
                <Button variant="outline">
                    <Pencil className="mr-2 h-4 w-4" /> Editar tópico
                </Button>
            </div>

            <QuestionsBuilder />
        </div >
    );
}

