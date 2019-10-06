import styled from "styled-components";

export const AnsweredDetailStyles = styled.div`
    width: 600px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 5px;

    .title{
        height: 15%;
        padding: 3%; 
        font-weight: 600;
        font-size: 16px;
        text-transform:capitalize;
        border-bottom: 1px solid #ccc;
        background-color: #f6f2f2;
        text-align:left;
    }

    .title::before{
        content:"Asked by ";        
    }

    .detail{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: space-around;
        padding: 10px 0px;
    }

    .imgWrapper{
        height: 100%;
        width: 30%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-content: center;      
        transform: translateY(50px);
       
    }

    .imgWrapper img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    .OptionsDiv{
        width: 50%;
        text-align:left;
        border-left: 1px solid #ccc;
        padding: 10px;
        
    }

    .imgWrapper, .OptionsDiv{
        display:inline-block;
    }

    .resultDiv{
        margin: 10px 5px;
        padding: 10px;
        background-color: #f4f7f8;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        
    }

    .activeDiv{
        background-color: #b7eded;
        color:  #799595;
        position:relative;
    }

    .activeDiv::after{
        content:"Your Vote";
        display:inline-block;
        height: 50px;
        width: 50px;
        border: 1px solid #fff;
        background-color: orange;
        text-transform:capitalize;
        border-radius: 50%;
        color: yellow;
        position:absolute;
        top:-25px;
        right:-25px;
        text-align:center;
        padding:3px;

    }

    
`;

export const ProgressBarStyles = styled.div.attrs((props) => {
   // console.log(props.firstWidth);
    return {

    }
})`
    color:black;
    .progressBar{
        height: 20px;
        margin: 5px;
       /*  border: 2px solid #f6f2f2; */
        border-radius: 6px;
        background-color: #ccc;
    }

    .progressBar > div{
        height: 100%;
        display:inline-block;
        
    }
    .progressBar > div:first-of-type{
        background-color: #14cece;
        width: ${props => props.firstWidth  + "%"};
        border-top-left-radius: ${props => props.firstWidth !== 0? "6px": "0px"};
        border-bottom-left-radius: ${props => props.firstWidth !== 0? "6px": "0px"};
        border-top-right-radius: ${props => props.firstWidth === 100? "6px": "0px"};
        border-bottom-right-radius: ${props => props.firstWidth === 100? "6px": "0px"};
        color:white;
        font-size: 12px;
        text-align:right;
      /*   transform: translateY(-5px); */
        box-sizing:border-box;
        padding-top: ${props => props.firstWidth !== 0? "2px": "0px"};
        padding-bottom: ${props => props.firstWidth !== 0? "2px": "0px"};
        padding-right: ${props => props.firstWidth !== 0? "4px": "0px"};
        
        
    }

    /* .progressBar > div:last-of-type{
        background-color: #ccc;
        width: ${props => props.secondWidth  + "%"}; 
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        
    } */

    .votes{
        text-align:center;
    }

`;