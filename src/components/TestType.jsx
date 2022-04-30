import styled from "styled-components"
import cardImage from "../images/card.jpg"

import {Button, P, SpaceBetweenDiv, CenterDiv} from '../styles'
import { SpeedOutlined } from '@material-ui/icons'


const Card = styled.div`
    height: 420px;
    width: 350px;
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
    box-shadow: 0px 2px 8px #e4e4e4;
    position: relative;
`
const Image = styled.img`
    height: 340px;
    width: 350px;
`
const Icon = styled.img`
   height: 150px;
    width: 150px;
`
const Info = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`
const Title = styled.h1`
   font-size: 20px;
   font-weight: 100;
   color: white;
   text-transform: uppercase;
   letter-spacing: 5px;
`
const DivColumn = styled.div`
   display: flex;
   flex-direction: column;
   align-items: left;
   justify-content: center;
`


const TestType = ({title, source, itemscount, status}) => {
  return (
    <Card style={{margin: "10px"}}>
         <Info>
           <CenterDiv> 
             <Title>{title}</Title>
           </CenterDiv>
           <CenterDiv> 
          <Icon src={source}/>
          </CenterDiv>
        </Info>
        <Image src={cardImage}/>
            <SpaceBetweenDiv style={{marginTop: "20px", padding: "0 10px 0 10px"}}>
                <DivColumn>
                <P>{itemscount}</P>
                <P>{status}</P>
                </DivColumn>
                <Button>Start</Button>
            </SpaceBetweenDiv>
    </Card> 
  )
}

export default TestType