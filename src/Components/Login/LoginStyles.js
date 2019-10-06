import styled from "styled-components";

const LoginStyles = styled.div`

    width: 500px;
    margin: 5px auto;
    border: 1px solid #ccc;

    .logo {
        height: 200px;
        display:block;
        margin: 0px auto;
    }

    .title{
        height: 50px;
        border-bottom: 2px solid #ccc;
        text-align: center;
        background-color: #f6f1f1;
    }

    .titleheader {
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 800;
        line-spacing: 1.5;
       
    }

    .secondHeader{
        font-size: 12px;
    }

    .selectUsersDropDown, .signInBtn{
        display:block;
        height: 40px;
        width: 90%;
        margin: 15px;
        border-radius: 5px;
    }

    .signInBtn{
      background-color: #14cece;
      color: white;
      font-weigt: 700;
    }

    .selectUsersDropDown option{
        font-size: 15px;
        
    }
  
`;

export { LoginStyles };