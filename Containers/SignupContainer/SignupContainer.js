import NextLink from "next/link";
import Image from "next/image";
import { FaFacebookF, FaApple, FaGooglePlay } from "react-icons/fa";
import { useRef, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { HeadTag } from "../../Global";
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
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        };

        try {
            setError("");
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to Create an account");
        };

        setLoading(false);
    };

    return (
        <Container>
            <HeadTag title="Instagram | Signup" />
            <FormContainer>
                <Form onSubmit={handleSubmit}>
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
                    {error && <p>{error}</p>}
                    {/* <InputContainer>
                        <Input type="text" required />
                        <InputLabel><span>Full Name</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input type="text" required />
                        <InputLabel><span>Username</span></InputLabel>
                    </InputContainer> */}
                    <InputContainer>
                        <Input
                            type="email"
                            required
                            ref={emailRef}
                        />
                        <InputLabel><span>Email</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input
                            type="password"
                            required
                            ref={passwordRef}
                        />
                        <InputLabel><span>Password</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <Input
                            type="password"
                            required
                            ref={passwordConfirmRef}
                        />
                        <InputLabel><span>Confirm Password</span></InputLabel>
                    </InputContainer>
                    <SignupButton disabled={loading} type="submit">Sign up</SignupButton>
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