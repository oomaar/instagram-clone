import Route, { useRouter } from "next/router";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useAuth();
    const router = useRouter();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : router.push("/login")
            }}>
        </Route>
    );
};

export default PrivateRoute;