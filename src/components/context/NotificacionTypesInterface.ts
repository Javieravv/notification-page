export interface INotification {
    name: string;
    icono: string;
    messageMain: string;
    messageLink?: string;
    messageReaded: boolean;
    privateMessage?: string;
    dateMessage: Date;
    pictureComment?: string;
}

export type NotificationType = {
    // nombre: string;
    setReadAllNotifications: () => void;
    totalNotifications: number;
    messages: INotification[];
}

