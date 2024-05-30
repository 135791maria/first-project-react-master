import styled from "styled-components";
import Background from "../../Assets/background2.png";

export const Container
  = styled.div`
background: url("${Background}");
background-size:cover;
display:flex;
align-items: center;
flex-direction:column;
gap:40%;

 `;

export const Image
  = styled.img`
margin-top:40px;
 
 `
export const ContainerItens
  = styled.div`
background: linear-gradient(
157.44deg,
rgba(255,255,255, 0.6) 0.84%,
rgba(255 ,255, 255, 0.6  ) 0.85%,
rgba(255, 255, 255, 0.15) 100%
);
border-radius:61px 61px 61px 61px;
backdrop-filter: blur(45px);
padding:50px 36px;
display:flex;
flex-direction:column;
margin-top:16px;
height:100vh;
margin-bottom:30px;
`;
export const H1
  = styled.h1`
 font-style:normal;
font-weight:bold;
font-size:35px;
line-height:40px;
text-align:center;
color:#fff;
margin-bottom:80px;
  `
  
export const InputLabel
  = styled.p`
letter-spacing: -0.408px;
font-style:normal;
font-weight:bold;
font-size:18px;
line-height:22px;
color:#eeeeee;
margin-left:23px;

 `



export const Input
  = styled.input`
background:rgba(255, 255, 255, 0.25);
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:14px;
width:353px;
height:58px ;
border:none;
outline:none;
padding-left:24px;
font-style:normal;
font-weight:normal;
font-size:24px;
line-height:28px;
color:#ffffff;
margin-bottom:35px;
`
export const Button = styled.button`
width:342px;
height:74px;
margin-top:180px;
background: transparent;
border-radius:14px;
font-style:normal;
font-weight:bold;
font-size:18px;
line-height:28px;
border: 2px solid #ffffff;
color:#ffffff;
cursor:pointer;
margin-left:7px;
display:flex;
align-items:center;
justify-content:center;
gap: 20px;
&:hover{
opacity:0.8
}
&:active{
  opacity:0.5
}

img{
transform:rotatey(180deg);

}
 `
export const User =
  styled.li`
 display:flex;
justify-content:space-around;
 align-items:center;
 margin-top:30px;
background:rgba(255, 255, 255, 0.25);
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:14px;
width:353px;
height:58px ;
border:none;
outline:none;
p{
font-style:normal;
font-size:24px;
font-weight:normal;
line-height:28px;
color:#ffffff;
}
button{
background:none;
border:none;
cursor:pointer;


}

 `