import { Container } from "react-bootstrap"
import { HeadPageNotification } from "./HeadPageNotification"
import { BodyPageNotification } from "./BodyPageNotification"
import { PageProvider } from "./context/PageProvider"

export const NotificacionPage = () => {
    
    return (
        <PageProvider>
            <Container fluid="md" className="mt-0">
                <HeadPageNotification />
                <BodyPageNotification />
            </Container>
        </PageProvider>
    )
}
