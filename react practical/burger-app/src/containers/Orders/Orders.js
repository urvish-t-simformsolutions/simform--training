import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../Axios-Orders'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (let keys in res.data) {
                    fetchOrders.push({
                        ...res.data[keys],
                        id: keys
                    })
                }
                this.setState({ loading: false, orders: fetchOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        )
    }
}

export default WithErrorHandler(Orders, axios)
