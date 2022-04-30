import styled from "styled-components"
import Header from "../components/Header"
import Question from "../components/Question"
import LoadingData from "../components/LoadingData"
import image from "../images/image.jpg"


const Wrapper = styled.div`
    height: 100vh;
`
const TakeExam = () => {
  return (
    <Wrapper>
        <Header/>

         {/* USE this component if data is successfully loaded*/}
        
        <Question 
            direction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum"
            subjecttitle = "Algebra"
            duration = "75"
            itemNumber = "5"
            image={image}
            answer="Lorem Ipsum is s"
        />
        {/* USE this component to download questions from cloud */}
        {/* <LoadingData 
            direction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum"
            subjecttitle = "Algebra"
            duration = "75"
            downloadStatus = "DOWNLOADING"
        /> */}
    </Wrapper>
  )
}

export default TakeExam