import styled from "styled-components";

export const HomeStyles = styled.div`
    width: 600px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    

    .titles {
        display:flex;
        flex-direction: row;
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;  
    }

    .titles div{
        height: 20px; 
        width: 50%;
        padding: 10px 10px 10px 5px;
        text-align:center;
        font-weight: 700;
        background-color: #f6f2f2;
        cursor: pointer;
    }

    .activeList {
        color: #14cece;
        
    }

    .titles > div:first-of-type{
        border-right: 1px solid #ccc;
    }

    .questionsList{
        padding: 5px 15px;
    }
`;