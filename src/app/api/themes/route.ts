import { prisma } from "../../../lib/prisma"


export async function GET() {
    const themes = await prisma.theme.findMany()

    return Response.json({ themes })
}
