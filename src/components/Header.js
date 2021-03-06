import React,{useState} from 'react'
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Notifications';
import TextSmsIcon from '@material-ui/icons/SmsRounded';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Header(props) {
    const [input, setInput] = useState("");
    const onSubmitSearch = (e) =>{
        e.preventDefault();
        props.onSubmit(input);
        console.log("THis ->", input)
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton> 
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
           <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                        <button type="submit" onClick={onSubmitSearch}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <IconButton>
                    <TextSmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color: #e60023;
        font-size: 32px;
        cursor: pointer;

    }
`
const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17,17,17);
    a{
        text-decoration: none;
        color: white;
        font-weight: 700;

    }
`
const FollowingButton = styled(HomeButtons)`
    background-color: #fff;
    a{
        text-decoration: none;
        color: #000;
        font-weight: 700;

    }
    :hover{
        background-color: #e1e1e1
    }
`

const SearchWrapper= styled.div`
    flex: 1;

`

const SearchBarWrapper = styled.div`
    background-color:#efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border:none;
    padding-left: 10px;
    form{
        display: flex;
        flex: 1;
    }
    form > input{
        background-color: transparent;
        border: none;
        width:100%;
        margin-left:5px;
        font-size: 16px
       
    }
    form > button{
        display: none;
    }
    input:focus{
        outline: none;
    }

`

const IconsWrapper = styled.div``