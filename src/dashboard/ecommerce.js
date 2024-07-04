import React, { useState } from 'react';
import '../App.css';

const products = [
    { id: 1, title: 'Kiwi', price: 2.5, image: 'kiwi.jpg' },
    { id: 2, title: 'Tomato', price: 1.5, image: 'tomato.webp' },
    { id: 3, title: 'Apple', price: 3.0, image: 'apple.avif' },
    { id: 4, title: 'Banana', price: 1.0, image: 'banana.jpg' },
    { id: 5, title: 'Orange', price: 2.0, image: 'orange.jpg' },
    { id: 6, title: 'Strawberry', price: 4.0, image: 'strawberry.jpg' },
  ];
  

const Dash = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const updatedProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="app">
      <h1>Ecommerce app by ProjectGurukul</h1>
      <div className="search-container">
        <input
          className='search'
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="product-container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={`/images/${product.image}`} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dash;
