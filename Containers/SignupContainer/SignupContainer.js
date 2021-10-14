import NextLink from "next/link";
import Image from "next/image";
import { FaFacebookF, FaApple, FaGooglePlay } from "react-icons/fa";
import {
    Container,
    FormContainer,
    Form,
    Logo,
    InputContainer,
    InputLabel,
    Input,
    SignupButton,
    SignupText,
    SpanTag,
    FormOptions,
    FacebookLink,
    SignContainer,
    GetAppContainer,
    ButtonsContainer,
    DownloadButton,
} from "./styledSignupContainer";

export const SignupContainer = () => {
    return (
        <Container>
            <FormContainer>
                <Form>
                    <Logo>
                        <Image src="/logo.png" width="200" height="100" objectFit="contain" />
                    </Logo>

                    <FormOptions>
                        <FacebookLink>
                            <FaFacebookF />
                            Log in with Facebook
                        </FacebookLink>
                    </FormOptions>
                    <SpanTag>OR</SpanTag>

                    <InputContainer>
                        <Input type="text" required />
                        <InputLabel><span>Mobile Number</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input type="text" required />
                        <InputLabel><span>Full Name</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input type="text" required />
                        <InputLabel><span>Username</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" required />
                        <InputLabel><span>Password</span></InputLabel>
                    </InputContainer>
                    <SignupButton>Sign up</SignupButton>
                    <SignupText>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</SignupText>
                </Form>

                <SignContainer>
                    <p>Have an account?</p>
                    <NextLink href="/">Log In</NextLink>
                </SignContainer>

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