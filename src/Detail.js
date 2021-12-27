import React from "react";
import { useHistory, useParams } from "react-router-dom";


const Detail = ({ shoes }) => {

  let { id } = useParams()
  let history = useHistory()

  const getMatchedShoes = () => {
    return shoes.find(_shoes => _shoes.id === id)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{getMatchedShoes().title}</h4>
          <p>{getMatchedShoes().content}</p>
          <p>{getMatchedShoes().price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;