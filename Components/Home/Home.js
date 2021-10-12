import Image from "next/image";
import { FaFacebookF, FaApple, FaGooglePlay } from "react-icons/fa"
import {
    Container,
    ImageContainer,
    FormContainer,
    Form,
    Logo,
    InputContainer,
    InputLabel,
    Input,
    LoginButton,
    SpanTag,
    FormOptions,
    FacebookLink,
    ResetLink,
    SignupContainer,
    SignupText,
    SignupButton,
    GetAppContainer,
    ButtonsContainer,
    DownloadButton,
} from "./styledHome";

export const Home = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="/home.jpg" width="500" height="700" objectFit="contain" />
            </ImageContainer>

            <FormContainer>
                <Form>
                    <Logo>
                        <Image src="/logo.png" width="200" height="100" objectFit="contain" />
                    </Logo>
                    <InputContainer>
                        <Input type="text" required />
                        <InputLabel><span>Phone number, username, or email</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" required />
                        <InputLabel><span>Password</span></InputLabel>
                    </InputContainer>
                    <LoginButton>Log In</LoginButton>

                    <SpanTag>OR</SpanTag>

                    <FormOptions>
                        <FacebookLink>
                            <FaFacebookF />
                            Log in with Facebook
                        </FacebookLink>
                        <ResetLink>Forgot password?</ResetLink>
                    </FormOptions>
                </Form>

                <SignupContainer>
                    <SignupText>Don't have an account?</SignupText>
                    <SignupButton>Sign Up</SignupButton>
                </SignupContainer>

                <GetAppContainer>
                    <p>Get the app.</p>
                    <ButtonsContainer>
                        <DownloadButton>
                            <FaApple />
                            <p><span>Download on the</span><br /> App Store</p>
                        </DownloadButton>
                        <DownloadButton>
                            <FaGooglePlay />
                            <p><span>GET IT ON</span><br /> Google Play</p>
                        </DownloadButton>
                    </ButtonsContainer>
                </GetAppContainer>
            </FormContainer>
        </Container>
    );
};