import React from 'react'
import {Search, ShoppingCart, ShoppingCartOutlined} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
import styled from 'styled-components'
const Container = styled.div`
     height:60px;
` 
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
`
const Left = styled.div `
flex:1;
display:flex;
align-items:center;
`
const Right = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const Logo = styled.h1`
font-weight:blod;
`
const SearchContainer = styled.div`
border:0.5px solid lightGrey;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`
export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Language>En</Language>
                <SearchContainer>
                    <Input/>
                 <Search style={{color:'gray',fontSize:'16px'}}/>
                </SearchContainer>
                </Left>
                <Center><Logo>Lama</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent = {4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                    </Right>
            </Wrapper>
        </Container>
    )
}
