import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/CartReducer";

const ProductsList = () => {
    const dispatch = useDispatch();
    const {products,loading,error} = useSelector(state => state.products)

    const clickButton = (product) => {
        dispatch(addToCart (product)) 
    }
    if (loading) return <h3>Данные загружаются</h3>
    if (error) return <h3>{error}</h3>

    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id}>
                                <h3>{product.name}</h3>
                                <p>цена:{product.price} $</p>
                                <button onClick={()=> clickButton(product)}>добавить в корзину</button>
                    </div>
                ))
            }
        </div>
    )
} 

export default ProductsList;