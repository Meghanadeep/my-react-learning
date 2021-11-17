import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const InfiniteSCroll = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const loader = useRef(null);

    const handlerObserver = (entities) => {
       const target = entities[0];
       if(target.isIntersecting) {
        setPageNum((prevPage) => prevPage + 1) 
       }
    };

    useEffect(() => {
     var options = {
         root: null,
         rootMargin: "20px",
         threshold: 1.0
     };
     const observer = new IntersectionObserver(handlerObserver, options);
     if(loader.current) {
         observer.observe(loader.current);
     }
    }, [])

    useEffect(() => {
        fetch(`http://openlibrary.org/search.json?q=${query}&page=${pageNum}`)
        .then((response) => response.json())
        .then((data) => {
                setBooks((prevBooks) => {
                    return [...prevBooks, ...data.docs.map(b => b.title)]
                })
        })

    }, [query,pageNum])
    const handleSearch = (evt) => {
       setQuery(evt.target.value);
       setPageNum(1);
    }

    return (
        <div>
            <input className="textF" type="text" vallue={query} onChange={handleSearch}/>
            {books.map((book,index) => {
                return (<div key={`book-${index}`}>{book}</div>)
            })}
            
            {books.length >= 1 && <div ref={loader} className="loading"></div>}
        </div>
    )
}

export default InfiniteSCroll
