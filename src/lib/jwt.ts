// get username from token
export function getToken(token: string): string | null {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.sub || null;
    } catch {
        return null;
    }
}