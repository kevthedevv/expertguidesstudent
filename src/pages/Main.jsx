import styled from "styled-components"
import cardImage from "../images/card.jpg"
import IconDiagnostic from "../images/diagnostic.png"
import IconMastery from "../images/mastery.png"
import IconMock from "../images/mock.png"
import IconSpeed from "../images/speed.png"
import TestType from "../components/TestType"
import { CenterDiv } from "../styles"
import Header from "../components/Header"

const Wrapper = styled.div`
    height: 100vh;
    
`
const Main = () => {
  return (
    <Wrapper>
        <Header/>
        <CenterDiv style={{marginTop: "200px"}}>
            <TestType source={IconDiagnostic} title="diagnostic test" itemscount="20 items"/>
            <TestType source={IconMastery} title="mastery test" itemscount="30 items"/>
            <TestType source={IconSpeed} title="speed test" itemscount="45 items"/>
            <TestType source={IconMock} title="mock exam" itemscount="70 items"/>
        </CenterDiv>
    </Wrapper>
  )
}

export default Main