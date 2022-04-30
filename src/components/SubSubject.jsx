import React from 'react'
import styled from "styled-components"
import { Button, CenterDiv, LeftDiv, P } from '../styles'

const Wrapper = styled.div`
    height: 80vh;
`

const Container = styled.div`
    margin-top: 10px;
    height: 100%;
    max-height: 760px;
    width: 800px;
    padding: 20px 50px 20px 50px;
    overflow-y: auto;
    overflow-x: hidden;
`

const Card = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 8px #bebebe;
    border-radius: 10px;
    overflow: hidden;
    max-height: 120px;
    height: 120px;
    display: flex;
    margin: 10px 0 10px 0;
`
const CardTitle = styled.div`
    background-color: #1E508B;
    width: 40%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
  
`
const CardDescription = styled.div`
    width: 60%;
    height: 100%;
    color: gray;
`
const CardDescriptionData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 100%;
    padding: 10px 20px 10px 20px;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const PageTitle = styled.div`
    width: 270px;
    height: 40px;
    background-color: #1E508B;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
`
const SetType = styled.div`
    width: 100px;
    height: 40px;
    background-color: #1e8b4f;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    &:hover,&:focus{
        background-color: #61b88d;
        outline: none;
        cursor: pointer;    
    }

`
const SetTypeContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    
`
const SubSubject = ({subsubject, pageTitle, status, items, duration}) => {
  return (
    <Wrapper>
        
        <CenterDiv>
            <FlexColumn>
            <LeftDiv>
                <PageTitle>
                    {pageTitle}
                </PageTitle>
                
                {/* Put ifelse statement here if testtype = speedtest */}
                {/* <SetTypeContainer>
                    <SetType>
                        SET A
                    </SetType>
                    <SetType>
                        SET B
                    </SetType>
                </SetTypeContainer> */}
            </LeftDiv>
            <Container>
                <Card>
                    <CardTitle>
                       {subsubject}
                   </CardTitle>
                   <CardDescription>
                       <CardDescriptionData style={{marginBottom: "10px"}}>
                           <P>Status : {status}</P>
                           <P>Duration: {duration}min</P>
                       </CardDescriptionData>
                       <CardDescriptionData>
                           <P>{items} items</P>
                           <Button>Start Test</Button>
                       </CardDescriptionData>
                   </CardDescription>
                </Card>
                <Card>
                    <CardTitle>
                       {subsubject} 
                   </CardTitle>
                   <CardDescription>
                   <CardDescriptionData style={{marginBottom: "10px"}}>
                           <P>Status : {status}</P>
                           <P>Duration: {duration}min</P>
                       </CardDescriptionData>
                       <CardDescriptionData>
                           <P>{items} items</P>
                           <Button>Start Test</Button>
                       </CardDescriptionData>
                   </CardDescription>
                </Card>
                <Card>
                    <CardTitle>
                      {subsubject} 
                   </CardTitle>
                   <CardDescription>
                   <CardDescriptionData style={{marginBottom: "10px"}}>
                           <P>Status : {status}</P>
                           <P>Duration: {duration}min</P>
                       </CardDescriptionData>
                       <CardDescriptionData>
                           <P>{items} items</P>
                           <Button>Start Test</Button>
                       </CardDescriptionData>
                   </CardDescription>
                </Card>
                <Card>
                    <CardTitle>
                      {subsubject} 
                   </CardTitle>
                   <CardDescription>
                   <CardDescriptionData style={{marginBottom: "10px"}}>
                           <P>Status : {status}</P>
                           <P>Duration: {duration}min</P>
                       </CardDescriptionData>
                       <CardDescriptionData>
                           <P>{items} items</P>
                           <Button>Start Test</Button>
                       </CardDescriptionData>
                   </CardDescription>
                </Card>
          </Container>
          </FlexColumn>
        </CenterDiv>
        
    </Wrapper>
  )
}

export default SubSubject