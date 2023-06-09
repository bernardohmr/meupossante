import bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);

    return hash;
}
