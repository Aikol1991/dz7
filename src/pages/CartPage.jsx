import { useSelector } from "react-redux";

function CartPage () {
const {items} = useSelector(state => state.cart)
return(
    <div>
        <h2>Корзина</h2>
        <div>
            {
                items.map(item => (
                    <div key={item.id}>
                       <h4>Продукт:{item.name}:{item.quantity} шт.</h4>
                       <p>Цена:{item.price}</p>

                    </div>
                ))
            }
        </div>
    </div>
)
}
export default CartPage;