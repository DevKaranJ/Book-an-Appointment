// components/Items.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../actions/items';

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const loading = useSelector((state) => state.items.loading);
  const error = useSelector((state) => state.items.error);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;