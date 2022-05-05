import './HeaderDown.css'
import {Link} from 'react-router-dom'
import logo from './img/logo.jpg'
import {Carts} from '../../base'

function HeaderDown() {
    return (
        <div className="HeaderDown">
            <div className="Wrap-HeaderDown">
                <div className="HeaderDown-Left">
                    <img src={logo} />
                </div>
                <div className="HeaderDown-Mid">
                    <input type="search"/>
                    <button>Tìm kiếm</button>
                </div>
                <div className="HeaderDown-Right">
                    <div className="div2">
                        <div className="div1">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            <span>{Carts.length}</span>
                        </div>
                        <div className="HeaderDown-Right-Show">
                            <div className="HeaderDown-Right-Show-wrap">
                                <div className="Wrap-cart-show">
                                        {Carts.map(c => (
                                            <div className="cart-show-item" key={c.id}>
                                                <img src={c.img} />
                                                <h4>{c.name}</h4>
                                                <p>{c.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            <div className='Seen-cart'>
                                <button>
                                    <Link to='/Cart'>
                                        Xem giỏ hàng
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDown