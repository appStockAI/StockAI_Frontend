import { getToken } from "@/lib/jwt";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/router";

export default function BalancePage() {
    const [username, setUsername] = useState<string | null>(null);
    const [balance, setBalance] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const router = useRouter();

    const fetchBalance = async (username: string) => {
        try {
            const res = await api.get("/api/balance", { params: { username } });
            setBalance(res.data);
        } catch (error) {
            alert("잔고 조회 실패");
        }
    };

    const handleAdd = async () => {
        if (!username || amount < 0) return;
        await api.post("/api/balance/add", null, {
            params: { username, amount }
        });
        fetchBalance(username);
    }

    const handleSubtract = async () => {
        if (!username || amount < 0) return;
        await api.post("/api/balance/subtract", null, {
            params: { username, amount }
        });
        fetchBalance(username);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("로그인이 필요합니다");
            router.push("/login");
            return;
        }

        const extracted = getToken(token);
        if (!extracted) {
            alert("토큰이 유효하지 않습니다");
            router.push("/login");
            return;
        }

        setUsername(extracted);
        fetchBalance(extracted);
    }, []);

    return (
        <div>
            <h1>{username}님의 자산: {balance.toLocaleString()}원</h1>

            <input
                type="number"
                placeholder="금액 입력"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ margin: '8px 0', padding: '4px' }}
            />

            <div>
                <button onClick={handleAdd}>입금</button>
                <button onClick={handleSubtract}>출금</button>
            </div>
        </div>
    );
}