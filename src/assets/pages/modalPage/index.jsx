import React, { useEffect, useState } from 'react'
import './index.scss'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const ModalPage = () => {
    const GetData = useSelector((state) => state.cardReducer);
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    const nav = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((response) => setData(response.data))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/products/${id}`)
        nav('/')
    }

    return (
        <div className="cards">
            <Card
                key={data.id}
                loading={GetData.loading}
                style={{
                    width: 300,
                    cursor: "pointer",
                    fontSize: '18px',
                    fontWeight: '600',
                    margin: '0 auto'
                }}
                cover={
                    <img
                        alt="example"
                        src={data.images}
                    />
                }

            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={data.name}
                    description={data.PRICE}
                />
                <p>{data.id}</p>
                <p style={{ color: 'green' }}>CPU: {data.cpu}</p>
                <p style={{ color: 'red' }}>STORAGE: {data.ssd}</p>
                <button onClick={() => {
                    handleDelete()
                }}>Delete</button>
            </Card>
        </div>
    )
}

export default ModalPage