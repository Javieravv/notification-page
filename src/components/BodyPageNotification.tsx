import { useContext } from "react"
import { NotificationCard } from "./NotificationCard"
import { PageContext } from "./context/PageContext"

export const BodyPageNotification = () => {
    const contextNotification = useContext(PageContext)
    const arrayNotification = contextNotification?.messages
    return (
        <section>
            {
                arrayNotification?.map((item, index) => (
                    <NotificationCard
                        key={index}
                        name={item.name}
                        avatar={item.icono}
                        messagemain={item.messageMain}
                        messageLink={item.messageLink}
                        datemessage={item.dateMessage}
                        messagereaded={item.messageReaded}
                        privatemessage={item.privateMessage}
                        pictureComment={item.pictureComment}
                    />
                ))
            }
        </section>
    )
}
