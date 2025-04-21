import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/router';
import api from '@/lib/api';
import { LoginRequest } from "@/types";

export default function LoginPage() {
    const [form, setForm] = useState<LoginRequest>({ login: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const res = await api.post("/api/users/login", form);
            localStorage.setItem('token', res.data); // JMT 저장
            router.push("/balance");
        } catch (e: any) {
            alert(e.response?.data || '로그인 실패');
        }
    };

    return (
        <div>
            <h1>로그인</h1>
            <input name="login" placeholder="ID or Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button onClick={handleLogin}>로그인</button>
        </div>
    )
}