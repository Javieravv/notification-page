// Creamos un contexto para la aplicación

import { createContext } from 'react'
import { NotificationType } from './NotificacionTypesInterface'


export const PageContext  = createContext<NotificationType | undefined> ( undefined)