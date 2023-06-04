import { Announcement, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function listAnnouncements(filter?: string) {
    const announcements = await prisma.announcement.findMany()

    return announcements;
}

export async function listUsers(filter?: string) {
    const users = await prisma.user.findMany()

    return users;
}

export async function insertAnnouncement(data: Announcement) {
    const announcement = await prisma.announcement.create({
        data: {
            ...data,
            creatorId: "6473f4d5762442cc8ee7bce7",
            main_image: "taycan.png",
            images: ["taycan.png"]
        }
    });

    return announcement;
}

export async function getAnnouncement(id: string) {
    const announcement = await prisma.announcement.findUnique({ where: { id } });

    return announcement;
}
