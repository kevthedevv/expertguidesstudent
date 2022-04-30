import styled from "styled-components"

export const Button = styled.button`
    padding: 10px;
    height: 45px;
    background-color: #1E508B;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    &:hover,&:focus{
        background-color: #6179b8;
        outline: none;
    }
`
export const CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
`
export const P = styled.p`
    color: gray;
    padding: 0;
    margin: 0;
`
export const RightDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`
export const SpaceAroundDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const SpaceBetweenDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Input = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    width: 300px;
`
export const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 300px;
    border: 1px solid #bbbbbb;
`