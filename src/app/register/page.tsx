'use client'

import { TextField, Button, Container, Typography, Box } from '@mui/material';
import api from "@/lib/api"
import { RegisterRequest } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [form, setForm] = useState<RegisterRequest>({ username: '', email: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const res = await api.post('/api/users/register', form);
            alert(res.data);
            router.push('/login');
        } catch (e: any) {
            alert(e.response?.data || '회원가입 실패');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>회원가입</Typography>
            <Box display="flex" flexDirection="column" gap={2}>
                <TextField name="username" label="아이디" fullWidth onChange={handleChange} />
                <TextField name="email" label="이메일" type="email" fullWidth onChange={handleChange} />
                <TextField name="password" label="비밀번호" type="password" fullWidth onChange={handleChange} />
                <Button variant="contained" onClick={handleSubmit}>회원가입</Button>
            </Box>
        </Container>
    )
}