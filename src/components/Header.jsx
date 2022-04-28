import styled from "styled-components"
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"
import { CenterDiv, Container, SpaceBetweenDiv } from "../styles"

const Wrapper = styled.div`
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0;
`
const Logo = styled.img`
    height: 75px;
    padding: 0;
    margin: 0;
`
const UserContainer = styled.div`
    height: 80px;
    width: 250px;
    background-color: #1E508B;
    display: flex;
    justify-content: center;
`
const Headline = styled.div`
    
`
const Wordmark = styled.h1`
    margin: 0;
    padding: 0;
    color: #1E508B;
    font-size: 30px;
    letter-spacing: 1px;
    font-weight: 50;
    text-transform: uppercase;
`
const SubWordmark = styled.h1`
    color: #646464;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 100;
`
const Logout = styled.h1`
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 100;
    margin-right: 10px;
`
const Avatar = styled.img`
    height: 40px;
`
const Header = () => {
  return (
    <Wrapper>
        <SpaceBetweenDiv style={{marginLeft: "50px"}}>
            <CenterDiv>
                <Logo src={logo}/>
                <Headline>
                    <Wordmark>EXPERT GUIDES TUTORIAL SERVICES</Wordmark>
                    <SubWordmark>College Entrance Exam Review</SubWordmark>
                </Headline>
            </CenterDiv>
            <UserContainer>
               
                <CenterDiv>
                    <Logout>Logout</Logout>
                    <Avatar src={avatar}/>
                </CenterDiv>
             
               
            </UserContainer>
        </SpaceBetweenDiv>
    </Wrapper>
  )
}

export default Header