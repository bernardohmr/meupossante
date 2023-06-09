import { Announcement, PrismaClient, User } from '@prisma/client'

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
            creatorId: "6483510759613b5bc6b8a59b",
            main_image: "taycan.png",
            images: ["taycan.png"]
        }
    });

    return announcement;
}

export async function insertUser(data: User) {
    const user = await prisma.user.create({ data });

    return user;
}

export async function getAnnouncement(id: string) {
    const announcement = await prisma.announcement.findUnique({ where: { id } });

    return announcement;
}

export async function getUser(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
}

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
}

export async function getUserByToken(token: string) {
    const user = await prisma.user.findUnique({ where: { currentToken: token } });

    return user;
}
