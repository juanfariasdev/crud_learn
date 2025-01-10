"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const themeSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    description: z.string().min(1, "A descrição é obrigatória."),
    icon: z.any().optional(),
});

type ThemeFormValues = z.infer<typeof themeSchema>;

export default function AddThemeModal({
    onSave,
    handleCloseModal,
}: {
    handleCloseModal?: () => void;
    onSave?: (data: ThemeFormValues) => void;
}) {
    const [savedData, setSavedData] = useState<ThemeFormValues | null>(null);

    const form = useForm<ThemeFormValues>({
        resolver: zodResolver(themeSchema),
        defaultValues: savedData || { name: "", description: "", icon: null },
    });

    const onSubmit: SubmitHandler<ThemeFormValues> = (data) => {
        if (onSave) onSave(data);
        setSavedData(null);
        form.reset();
    };

    return (
        <Form {...form}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default">Adicionar tema</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Cadastrar tema</DialogTitle>
                        <DialogDescription>Cadastre o tema do projeto!</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                placeholder="Digite o nome do tema"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Este é o nome do tema.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="icon"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ícone</FormLabel>
                                        <FormControl>
                                            <Input id="icon" type="file" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Descrição</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                id="description"
                                                placeholder="Digite a descrição do tema"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Descreva o tema do projeto.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Salvar</Button>
                            <DialogClose asChild>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSavedData(null);
                                        form.reset();
                                        if (handleCloseModal) handleCloseModal();
                                    }}
                                >
                                    Cancelar
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    );
}