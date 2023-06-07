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

    const funcionPrueba = () => {
        setMessagesNotification(
            messagesNotification.map((message) => {
                return {
                    ...message,
                    messageReaded: true
                }
            })
        )
    }

    return (
        <PageContext.Provider value={{
            totalNotifications: dataNotifications.length,
            messages: messagesNotification,
            setReadAllNotifications: funcionPrueba
        }}>
            {children}
        </PageContext.Provider>
    )
}
