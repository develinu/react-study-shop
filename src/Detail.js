import React from "react";
import { useHistory, useParams } from "react-router-dom";
// import styled from 'styled-components'


// let Box = styled.div`
//   padding : 20px;
// `

// let Title = styled.div`
//   font-size: 25px;
//   color: ${props => props.color}
// `

const Detail = ({ shoes }) => {

  let { id } = useParams()
  let history = useHistory()
  const targetShoes = shoes.find(_shoes => _shoes.id === parseInt(id))

  return (
    <div className="container">
      {/* <Box>
        <Title color="red">Title</Title>
      </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(targetShoes.id)+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{targetShoes.title}</h4>
          <p>{targetShoes.content}</p>
          <p>{targetShoes.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;