import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidPrice, isValidProductName } from '../Day1/Validations';
import './ProductForm.css'


const ProductForm = () => {
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the changed field is rating, ensure the value doesn't exceed 5
    if (name === 'rating') {
      if (value <= 5) {
        setProduct({
          ...product,
          [name]: value,
        });
      }
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {
      name: isValidProductName(product.name) ? '' : 'Please enter a valid product name.',
      price: isValidPrice(product.price) ? '' : 'Please enter a valid price.',
      category: product.category ? '' : 'Please select a category.',
      rating: product.rating ? '' : 'Please enter a rating.',
    };
    setErrors(validationErrors);

    if (Object.values(validationErrors).every(error => error === '')) {
      try {
        const response = await fetch('http://localhost:3000/Products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);
        alert('Product saved successfully!');
        setProduct({
          name: '',
          price: '',
          category: '',
          rating: '',
        });
        navigate('/products');
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while saving the product.');
      }
    }
  };

  return (
    <div className="form">
      <h2 className='form-title'>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Name" 
            value={product.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label><br />
          <input
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          >
          </input>
          
          {errors.price && <div className="error">{errors.price}</div>}
        </div>
<br />
<div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Toys">Toys</option>
          </select>
          {errors.category && <div className="error">{errors.category}</div>}
        </div>
        <div className="form-group" >
          <label htmlFor="rating"> Rating</label><br />
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="Rating"
            value={product.rating}
            onChange={handleChange}
          />
          {errors.rating && <div className="error">{errors.rating}</div>}

        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
