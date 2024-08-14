import React from "react"
import { Container, Card_ligin, Content,Form, Input, Button } from "./styles"

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
      <Card_ligin>
        <Form>
     <h1>login</h1>
     <Input type="text" />
     <Input type="text" />

     <Button>Entrar</Button>
     <a href="/sign-up">esqueci minha senha</a>
        </Form>
     
     </Card_ligin>
     </Content>
    </Container>
  )
}