import styled from "styled-components"
import { Button, CenterDiv, P, RightDiv } from "../styles"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Wrapper = styled.div`
    height: 80vh;
    width: 1200px;
    margin: auto;
`
const Container = styled.div`
    width: 1200px;
    height: 900px;
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

const LoadingData = ({duration, direction, subjecttitle, downloadStatus}) => {
  return (
    <Wrapper>
        <SubjectTitle>You are taking {subjecttitle}</SubjectTitle>
        <CenterDiv>
            <Container>
                <CenterDiv>
                    <FlexColumn>
                    <P style={{fontWeight: "bold", marginBottom: "50px"}}>DURATION: {duration}mins</P>
                    <DirectionContainer>
                        <P style={{fontWeight: "bold"}}>
                            DIRECTION :
                        </P>    
                        <P>
                            {direction}
                        </P>
                    </DirectionContainer>
                    <CenterDiv>
                        <FlexColumn>
                            <P style={{paddingTop: "100px"}}>{downloadStatus}</P>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress />
                            </Box>
                            <Button style={{marginTop: "50px"}}>
                            Start Exam
                            </Button>
                        </FlexColumn>
                    </CenterDiv>
                    <RightDiv>
                    </RightDiv>
                    </FlexColumn>
                </CenterDiv>
            </Container>
        </CenterDiv>
    </Wrapper>
  )
}


export default LoadingData