import styled from "styled-components"
import IconDiagnostic from "../images/diagnostic.png"
import IconMastery from "../images/mastery.png"
import IconMock from "../images/mock.png"
import IconSpeed from "../images/speed.png"
import TestType from "../components/TestType"
import { CenterDiv } from "../styles"
import Header from "../components/Header"
import Subject from "../components/Subject"

const Wrapper = styled.div`
    height: 100vh;
`
const SubjectList = ({pagetitle}) => {
  return (
    <Wrapper>
        <Header/>
        <Subject pagetitle={pagetitle} />
    </Wrapper>
  )
}

export default SubjectList