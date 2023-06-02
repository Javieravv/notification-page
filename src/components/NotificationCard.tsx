import Image from 'react-bootstrap/Image';

export const NotificationCard = () => {
  return (
    <article className='notification-card d-flex flex-row p-3 mb-1 rounded-3'>
        <Image className='image-card me-3'
            src='/images/avatar-anna-kim.webp'
        />
        <div className="message-notificacion d-flex flex-column alig-items-center justify-content-center">
            <div className='d-flex flex-row align-items-center mb-0'>
                <span className='fw-bold'>Xavier Vargas </span> followed you
                <Image 
                    className='ms-2 mt-1'
                  src='/images/circle-noread.svg'
                />
            </div>
            <div>5 days ago</div>
            <div className="message-send mt-2 p-3 rounded-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia explicabo, repudiandae voluptatem accusantium aperiam aliquid? Assumenda nobis earum, dicta labore dolores tempore corporis eligendi!
                </p>
            </div>
        </div>
    </article>
  )
}
