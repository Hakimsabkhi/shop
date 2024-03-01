import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroupe,
  Image,
  From,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Massage";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";

const OrderScreen = () => {

  const { id: orderId} = useParams();
  const { data: order, refetch, isLoading, isError } = useGetOrderDetailsQuery(orderId);
  console.log(order);
  return <div>Orderscreen</div>;
};

export default OrderScreen;
