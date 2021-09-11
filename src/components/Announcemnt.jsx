import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height:30px;
background:teal;
color:white;
text-align:center;
display:grid;
place-items:center;
font-weight:bolder;
font-size:14px;
`
export const Announcemnt = () => {
    return (
        <Container>
           Super Deal! Free Shipping an order Over $5o
        </Container>
    )
}
