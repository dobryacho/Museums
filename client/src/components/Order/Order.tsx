import { OrderType } from "../../redux/cardSlice";

export default function Order({ order }: OrderType): JSX.Element  {

    return (
      <div>
        <h3>Запросы на получение пластиковых музейных карт</h3>
        <br/>
        <div>Идентификатор пользователя: {order.userId}</div>
        <div>Имя пользователя: {order.userName}</div>
        <div>Адрес: {order.address}</div>
        <br/>
      </div>
    )
  }