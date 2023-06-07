import { ReactNode, FC, useState } from "react"
import { PageContext } from "./PageContext";
import { dataNotifications } from "../../data/dataNotification";

interface Props {
    children: ReactNode;
}

export const PageProvider:FC<Props> = ( {children} ) => {
    const [messagesNotification, setMessagesNotification] = useState(dataNotifications)

    const funcionPrueba = () => {
        setMessagesNotification(
            messagesNotification.map((message) => {
                return {
                    ...message,
                    messageReaded: true
                }
            })
        )
        console.log ('ESTO ES UNA PRUEBA', messagesNotification)
    }

    return (
        <PageContext.Provider value= {{
            totalNotifications: dataNotifications.length,
            messages: messagesNotification,
            setReadAllNotifications: funcionPrueba
        } }>
            { children }
        </PageContext.Provider>
    )
}
