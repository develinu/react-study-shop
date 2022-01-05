import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'



function Cart({ state, dispatch}) {
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
            state.map((item, idx) => {
              return <Item key={idx} item={item} dispatch={dispatch} />
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

const Item = ({ idx, item, dispatch }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={() => { dispatch({ type: 'add', id: item.id }) }}>
          +
        </button>
        <button onClick={() => { dispatch({ type: 'minus', id: item.id }) }}>
          -
        </button>
      </td>
    </tr>
  )
}

const convertStateToProps = (state => {
  return {
    state: state
  }
})

export default connect(convertStateToProps)(Cart)
// export default Cart