'use client';

import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/navigation';
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

    const goToRegister = () => {
        router.push("/register");
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <button onClick={goToRegister}>회원가입</button>
            </Box>
            <Typography variant="h4" gutterBottom>로그인</Typography>
            <Box display="flex" flexDirection="column" gap={2}>
                <TextField name="login" label="아이디 또는 이메일" fullWidth onChange={handleChange} />
                <TextField name="password" label="비밀번호" type="password" fullWidth onChange={handleChange} />
                <Button variant="contained" onClick={handleLogin}>로그인</Button>
            </Box>
        </Container>
    );
}