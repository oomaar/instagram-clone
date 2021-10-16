import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../Context/AuthContext";
import { Layout } from "../Global";
import { lightTheme } from "../Global/GlobalStyle";

const App = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <ThemeProvider theme={lightTheme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;