// ============================================
// PAGE COMPONENT - LoginPage
// Lab 4: Controlled inputs with useState ✓
// Lab 4: Form handling with handleSubmit ✓
// Lab 4: Navigation using useNavigate ✓
// Lab 4: Visible UI updates from state ✓
// Lab 5: Accessible form inputs (htmlFor/id) ✓
// ============================================
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader';
import FeatureList from '../components/FeatureList';
import '../styles/Auth.css';

function LoginPage() {

  const [activeTab, setActiveTab] = useState('login');
  const [idnumber, setIDNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  function handleSubmit(e) {
    e.preventDefault();
    if (activeTab === 'login') {
      navigate('/dashboard');
    } else {
      alert('Account created for: ' + idnumber);
      setActiveTab('login');
    }
  }

  return (
    <div className="page">

      <FeatureList
        systemName={system.name}
        description={system.description}
        features={features}
      />

      <div className="right">
        <div className="box">

          <AuthHeader
            title={system.name}
            description={system.description}
            campus={system.campus}
          />

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

          <form onSubmit={handleSubmit}>
            <div className="group">
              {/* Lab 5: htmlFor and id added for accessibility */}
              <label htmlFor="idnumber">ID Number</label>
              <input
                id="idnumber"
                type="text"
                placeholder="Enter ID Number"
                value={idnumber}
                onChange={(e) => setIDNumber(e.target.value)} required />
            </div>

            {activeTab === 'signup' && (
              <div className="group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>
            )}

            <div className="group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder={activeTab === 'login' ? 'Enter password' : 'Create password'}
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