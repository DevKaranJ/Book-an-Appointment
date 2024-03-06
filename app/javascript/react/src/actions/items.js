import axios from 'axios';

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_ITEMS_REQUEST' });
    const response = await axios.get('http://localhost:3000/items');
    dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
  }
};