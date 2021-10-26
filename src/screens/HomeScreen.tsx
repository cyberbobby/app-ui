import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Store } from '../store';
import { Product as ProductInterface } from '../constants/interfaces';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: Store) => state.products
  );

  const [productsState, setProductsState] = useState({
    products: [] as ProductInterface[],
  });

  useEffect(() => {
    setProductsState({ products: products });
  }, [products]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {productsState.products.map((product: ProductInterface) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
