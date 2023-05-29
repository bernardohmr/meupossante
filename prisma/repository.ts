import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function listAnnouncements(filter?: string) {
    const announcements = await prisma.announcement.findMany()

    return announcements;
}
