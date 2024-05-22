import React, { useState, useEffect } from "react";
import "./Product.css";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("0-499");
  const [rating, setRating] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
 const navigate=useNavigate()
  useEffect(() => {
    fetch("http://localhost:3000/Products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const applyFilters = () => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-");
      filtered = filtered.filter(
        (product) =>
          product.price >= parseInt(minPrice) &&
          (maxPrice ? product.price <= parseInt(maxPrice) : true)
      );
    }

    if (rating) {
      filtered = filtered.filter((product) => product.rating >= rating);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    console.log("Filtered products:", filtered);
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const matchedSuggestions = products
        .filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
        .map((product) => product.name);
      setSuggestions(matchedSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <h1>Product List</h1>
      <div className="filter-container">
        <Row className="align-items-center">
          <Col>
            <div className="filter" style={{paddingTop: "10px"}}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                list="productSuggestions" // This associates the input with the datalist
                placeholder="Search by product name"
                onBlur={() => setTimeout(() => setSuggestions([]), 100)} // Hide suggestions on blur
              />
              {suggestions.length > 0 && (
                <datalist id="productSuggestions">
                  {suggestions.map((suggestion, index) => (
                    <option key={index} value={suggestion} />
                  ))}
                </datalist>
              )}
            </div>
          </Col>
          <Col>
            <div className="filter">
              <label htmlFor="category">Filter by Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </Col>
          <Col>
            <div className="filter">
              <label htmlFor="price">Filter by Price Range:</label>
              <select
                id="price"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="0-499">0 - 499</option>
                <option value="500-999">500 - 999</option>
                <option value="1000-1999">1000 - 1999</option>
                <option value="2000-4999">2000 - 4999</option>
                <option value="5000-">5000 & Above</option>
              </select>
            </div>
          </Col>
          <Col>
            <div className="filter">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="0">All Ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </Col>
          <Col>
            <div style={{paddingTop: "20px"}}>
              <button type="button" onClick={applyFilters}>
                Search
              </button>
              {/* <button onClick={Example}>Button</button> */}
            </div>
          </Col>
        </Row>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {filteredProducts.map((product) => (
  <tr key={product.id} onClick={() => handleProductClick(product.id)}>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.category}</td>
    <td>{product.rating}</td>
    <td><img src={product.image} alt={product.name} style={{width: "100px"}}/></td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
