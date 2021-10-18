import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../Context/AuthContext";
import PrivateRoute from "../Context/PrivateRoute";
import { Layout } from "../Global";
import { lightTheme } from "../Global/GlobalStyle";

const App = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <ThemeProvider theme={lightTheme}>
                <Layout>
                    <PrivateRoute>
                        <Component {...pageProps} />
                    </PrivateRoute>
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;