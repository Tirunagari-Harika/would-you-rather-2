import styled from "styled-components";

export const SummaryStyles = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    
    width: 100%;
    margin-bottom : 10px;

    .header{
        font-weight: 700;
        font-size: 18px;
        background-color: #f6f2f2;
        border-bottom: 1px solid #ccc;
        height: 30%;
        padding: 5px 0px 5px 30px;
        text-align: left;
    }

    .header::after {
        content: "  asks :";        
    }

    .flexbox{
        height: 70%;
        display: flex;
        flex-direction: row;
        padding: 5px;
    }

    .ImgWrapper{
        height: 100%;
        width: 40%;
        padding: 5px; 
       /*  border-right: 1px solid #ccc; */       
    }

    .ImgWrapper img {
        height: 80%;
        width: 80%;
        border-radius: 50%;
    }

    .questionSummary{
        height: 100%;
        width: 60%;
        display:flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px; 
        border-left: 1px solid #ccc;  
    }

    .questionSummary *{
        height: 33%;
        margin-bottom: 15px;
    }

    .second-header{
        font-weight: 700;
        font-size: 18px;
    }

    button{
        border: 2px solid #14cece;
        background-color: #fff;
        color: #14cece;
        font-size: 16px;
        border-radius: 5px;
        padding: 5px;
        font-size: 14px;
    }

`;