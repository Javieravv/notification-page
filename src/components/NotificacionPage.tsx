import { Container } from "react-bootstrap"
import { HeadPageNotification } from "./HeadPageNotification"
import { BodyPageNotification } from "./BodyPageNotification"

export const NotificacionPage = () => {
  return (
    <Container fluid="md" className="mt-3">
        <HeadPageNotification />
        <BodyPageNotification />
    </Container>
  )
}
