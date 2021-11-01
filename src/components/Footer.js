import SocialIcons from './SocialIcons'
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt='' />
                <Flex>
                    <ul>
                        <li>There are many variations of passages of by injected humour, or randomised words which don't look even slightly believable.</li>
                        <li>+65875572</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What we Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Carrer</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
