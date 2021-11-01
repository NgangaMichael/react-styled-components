import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import {Button} from './styles/Button.styled'
import {Flex} from './styles/Flex.styled'

export default function Header() {
    return (
        // passing in props on styled componets 
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='' />
                    <Button>Try it Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Lorem Ipsum is simply dummy text release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt='' />

                </Flex>
            </Container>
        </StyledHeader>
    )
}