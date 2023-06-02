import Badge from 'react-bootstrap/Badge';

export const HeadPageNotification = () => {
  return (
    <nav className='d-flex flex-row justify-content-between align-items-center '>
        <div>
            <h3>Notifications <Badge bg='primary' className='me-2'>10</Badge> </h3>
        </div>
        <a href='#'>Mark all as read</a>
    </nav>
  )
}
