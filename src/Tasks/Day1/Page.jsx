import React, { useState, useEffect } from "react";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Number of products per page

  useEffect(() => {
    // Fetch product data including thumbnails, names, and descriptions
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Products);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle thumbnail click to open image or file
  const handleThumbnailClick = (imageUrl) => {
    // Open image or file based on imageUrl
    window.open(imageUrl); // Opens in a new tab
  };

  return (
    <div>
      <h1>Product List</h1>

      <div className="products">
        {currentProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.thumbnailUrl}
              alt={product.name}
              onClick={() => handleThumbnailClick(product.imageUrl)}
              style={{ cursor: "pointer" }} // Change cursor to pointer
            />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
