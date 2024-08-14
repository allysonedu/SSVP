import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.primary};
  display: flex; 
  justify-content: center;
  align-items: center;
 
 
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  img {
    margin-left: 100px;
    width: 400px;
    display: flex;
  }
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
    width: 32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background:${({ theme }) => theme.boxlogin};;
    border-radius: 20px;
    box-shadow: 0px 10px 40px;
    margin: 10px;

    h1 {
      color: ${({ theme }) => theme.title};
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

  background:${({ theme }) => theme.input};
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
  
`
 