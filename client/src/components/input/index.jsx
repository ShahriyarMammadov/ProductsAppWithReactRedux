import React, { useState } from "react";
import { Input } from "antd";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  searchAction,
  sortAction,
} from "../../assets/redux/action/card.action";
import axios from "axios";

const InputComponent = () => {
  const { Search } = Input;
  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  const [pnopka, setPnopka] = useState(true);

  const handleSearch = async (value) => {
    let searchData = await axios.get("http://localhost:3000/prod");
    GetData.modalData = searchData.data;
    let search = GetData.modalData.filter((element) =>
      element.name.toLocaleLowerCase().includes(value)
    );
    dispatch(searchAction(search));
  };

  const handleSort = () => {
    if (pnopka) {
      let sortedData = GetData.data.sort((a, b) => +a.PRICE - +b.PRICE);
      dispatch(sortAction(sortedData));
      setPnopka(false);
    } else {
      let sortedData = GetData.data.sort((a, b) => +b.PRICE - +a.PRICE);
      dispatch(sortAction(sortedData));
      setPnopka(true);
    }
  };

  return (
    <div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading={GetData.loading}
        onSearch={(e) => {
          handleSearch(e);
        }}
      />
      <button
        onClick={() => {
          handleSort();
        }}
      >
        Sort by Price
      </button>
    </div>
  );
};

export default InputComponent;
