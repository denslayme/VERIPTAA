import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader';
import FeatureList from '../components/FeatureList';
import '../styles/Auth.css';

function LoginPage() {

  // Lab 4: Component-level state management
  const [activeTab, setActiveTab] = useState('login');
  const [idnumber, setIDNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Lab 4: Client-side navigation
  const navigate = useNavigate();

  const system = {
    name: 'VERIPTA',
    description: 'PTA Payment Verification System',
    campus: 'USTP - CDO Campus'
  };

  const features = [
    'Secure Payment Verification',
    'Real-time Transaction Monitoring',
    'Automated Receipt Processing',
  ];

  // Lab 4: Form submission - triggers navigation
  function handleSubmit(e) {
    e.preventDefault();
    if (activeTab === 'login') {
      // Lab 4: Navigate to second page (client-side routing)
      navigate('/dashboard');
    } else {
      alert('Account created for: ' + idnumber);
      setActiveTab('login');
    }
  }

  return (
    <div className="page">

      {/* LEFT SIDE - Reusable FeatureList component */}
      <FeatureList
        systemName={system.name}
        description={system.description}
        features={features}
      />

      <div className="right">
        <div className="box">

          {/* Reusable AuthHeader component */}
          <AuthHeader
            title={system.name}
            description={system.description}
            campus={system.campus}
          />

          {/* Lab 4: Tab switching - visible UI update from state */}
          <div className="tabs">
            <button
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => setActiveTab('login')}
            >Login</button>
            <button
              className={activeTab === 'signup' ? 'active' : ''}
              onClick={() => setActiveTab('signup')}
            >Sign Up</button>
          </div>

          {/* Lab 4: Controlled form inputs using useState */}
          <form onSubmit={handleSubmit}>
            <div className="group">
              <label>ID Number</label>
              {/* Lab 4: Controlled input - value tied to state */}
              <input type="text" placeholder="Enter ID Number"
                value={idnumber}
                onChange={(e) => setIDNumber(e.target.value)} required />
            </div>
            {activeTab === 'signup' && (
              <div className="group">
                <label>Email</label>
                <input type="email" placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>
            )}
            <div className="group">
              <label>Password</label>
              <input type="password"
                placeholder={activeTab === 'login' ? 'Enter Password' : 'Create Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn">
              {activeTab === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;