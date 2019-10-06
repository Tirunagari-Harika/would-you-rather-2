import styled from "styled-components";

export const LeaderBoardStyles = styled.div`
    width: 600px;
    margin: 20px auto;

    .contestant{      
        display: flex;
        flex-direction: row; 
        width: 100%;
        height: 150px;  
        border: 1px solid #ccc; 
        border-radius: 10px; 
          
    }

    .contestant * {       
        height: 100%;
    }

    .highlight{
        width: 3%;
        background-color: #ccc;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .activeHighlight{
        background-color: orange;
    }

    .ImgWrapper {       
        width: 25%;
        display:flex;
        flex-direction:column;
        align-content:center;
        justify-content: center;
        margin-left: 5px;              
    }

    .ImgWrapper img {
        height: 70%;
        width: 70%;
        border-radius: 50%;
    }


    .dashboard{
        width: 57%;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        display: flex;
        flex-direction: column; 
        text-align: left; 
           
    }

    .userName, .answered, .created{
        margin-left: 5px;
        margin-right: 5px;
    }

    .dashboard .userName {
        font-size: 21px;
        font-weight: 800;
        height: 40%;  
    }

    .answered{
        border-bottom: 1px solid #ccc;
        height: 30%;
    }

    .created{
        height: 30%;
    }

    .score{
        width: 20%;
    }

    .score > div {
        display:flex;
        flex-direction:column;
        height: 80%;
        align-content:center;
        justify-content:center;
        margin: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .score-header{
        font-size: 16px;
        font-weight: 600;
        height: 40%;
        width: 100%;
        padding-top: 15px;
        border-bottom: 1px solid #ccc;
    }

    .score-detail{
        height: 60%;
        width: 100%;
        padding-top: 5px;
    }

    .totalscore{
        background-color: #14cece;
        color: #fff;
        height: 70%;
        width: 70%;
        border-radius: 50%;
        text-align: center;
        box-sizing:border-box;
        padding: 10%;
        margin-left: 10px;
        font-size: 18px;
        font-weight: 700;
    }


`;