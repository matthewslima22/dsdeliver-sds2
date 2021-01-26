import axios from "axios";
import Orders from "./Orders";
const API_URL = 'https://matthews-sds2.herokuapp.com';

export function fetchOrders(){
    return axios(`${API_URL}/orders`);
    
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}