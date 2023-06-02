import React from 'react'
import ReactDOM from 'react-dom/client'
import { NotificacionPage } from './components/NotificacionPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode> 
        <NotificacionPage />
    </React.StrictMode>,
)
