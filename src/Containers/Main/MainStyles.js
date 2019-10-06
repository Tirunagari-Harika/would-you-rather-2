import styled from "styled-components";

const MainWrapperStyles = styled.div`
    .header{
        background-color:#ccc;
        font-weight:500;
        font-size:14px;
        text-align:center;
    }

    ul.links{       
        margin:10px 3px 0px;
        padding:0;
        border-bottom: 2px solid #14cece;
    }

    .links li{
        padding:0px;        
        display:inline-block;
        list-style:none;       
    }

    .links li a{
        text-decoration:none;
        display:block;
        padding:12px 8px 5px 8px;
        margin: 0px 5px 0px 5px;    
    }

    .links li a.activeLink {
        background-color:#14cece;    
           
    }

    .userprofile {
        height: 30px;
        width: 500px;
    }

    .userprofile div{
        display: inline-block;
        margin: 0px 15px;
    }

    .userprofile .avtarImg{
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }

    .hideUser{
        visibility: hidden;
    }

    .showUser{
        visibility: visible;
    }

    
`;

export { MainWrapperStyles }