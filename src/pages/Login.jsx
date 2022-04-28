import styled from "styled-components"
import loginregister from "../images/loginregister.jpg"
import { Button, CenterDiv, Input, InputContainer, LeftDiv, P, SpaceAroundDiv, SpaceBetweenDiv } from "../styles"
import logo from "../images/logo.png"

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
`
const ImageContainer = styled.div`
  height: 100%;
  width: 1350px;
  background-image: url(${loginregister}) ;
`
const Image = styled.img`
  position: relative;
`
const Logo = styled.img`
  height: 110px;
`
const Headline = styled.div`
    
`
const Wordmark = styled.h1`
    margin: 0;
    padding: 0;
    color: white;
    font-size: 35px;
    letter-spacing: 1px;
    font-weight: 100;
    
    text-transform: uppercase;
`
const SubWordmark = styled.h1`
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 100;
`
const LoginContainer = styled.div`
  width: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.div`
  margin-top: 50px;
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
   
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 300px;

`
const WelcomeContainer = styled.div`
  
`
const Welcome = styled.h1`
    color: #1E508B;
    font-size: 40px;
    font-weight: 100;
`
const GoogleButton = styled.button`
    width: 300px;
    padding: 10px;
    height: 45px;
    background-color: transparent;
    color: #f14444;
    cursor: pointer;
    border: solid 1px red;
    border-radius: 5px;
    &:hover,&:focus{
        background-color: #f14444;
        outline: none;
        color: white;
    }
`
 
const Login = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <LogoContainer>
          <Logo src={logo}/>
          <Headline>
              <Wordmark>EXPERT GUIDES TUTORIAL SERVICES</Wordmark>
              <SubWordmark>College Entrance Exam Review</SubWordmark>
          </Headline>
        </LogoContainer>
      </ImageContainer>
      <LoginContainer>
        <Form>
          <WelcomeContainer>
            <Welcome>Welcome!</Welcome>
            <P>Doesn’t have an account yet? <span  style={{color: "#1E508B", cursor: "pointer"}}>SIGN UP</span></P>
          </WelcomeContainer>
          <FormContainer>
            <P>Username</P>
            <InputContainer style={{marginBottom: "20px"}}><Input></Input></InputContainer>
            <SpaceBetweenDiv> <P>Password</P> <P style={{color: "#1E508B", cursor: "pointer"}}>Forgot password?</P></SpaceBetweenDiv>
            <InputContainer style={{marginBottom: "20px"}}><Input></Input></InputContainer>
            <Button style={{width: "300px"}}>Login</Button>
            <CenterDiv><P style={{margin: "20px 0 20px 0"}}>or login with</P></CenterDiv>
            <GoogleButton style={{width: "300px"}}>Google</GoogleButton>
          </FormContainer>
        </Form>
      </LoginContainer>

            
    </Wrapper>
  )
}

export default Login