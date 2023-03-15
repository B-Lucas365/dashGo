import { Button } from '@/components/Button'
import {Input} from '../components/Input'
import {Form, Container} from './style'


export default function Home() {
  return (
    <>
      <Container>
        <Form>
          <Input name="email" type="email" placeholder="Digite seu email"/>
          <Input name="password" type="password" placeholder="Digite sua senha"/>
          <Button type="submit" value='Entrar'/>
        </Form>
      </Container>
    </>
  )
}