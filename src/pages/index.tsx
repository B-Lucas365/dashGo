import { InputLogin } from '@/components/inputLogin'
import {Form, Container} from './style'

export default function Home() {
  return (
    <>
      <Container>
        <Form>
          <InputLogin />
        </Form>
      </Container>
    </>
  )
}