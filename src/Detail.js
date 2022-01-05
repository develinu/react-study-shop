import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import './Detail.scss'
import styled from 'styled-components'
import { inventoryContext } from './App'
import { Nav } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'


let Box = styled.div`
  padding : 20px;
`

let Title = styled.div`
  font-size: 25px;
  color: ${props => props.color}
`

const Detail = ({ shoes, setInventory, dispatch }) => {

  let inventory = useContext(inventoryContext)

  let { id } = useParams()
  let history = useHistory()
  const targetShoes = shoes.find(_shoes => _shoes.id === parseInt(id))
  const [isHide, setIsHide] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const [tabId, setTabId] = useState(0)
  const [wowTransitionFlag, setWowTransitionFlag] = useState(false)
  
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

      {/* <input onChange={(e)=>{ setInputSearch(e.target.value) }} /> */}

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
            dispatch(
              { 
                type: 'addItem', 
                item: {
                  id: id,
                  name: "TEST",
                  quantity: 10
                }
              }
            )
            history.push('/cart')
          } }>주문하기</button>
          <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={() => { setWowTransitionFlag(false); setTabId(0) }}>link-0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => { setWowTransitionFlag(false); setTabId(1) }}>link-1</Nav.Link>
      </Nav.Item>
    </Nav>

    <CSSTransition in={wowTransitionFlag} classNames="wow" timeout={500}>
      <TabContent id={tabId} setWowTransitionFlag={setWowTransitionFlag} />
    </CSSTransition>

    </div>
  )
}

function TabContent({ id, setWowTransitionFlag }) {

  useEffect(() => {
    setWowTransitionFlag(true)
  })
  const contentMap = {
    0: <div>0 번째 내용입니다</div>,
    1: <div>1 번째 내용입니다</div>,
    2: <div>2 번째 내용입니다</div>
  }
  return contentMap[id]
}

function Inventory({ count }) {
  return (
    <p>재고 : {count}</p>
  )
}

const convertStateToProps = (state => {

  return {
    state: state.reducer,
    isAlert: state.reducer2
  }
})

export default connect(convertStateToProps)(Detail)