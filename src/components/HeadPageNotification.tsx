import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { PageContext } from './context/PageContext';

export const HeadPageNotification = () => {
    const context = useContext(PageContext)
    return (
        <nav className='d-flex flex-row justify-content-between align-items-center p-3'>
            <div>
                <h3>Notifications <Badge bg='primary' className='me-2'>{ context?.totalNotifications }</Badge> </h3>
            </div>
            <a 
                href='#'
                >
                    Mark all as read
                </a>
        </nav>
    )
}
