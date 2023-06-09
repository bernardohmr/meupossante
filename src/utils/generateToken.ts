import bcrypt from 'bcrypt';

export async function generateToken(userId: string) {
    return bcrypt.hash(
        String(Date.now() + userId),
        10
    );
}
