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
  margin-top: 20px;
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
  max-width: 320px;

`
const PageTitleContainer = styled.div`
  
`
const PageTitle = styled.h1`
    color: #1E508B;
    font-size: 40px;
    font-weight: 100;
`

 
const Register = () => {
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
          <PageTitleContainer>
            <PageTitle>Register</PageTitle>
          </PageTitleContainer>
          <FormContainer>
            <P>Firstname</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <P>Middlename</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <P>Lastname</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <P>Contact number</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <P>Email address</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <P>School</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <CenterDiv><P style={{margin: "10px 0 10px 0"}}>Login information </P></CenterDiv>
            <P>Username</P>
            <InputContainer style={{marginBottom: "10px"}}><Input></Input></InputContainer>
            <P>Password</P>
            <InputContainer style={{marginBottom: "30px"}}><Input></Input></InputContainer>
            <Button style={{width: "300px"}}>Login</Button>
          </FormContainer>
        </Form>
      </LoginContainer>

            
    </Wrapper>
  )
}

export default Register