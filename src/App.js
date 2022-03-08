import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// import Matrix from './components/Matrix';
import Shopping from './components/Shopping';

const App = () => {

  const [products, getProducts] = useState([]);

  const fetchProducts = () => {

    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=> {
            const products = json;
            getProducts(products);
            console.log(products);
          })
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Shopping products={products}></Shopping>
      {/* <Matrix></Matrix> */}
    </div>
  );
}

export default App;
