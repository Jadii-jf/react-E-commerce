import { ArrowLeftOutlined, ArrowRight, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
background:coral;
position:relative;
`
const Arrow = styled.div`
width:50px;
height:50px;
border-radius:50%;
background:#f7f7f7;
display:grid;
place-items:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction=='left' && '10px'};
right:${props=>props.direction=='right' && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;
`
const Wrapper = styled.div`
height:100%;
`
const Slide= styled.div`
display:flex;
align-items:center;
`
const ImgContainer = styled.div`
flex:1;
`
const InfoContainer = styled.div`
`
const Image = styled.img`
`
export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
