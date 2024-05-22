import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchOrders } from '../../redux/thunkActionsCard';
import Order from "../Order/Order";

export default function UserOrders() {
    const dispatch = useAppDispatch();
    const { orders } = useAppSelector((store) => store.cardSlice);

    useEffect(() => {
      dispatch(fetchOrders());
      console.log(orders);
    }, []);

  return (
    <div>
    {orders.length ? (
      orders.map((order) => (
        <Order key={order.id} order={order} />
      ))
    ) : (
      <h3>Нет новых заявок на получение пластиковой музейной карты</h3>
    )}
  </div>
  )
}
