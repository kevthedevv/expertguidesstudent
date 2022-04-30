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
            <TestType source={IconDiagnostic} title="diagnostic test" itemscount="20 items" status="Status: Completed"/>
            <TestType source={IconMastery} title="mastery test" itemscount="30 items" status="Status: In Progress | 3/10"/>
            <TestType source={IconSpeed} title="speed test" itemscount="45 items" status="Status: Locked"/>
            <TestType source={IconMock} title="mock exam" itemscount="70 items" status="Status: Locked"/>
        </CenterDiv>
    </Wrapper>
  )
}


export default Main