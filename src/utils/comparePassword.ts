import bcrypt from 'bcrypt';

export async function comparePassword(password: string, hashedPassword: string) {
    const isValid = await bcrypt.compare(password, hashedPassword);

    return { isValid }
}
