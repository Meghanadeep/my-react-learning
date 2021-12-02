import React , {useState} from 'react';
import './index.css';

const BooksList = () => {
    const [buybooks, setBuyBooks] = useState([]);
    const [sellBooks, setSellBooks] = useState([]);
    const randomGen = (type) => {
        const newBook =  {
            id: Math.random(),
            size: Math.random(),
            price: 37000 + Math.random() * 2000
        }
        if(type === 'buybooks') {
            setBuyBooks((prevBooks) => {
                return [...prevBooks, newBook];
            })
        }
        if(type === 'sellBooks') {
            setSellBooks((prevBooks) => {
                return [...prevBooks, newBook];
            })
        }

    }
    return (
        <div className="buySell-container">
            <button className="buy" onClick={() => randomGen('buybooks')}>Buy</button>
            <button className="sell" onClick={() => randomGen('sellBooks')}>Sell</button>
            <div className="order-table">
            <div className="sell-rows">
              <ul>
                {sellBooks.map((book) => {
                    return (<li className="indvLiItem"><span className="bookId">{book.id}</span><span className="bookPriceSell">{book.price}</span></li>)
                })}
             </ul>
            </div> 
            <hr className="horizontal-seperator"/>    
            <div className="buy-rows">
                <ul>
                {buybooks.map((book) => {
                 return (<li className="indvLiItem"><span className="bookId">{book.id}</span><span className="bookPriceBuy">{book.price}</span></li>)
              })}
                </ul>

            </div>

            </div>
        </div>
    )
}

export default BooksList
