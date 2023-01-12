import React from 'react'
import { Input } from 'antd';
import './index.scss'
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from '../../assets/redux/action/card.action';
import axios from 'axios';


const InputComponent = () => {
    const { Search } = Input;
    const GetData = useSelector((state) => state.cardReducer);
    const dispatch = useDispatch();

    // const handleChange = () => {
    //     axios.get('http://localhost:3000/products')
    // }

    const handleSearch = async (value) => {
        let searchData = await axios.get('http://localhost:3000/products')
        GetData.modalData = searchData.data
        let search = GetData.modalData.filter((element) => element.name.toLocaleLowerCase().includes(value))
        dispatch(searchAction(search))
    }

    return (
        <div>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                loading={GetData.loading}
                onSearch={(e) => {
                    handleSearch(e)
                }}
            />
        </div>
    )
}

export default InputComponent