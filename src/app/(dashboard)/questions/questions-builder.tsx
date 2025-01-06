"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    closestCenter,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext, useSortable, verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface Question {
    id: string;
    text: string;
    theme: string;
}

const initialQuestions: Question[] = [
    {
        id: '1',
        text: 'What is the capital of France?',
        theme: 'Geography',
    },
    {
        id: '2',
        text: 'Solve for x: 2x + 5 = 15',
        theme: 'Mathematics',
    },
    {
        id: '3',
        text: 'What is the speed of light?',
        theme: 'Physics',
    },
    {
        id: '4',
        text: 'Who painted the Mona Lisa?',
        theme: 'Art',
    },
];

function SortableItem(props: { id: string; question: Question }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card className="cursor-grab">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {props.question.text}
                    </CardTitle>
                    <Badge>{props.question.theme}</Badge>
                </CardHeader>
            </Card>
        </div>
    );
}

function QuestionsBuilder() {
    const [questions, setQuestions] = useState(initialQuestions);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: (event, { active, currentCoordinates }) => {
                switch (event.code) {
                    case 'ArrowRight':
                        return { ...currentCoordinates, x: currentCoordinates.x + 25 };
                    case 'ArrowLeft':
                        return { ...currentCoordinates, x: currentCoordinates.x - 25 };
                    case 'ArrowDown':
                        return { ...currentCoordinates, y: currentCoordinates.y + 25 };
                    case 'ArrowUp':
                        return { ...currentCoordinates, y: currentCoordinates.y - 25 };
                    default:
                        return currentCoordinates;
                }
            },
        })
    );

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setQuestions((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Assemble Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Drag and drop questions to build your test.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Question
                </Button>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={questions.map((q) => q.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-2">
                        {questions.map((question) => (
                            <SortableItem
                                key={question.id}
                                id={question.id}
                                question={question}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}

export { QuestionsBuilder };

