import styled from "styled-components"
import { Button, CenterDiv, LeftDiv, P, RightDiv, SpaceBetweenDiv } from "../styles"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Wrapper = styled.div`
    height: 80vh;
    width: 1200px;
    margin: auto;
`
const Container = styled.div`
    width: 1200px;
    min-height: 800px;
    height: auto;
    margin-top: 10px;
    padding: 40px;
    box-shadow: 0px 2px 8px #bebebe;
    border-radius: 10px;
`
const SubjectTitle = styled.div`
    width: 400px;
    height: 40px;
    background-color: #1E508B;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`
const DirectionContainer = styled.div`
    width: 1000px;
    height: auto;
    overflow-wrap: break-word;
`
const ImageContainer = styled.div`

`
const Image = styled.img`
    
`
const RadioAnswer = styled.input`
    margin-right: 20px;
`
const AnswerContainer = styled.div`
    max-width: 100%;
    overflow-wrap: break-word;
`
const Answer = styled.div`
    height: auto;
    min-height: 100px;
    box-shadow: 0px 2px 8px #e4e4e4;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 20px;

`
const PaginationArea = styled.div`
    margin-top: 20px;
`

const Question = ({duration, direction, subjecttitle, itemNumber, image, answer}) => {
  return (
    <Wrapper>
        <SubjectTitle>You are taking {subjecttitle}</SubjectTitle>
        <CenterDiv>
            <Container>
                <CenterDiv>
                    <FlexColumn>
                    <SpaceBetweenDiv style={{marginBottom: "50px"}}>
                        <P style={{fontWeight: "bold"}}>Item #: {itemNumber}</P>     
                        <P style={{fontWeight: "bold"}}>DURATION: {duration}mins</P>
                    </SpaceBetweenDiv>    
                 
                    <DirectionContainer>
                        <P style={{fontWeight: "bold"}}>
                            DIRECTION :
                        </P>    
                        <P>
                            {direction}
                        </P>
                    </DirectionContainer>
                    <CenterDiv>
                        <ImageContainer>
                            <Image src={image}/>
                        </ImageContainer>
                    </CenterDiv>
                    <AnswerContainer>
                    <P style={{fontWeight: "bold", marginBottom: "20px"}}>ANSWERS:</P>     
                        <FlexColumn>
                            <Answer style={{marginBottom: "10px"}}><RadioAnswer type="radio" value="name" name="name"/>{answer}</Answer>
                            <Answer style={{marginBottom: "10px"}}><RadioAnswer type="radio" value="name" name="name"/>{answer}</Answer>
                            <Answer style={{marginBottom: "10px"}}><RadioAnswer type="radio" value="name" name="name"/>{answer}</Answer>
                            <Answer style={{marginBottom: "10px"}}><RadioAnswer type="radio" value="name" name="name"/>{answer}</Answer>
                        </FlexColumn>
                    </AnswerContainer>
                    <PaginationArea>
                        <SpaceBetweenDiv>
                            <Stack spacing={2}>
                                <Pagination count={10} color="primary" />
                            </Stack>
                            <Button>Confirm and Next</Button>
                        </SpaceBetweenDiv>
                    </PaginationArea>
                    </FlexColumn>
                </CenterDiv>
            </Container>
        </CenterDiv>
    </Wrapper>
  )
}


export default Question