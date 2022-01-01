import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import './Detail.scss'
import styled from 'styled-components'
import { inventoryContext } from './App'


let Box = styled.div`
  padding : 20px;
`

let Title = styled.div`
  font-size: 25px;
  color: ${props => props.color}
`

const Detail = ({ shoes, setInventory }) => {

  let inventory = useContext(inventoryContext)

  let { id } = useParams()
  let history = useHistory()
  const targetShoes = shoes.find(_shoes => _shoes.id === parseInt(id))
  const [isHide, setIsHide] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsHide(true)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [isHide])

  return (
    <div className="container">
      <Box>
        <Title color="black">Detail</Title>
      </Box>

      <input onChange={(e)=>{ setInputSearch(e.target.value) }} />

      <div className={`my-alert ${isHide ? "hide": ""}`}>
        <p>재고가 얼마 남지 않았습니다</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(targetShoes.id)+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{targetShoes.title}</h4>
          <p>{targetShoes.content}</p>
          <p>{targetShoes.price}원</p>
          <Inventory count={inventory[id]} />
          <button className="btn btn-danger" onClick={() => {
            let _inventory = [...inventory]
            _inventory[id] -= 1
            setInventory(_inventory)
          } }>주문하기</button>
          <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

function Inventory({ count }) {
  return (
    <p>재고 : {count}</p>
  )
}

export default Detail;