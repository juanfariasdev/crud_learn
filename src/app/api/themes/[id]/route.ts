import { prisma } from "@/lib/prisma"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id =
        params.id

    const quizzes = await prisma.quiz.findMany({
        where: {
            themeId: id
        }
    })


    return Response.json({ quizzes })
}
