"use client"


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function addThemes({ onCancel, onSave }: { onCancel: () => void, onSave: () => void }) {
    return (
        <div>

            <h3 className="text-2xl font-bold mb-4">Cadastro de Tema</h3>

            <div className="space-y-4">
                <div className="flex gap-2 flex-col lg:flex-row">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <Input type="text" placeholder="Digite o nome do tema" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                            Icone
                        </label>
                        <Input type="file" />
                    </div>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Descrição
                    </label>
                    <Textarea placeholder="Digite a descrição do tema" />
                </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button>Salvar</Button>
            </div>
        </div>

    );
}
