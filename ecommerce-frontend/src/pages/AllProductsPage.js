import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', rating: '', priceRange: '', availability: '' });
  const [sortBy, setSortBy] = useState('price');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await fetchProducts(filters.company, filters.category, 10, 1, 10000); // Example parameters
        setProducts(data);
        // Calculate total pages based on data length and items per page
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchAllProducts();
  }, [filters, sortBy, page]);

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <ProductList products={products} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default AllProductsPage;
