import { FC } from 'react';
import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

interface Props {
    name: string;
    avatar: string;
    messagemain: string;
    messageLink?: string;
    datemessage: Date;
    messagereaded: boolean;
    privatemessage?: string;
    pictureComment?: string;
}


export const NotificationCard: FC<Props> = ({
    name,
    avatar,
    messagemain,
    messageLink,
    datemessage,
    messagereaded,
    privatemessage,
    pictureComment
}) => {
    return (
        <article className='notification-card d-flex flex-row p-3 mb-1 rounded-3'>
            <Image className='image-card me-3'
                src={avatar}
            />
            <div className="message-notificacion d-flex flex-column alig-items-center justify-content-center">
                <Row as={'div'} className='clase-prueba d-flex flex-row justify-content-between'>
                    <div className='d-flex flex-column align-items-left mb-0'>
                        <p>
                            <span className='fw-bold'> {name} </span> {messagemain}
                            {
                                (messageLink !== undefined && messageLink?.length > 0)
                                    ? (<a href='#'> {messageLink} </a>)
                                    : ''
                            }
                            {
                                (!messagereaded) ? (
                                    <Image
                                        className='ms-2 mt-1'
                                        src='/images/circle-noread.svg'
                                    />
                                ) : ''
                            }
                        </p>
                        <div>5 days ago {datemessage.toString()} </div>
                    </div>
                    {
                        (pictureComment !== undefined && pictureComment?.length > 0)
                            ? (<div>
                                <Image className='image-card me-3'
                                    src={pictureComment}
                                />
                            </div>)
                            : ''
                    }
                </Row>

                <div>
                    {
                        (privatemessage !== undefined && privatemessage?.length > 0)
                            ? (
                                <div className="message-send mt-2 p-3 rounded-3">
                                    <p>  {privatemessage} </p>
                                </div>
                            )
                            : ''
                    }
                </div>
            </div>


        </article>
    )
}
