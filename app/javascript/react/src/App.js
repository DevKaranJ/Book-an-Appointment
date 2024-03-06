import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from './actions/items';
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('login');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <button className={`btn btn-${activeTab === 'login' ? 'primary' : 'secondary'}`} onClick={() => handleTabChange('login')}>Login</button>
        <button className={`btn btn-${activeTab === 'signup' ? 'primary' : 'secondary'}`} onClick={() => handleTabChange('signup')}>Sign Up</button>
      </div>
      <h1 className="text-center mb-4">{activeTab === 'login' ? 'Login' : 'Sign Up'}</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {activeTab === 'login' ? <Login /> : <SignUp />}
        </div>
      </div>
      <div>
        {items.length > 0 && items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;