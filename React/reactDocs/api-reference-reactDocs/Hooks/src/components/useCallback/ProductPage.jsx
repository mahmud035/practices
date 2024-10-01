import React, { useCallback } from 'react';

const ProductPage = ({ productId, referrer, theme }) => {
  const handleSubmit = useCallback(() => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return <div></div>;
};

export default ProductPage;
