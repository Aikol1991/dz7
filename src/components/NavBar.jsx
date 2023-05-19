import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/ProductsReducer";
import { NavLink, Outlet } from "react-router-dom";
const NavBar  = () => {
    const dispatch = useDispatch();
    const {count} = useSelector(state => state.cart)

    useEffect(() => {
        dispatch (fetchProducts())
    }, [dispatch])
    return (
        <>
        <div>
            <NavLink to={'/'}>
                <h3>Главная страница</h3>
            </NavLink>
            <NavLink to={'/cart'}>
                <h3>Корзина({count})</h3>
            </NavLink>

        </div>
        <Outlet/>
        </>
    )
}

export default NavBar;