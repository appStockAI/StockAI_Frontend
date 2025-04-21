// dto.user
export interface LoginRequest {
    login: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

// dto.balance
export interface BalanceResponse {
    amount: number;
}
