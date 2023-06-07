import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { textDiasDate } from '../data/utils';

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
    // Vemos las diferencias en las fechas
    const messageDifDays = textDiasDate ( datemessage.getTime(), new Date().getTime() )
    return (
        <Container fluid="md" as={'article'}
            className={`notification-card d-flex flex-row p-3 mb-1 rounded-3 ${!messagereaded ? 'message-readed' : ''} `}
        >
            <Image
                className='image-card me-3'
                src={avatar}
            />
            <Row
                as={'div'}
                className="message-notificacion w-100"
                lg={1} md={1} sm={1}
            >
                <Row as={'div'} className='clase-prueba d-flex flex-row justify-content-between '>
                    <Col as={'div'} className=' mb-0'>
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
                        <Col as={'div'}> { messageDifDays } </Col>
                    </Col>
                    {
                        (pictureComment !== undefined && pictureComment?.length > 0)
                            ? (
                                <Col className=' d-flex flex-row-reverse '>
                                    <Image className='image-card '
                                        src={pictureComment}
                                    />
                                </Col>
                            )
                            : ''
                    }
                </Row>

                <Col as={'div'}>
                    {
                        (privatemessage !== undefined && privatemessage?.length > 0)
                            ? (
                                <Col className="message-send mt-2 p-3 rounded-3">
                                    {privatemessage}
                                </Col>
                            )
                            : ''
                    }
                </Col>
            </Row>
        </Container>
    )
}
