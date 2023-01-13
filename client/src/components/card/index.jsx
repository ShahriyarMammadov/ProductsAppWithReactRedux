import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { cardAction } from '../../assets/redux/action/card.action';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router-dom'
import ModalPage from '../../assets/pages/modalPage'
import Loading from '../loading'
import Meta from 'antd/es/card/Meta';
import './index.scss'

const CardComponent = () => {
    const GetData = useSelector((state) => state.cardReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardAction())
    }, [])

    console.log(GetData)

    return (
        <div className='cards'>
            {GetData.Loading ?
                (Loading)
                :
                (GetData?.data?.map((e) => {
                    return (
                        <div className="cards">
                            <Link to={`modalpage/${e.id}`}>
                                <Card
                                    key={e.id}
                                    loading={GetData.loading}
                                    style={{
                                        width: 300,
                                        cursor: "pointer"
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={e.images}
                                        />
                                    }

                                >
                                    <Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                        title={e.name}
                                        description={e.PRICE}
                                    />
                                </Card>
                            </Link>
                        </div>
                    )
                }))}
        </div>
    )
}

export default CardComponent