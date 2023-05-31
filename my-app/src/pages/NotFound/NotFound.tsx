import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

type Props = {};

const NotFound = (props: Props) => {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button
                    style={{ height: '100%', backgroundColor: '#47991f' }}
                    type="primary"
                    onClick={() => navigate('/')}
                >
                    Back Home
                </Button>
            }
        />
    );
};

export default NotFound;
