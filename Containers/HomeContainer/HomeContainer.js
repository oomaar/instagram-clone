import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { HeadTag } from "../../Global";

export const HomeContainer = () => {
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        !currentUser && router.push("/login");
    }, []);

    return (
        <div>
            <HeadTag title="instagram" />

            <h1>private home screen</h1>
        </div>
    );
};