import styled from "styled-components"
import Header from "../components/Header"
import SubSubject from "../components/SubSubject"

const Wrapper = styled.div`
    height: 100vh;
`
const SubjectList = ({}) => {
  return (
    <Wrapper>
        <Header/>
        <SubSubject 
          pageTitle="Math"
          subsubject="Math Subjects here"
          duration="50"
          status="in progress"
          items="50"
          />
    </Wrapper>
  )
}

export default SubjectList