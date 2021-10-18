import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { HeadTag } from "../../Global";

export const HomeContainer = () => {
    const { currentUser, logout } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");

    // useEffect(() => {
    //     !currentUser && router.push("/login");
    // }, []);

    const handleLogout = async () => {
        setError('');

        try {
            await logout();
            router.push("/login");
        } catch {
            setError("Failed to logout");
        };
    };

    return (
        <div>
            <HeadTag title="instagram" />
            {error && <div>{error}</div>}
            <strong>Email: {currentUser.email}</strong>

            <h1>private home screen</h1>
            <button onClick={handleLogout}>log out</button>
            <a href="/update-profile">update</a>
        </div>
    );
};