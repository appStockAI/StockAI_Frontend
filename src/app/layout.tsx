export const metadata = {
    title: "App",
    description: "TEST"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                {children}
            </body>
        </html>
    );
}