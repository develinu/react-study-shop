import React from 'react'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'



function Cart({ state }) {
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
          <tr>
            <td>1</td>
            <td>{state[0].id}</td>
            <td>{state[0].name}</td>
            <td>{state[0].quantity}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

const convertStateToProps = (state => {
  return {
    state: state
  }
})

export default connect(convertStateToProps)(Cart)
// export default Cart