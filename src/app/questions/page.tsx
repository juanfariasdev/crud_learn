import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { QuestionsBuilder } from './questions-builder';

export default function QuestionsList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your test questions here.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Question
                </Button>
            </div>

            <QuestionsBuilder />
        </div>
    );
}

