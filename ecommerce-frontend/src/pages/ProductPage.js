import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Typography, Container } from '@mui/material';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="body1">Company: {product.company}</Typography>
      <Typography variant="body1">Category: {product.category}</Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
      <Typography variant="body1">Rating: {product.rating}</Typography>
      <Typography variant="body1">Discount: {product.discount}%</Typography>
      <Typography variant="body1">Availability: {product.availability ? "In Stock" : "Out of Stock"}</Typography>
    </Container>
  );
};

export default ProductPage;
