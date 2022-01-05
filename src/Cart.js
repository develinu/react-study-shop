import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'



function Cart() {

  const { alertReducer, shoesReducer } = useSelector((state) => state)
  let dispatch = useDispatch()

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            shoesReducer.map((item, idx) => {
              return <Item key={idx} item={item} dispatch={dispatch} />
            })
          }
        </tbody>
      </Table>
      {
        alertReducer.isAlert
        ? <div className="my-alert2">
            <p> 지금 구하면 신규할인 20% </p>
            <button onClick={ () => { dispatch({ type: 'close' })} }>닫기</button>
          </div>
        : null
      }
      
    </div>
  )
}

const Item = ({ item, dispatch }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={() => { dispatch({ type: 'minus', id: item.id }) }}>
          -
        </button>
        <button onClick={() => { dispatch({ type: 'add', id: item.id }) }}>
          +
        </button>
      </td>
    </tr>
  )
}

export default Cart