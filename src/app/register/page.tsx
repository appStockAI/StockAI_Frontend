import api from "@/lib/api"
import { RegisterRequest } from "@/types";
import { useState } from "react";
import { useRouter } from "next/router";

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
        <div>
            <h1>회원가입</h1>
            <input name="username" placeholder="아이디" onChange={handleChange} />
            <input name="email" placeholder="이메일" onChange={handleChange} />
            <input name="password" placeholder="비밀번호" type="password" onChange={handleChange} />
            <button onClick={handleSubmit}>가입하기</button>
        </div>
    )
}