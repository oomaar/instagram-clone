import { ThemeProvider } from "styled-components";
import { Layout } from "../Global";
import { lightTheme } from "../Global/GlobalStyle";

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;