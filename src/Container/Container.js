import Datas from './Data'
import './Container.css'
import {Carts} from '../base'
import ReactDOM from 'react-dom/client';

function Container() {
    document.title = 'Home'

    const handleAddCart = (index,img,name,price) => {
        document.querySelector('.overlay-add-cart').style.display = 'block';
        document.querySelector('.Alrealdy-add-cart').style.display = 'block';
        const value = {
            id: index,
            img,
            name,
            price,
            sl: 1
        }
        let ktra = true
        Carts.forEach( c => {
            if(c.id === index) {
                ktra = false
            }
        })
        if(ktra) {
            Carts.push(value)
            const jsonJobs = JSON.stringify(Carts);
            localStorage.setItem('jobs',jsonJobs)
        }
        else{
            Carts.forEach( c => {
                if(c.id === index) {
                    c.sl += 1
                }
            })
            const jsonJobs = JSON.stringify(Carts);
            localStorage.setItem('jobs',jsonJobs)
        }
        const AddCart = () => {
            return (
                <div className="Wrap-cart-show">
                    {Carts.map(c => (
                        <div className="cart-show-item" key={c.id}>
                            <img src={c.img} />
                            <h4>{c.name}</h4>
                            <p>{c.price}</p>
                        </div>
                    ))}
                </div>
            )
        }

        document.querySelector('.HeaderDown-Right span').innerHTML = Carts.length

        const root = ReactDOM.createRoot(document.querySelector('.HeaderDown-Right-Show-wrap'));
        root.render(
            <AddCart />
        );
    }

    const handleXong = () => {
        document.querySelector('.overlay-add-cart').style.display = 'none';
        document.querySelector('.Alrealdy-add-cart').style.display = 'none';
    }

    return (
        <div className="Container">
            {Datas.map((Data,index) => (
                <div key={index} data={index} className="Container-item">
                    <img src={Data.img} />
                    <h3>{Data.name}</h3>
                    <p>{Data.price}</p>
                    <button 
                        onClick={() => handleAddCart(index,Data.img,Data.name,Data.price)}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            ))}

            <div className="overlay-add-cart"></div>
            <div className="Alrealdy-add-cart">
                <h1>Đã thêm vào giỏ hàng</h1>
                <button onClick={handleXong}>Xong</button>
            </div>
        </div>
    )
}

export default Container