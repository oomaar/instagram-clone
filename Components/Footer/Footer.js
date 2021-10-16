import {
    FooterContainer,
    LinksContainer,
    UpperLinks,
    LowerLinks,
    Copy,
    Link,
} from "./styledFooter";

export const Footer = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <UpperLinks>
                    <Link>About</Link>
                    <Link>Blog</Link>
                    <Link>Jobs</Link>
                    <Link>Help</Link>
                    <Link>API</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                    <Link>Top Accounts</Link>
                    <Link>Hashtags</Link>
                    <Link>Locations</Link>
                    <Link>Instagram Lite</Link>
                </UpperLinks>
                <LowerLinks>
                    <Link>Beauty</Link>
                    <Link>Dance</Link>
                    <Link>Fitness</Link>
                    <Link>Food & Drink</Link>
                    <Link>Home & Garden</Link>
                    <Link>Music</Link>
                    <Link>Visual Arts</Link>
                </LowerLinks>
            </LinksContainer>

            <Copy>
                <h6>© 2021 Instagram clone by <span>Omar Hassan</span></h6>
            </Copy>
        </FooterContainer>
    );
};