import {Carts} from '../base'
import {Link} from 'react-router-dom'
import './CartPage.css'
import logo from '../Header/HeaderDown/img/logo.jpg'
import {useState} from 'react'


function CartPage() {
    document.title = 'Cart'
    const [count, setCount] = useState(1)

    const handleCong = (index) => {
        Carts[index].sl *= 1;
        Carts[index].sl += 1;
        const jsonJobs = JSON.stringify(Carts);
        localStorage.setItem('jobs',jsonJobs)

        setCount(count + 1);
    }
    const handleTru = (index) => {
        Carts[index].sl -= 1;
        if(Carts[index].sl <= 0){
           Carts.splice(index, 1);

        }
        const jsonJobs = JSON.stringify(Carts);
        localStorage.setItem('jobs',jsonJobs)
        setCount(count + 1);
    }
    const handleChange = (index,e) => {
        var tam;
        if(e.target.value <= 0 || e.target.value == '') tam = 0
        Carts[index].sl = e.target.value && tam;
        const jsonJobs = JSON.stringify(Carts);
        localStorage.setItem('jobs',jsonJobs)
        setCount(count + 1);
    }
    const handleDelete = (index) => {
        Carts.splice(index, 1);
        const jsonJobs = JSON.stringify(Carts);
        localStorage.setItem('jobs',jsonJobs)
        setCount(count + 1);
    }

    return (
        <>
            <div className="Cart-header">
                <div className="Cart-header-left">
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                    <h3>GIỎ HÀNG</h3>
                </div>
                <div className="Cart-header-right">
                    <input type="search" />
                    <button>Tìm</button>
                </div>
            </div>
            <div className="wrap-cart-item">
                {Carts.map((cart,index) => (
                    <div className="cart-item">
                        <input type="checkbox" />
                        <img src={cart.img} />
                        <h3>{cart.name}</h3>
                        <div className="count-cart">
                            <button onClick={() => handleTru(index)}>-</button>
                            <input value={cart.sl} onChange={(e) => handleChange(index,e)}/>
                            <button onClick={() => handleCong(index)}>+</button>
                        </div>
                        <p>{cart.price * cart.sl}</p>
                        <button onClick={() => handleDelete(index)}>Xóa</button>
                    </div>
                ))}

            </div>
        </>
    )
}

export default CartPage