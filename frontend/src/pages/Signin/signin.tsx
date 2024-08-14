import React from "react"
import { Container, Card_ligin, Content,Form } from "./styles"

import {Input, Button} from '../../shared/components'

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src="login.svg" alt="login" />
      <Card_ligin>
        <Form>
     <h1>Seu login</h1>
     <Input />
     <Input />

     <Button>opa</Button>
     <a href="/sign-up">esqueci minha senha</a>
        </Form>
     
     </Card_ligin>
     </Content>
    </Container>
  )
}