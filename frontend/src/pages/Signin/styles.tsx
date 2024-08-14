import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #200;
  display: flex;
  justify-content: center;
  align-items: center;
 
 
`

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
  

export const Card_ligin = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > a {
      color: red;
      display: block;
      margin-top: 20px;
      transition: all 0.3;

      &:hover {
        transform: scale(1.02);
      }
    }
    `


export const Form = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #30accb;
    border-radius: 20px;
    box-shadow: 0px 10px 40px;
    margin: 10px;

    h1 {
      color: red;
      font-weight: 800;
      margin: 0;
      margin-bottom: 15px;
    }

    > button {
      margin: 25px;
    }
  
`

export const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 16px;
  margin: 5px;

  background: ${({ theme }) => theme.input};
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
  border: 2px solid ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
   & + div {
    margin-top: 8px;
  }
  `

export const Button = styled.button`
  width: 100%;
  padding: 16px 0px;
  //margin: 25px;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  color: rebeccapurple;
  background: tan;
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px royalblue;
  transition: transform 0.8s blue;

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 5px 1px 0 rgba(0, 0, 0, 0.1);
    background-color: greenyellow;
  }
`
 