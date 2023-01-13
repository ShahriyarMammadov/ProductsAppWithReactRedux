import React from 'react'
import { Space, Spin } from 'antd';

const Loading = () => {
    return (
        <div>
            <Space size="middle">
                <Spin size="large" />
            </Space>

        </div>
    )
}

export default Loading