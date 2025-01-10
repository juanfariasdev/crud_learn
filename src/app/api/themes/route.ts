import { prisma } from "@/lib/prisma"


export async function GET() {
    const themes = await prisma.theme.findMany({
        include: {
            _count: {
                select: {
                    quizzes: true
                }
            }
        }
    })

    return Response.json({ themes })
}
