import { ReactNode, FC } from "react"
import { PageContext } from "./PageContext";
import { dataNotifications } from "../../data/dataNotification";

interface Props {
    children: ReactNode;
}

export const PageProvider:FC<Props> = ( {children} ) => {

    return (
        <PageContext.Provider value= {{
            totalNotifications: 8,
            messages: dataNotifications
        } }>
            { children }
        </PageContext.Provider>
    )
}
