import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">Company: {product.company}</Typography>
              <Typography variant="body2">Category: {product.category}</Typography>
              <Typography variant="body2">Price: ${product.price}</Typography>
              <Typography variant="body2">Rating: {product.rating}</Typography>
              <Typography variant="body2">Discount: {product.discount}%</Typography>
              <Typography variant="body2">Availability: {product.availability ? "In Stock" : "Out of Stock"}</Typography>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
