import { OrderType } from "../../redux/cardSlice";

export default function Order({ order }: OrderType): JSX.Element  {

    return (
      <div>
        <div>Идентификатор пользователя: {order.userId}</div>
        <div>{order.userName}</div>
        <div>{order.address}</div>
      </div>
    )
  }