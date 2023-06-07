// Data para las notificaciones

import { INotification } from "../components/context/NotificacionTypesInterface";

export const dataNotifications: INotification[] = [
    {
        name: 'Mark Webber',
        icono: '/images/avatar-mark-webber.webp',
        messageMain: 'reacted to your recent post',
        messageLink: 'My first tounament today!',
        messageReaded: false,
        dateMessage: new Date()
    },
    {
        name: 'Ángela Gray',
        icono: '/images/avatar-angela-gray.webp',
        messageMain: 'followed you',
        messageReaded: false,
        dateMessage: new Date()
    },
    {
        name: 'Jacob Thompson',
        icono: '/images/avatar-jacob-thompson.webp',
        messageMain: 'has joined your group ',
        messageLink: 'Chess Club',
        messageReaded: false,
        dateMessage: new Date()
    },
    {
        name: 'Rizky Hasanuddin',
        icono: '/images/avatar-rizky-hasanuddin.webp',
        messageMain: 'sent you a private message',
        messageReaded: false,
        privateMessage: `Hello, thanks for setting up the Chess Club. I've been a menmber for a few weeks now and I'm already having lots of fun and improving my game.`,
        dateMessage: new Date()
    },
    {
        name: 'Kimberly Smith',
        icono: '/images/avatar-kimberly-smith.webp',
        messageMain: 'commented on your picture',
        messageReaded: true,
        dateMessage: new Date(),
        pictureComment: '/images/image-chess.webp'
    },
    {
        name: 'Nathan Peterson',
        icono: '/images/avatar-nathan-peterson.webp',
        messageMain: 'reacted to your reent post ',
        messageLink: '5 end-games strategies to increase your win rate',
        messageReaded: true,
        dateMessage: new Date()
    },
    {
        name: 'Anna Kim',
        icono: '/images/avatar-anna-kim.webp',
        messageMain: 'left the group ',
        messageLink: 'Chess Club',
        messageReaded: true,
        dateMessage: new Date()
    },
    {
        name: 'Mark Webber',
        icono: '/images/avatar-mark-webber.webp',
        messageMain: 'reacted to your recent post',
        messageLink: 'My first tounament today!',
        messageReaded: false,
        dateMessage: new Date()
    },
]