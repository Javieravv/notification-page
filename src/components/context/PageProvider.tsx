import { ReactNode, FC, useState } from "react"
import { PageContext } from "./PageContext";
import { dataNotifications } from "../../data/dataNotification";
import { booleanRandom, dateRandom } from "../../data/utils";

interface Props {
    children: ReactNode;
}

export const PageProvider: FC<Props> = ({ children }) => {
    const [messagesNotification, setMessagesNotification] = useState(
        dataNotifications.map((item) => {
            return {
                ...item,
                messageReaded: booleanRandom(),
                dateMessage: dateRandom ( new Date('2023-01-01'), new Date() )
            }
        }))

    const [totNotificationsReaded, setTotNotificationsReaded] = useState(
        messagesNotification.reduce((acc, item) => {
            if ( item.messageReaded === false ) {
                acc++
            }
            return acc
        }, 0)
    )

    const funcionPrueba = () => {
        setMessagesNotification(
            messagesNotification.map((message) => {
                return {
                    ...message,
                    messageReaded: true
                }
            })
        )
        setTotNotificationsReaded (0)
    }

    return (
        <PageContext.Provider value={{
            totalNotifications: totNotificationsReaded,
            messages: messagesNotification,
            setReadAllNotifications: funcionPrueba
        }}>
            {children}
        </PageContext.Provider>
    )
}
