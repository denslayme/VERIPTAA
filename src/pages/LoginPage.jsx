import React, { useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import FeatureList from '../components/FeatureList';
import '../styles/Auth.css';

function LoginPage() {

  // Lab 3: Interactive UI behavior - tab switching
  const [activeTab, setActiveTab] = useState('login');

  // Object - system information passed as props
  const system = {
    name: 'VERIPTA',
    description: 'PTA Payment Verification System',
    campus: 'USTP - CDO Campus'
  };

  // Array - features list passed as props
  const features = [
    'Secure Payment Verification',
    'Real-time Transaction Monitoring',
    'Automated Receipt Processing',
  ];

  return (
    <div className="page">

      {/* LEFT SIDE - Reusable FeatureList component with props */}
      <FeatureList
        systemName={system.name}
        description={system.description}
        features={features}
      />

      {/* RIGHT SIDE - login/signup form */}
      <div className="right">
        <div className="box">

          {/* Reusable AuthHeader component with props */}
          <AuthHeader
            title={system.name}
            description={system.description}
            campus={system.campus}
          />

          {/* Lab 3: Interactive tab switching - visible UI update on click */}
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

          {/* Form - no controlled inputs yet*/}
          <form>
            <div className="group">
              <label>ID Number</label>
              <input type="text" placeholder="Enter ID Number" />
            </div>
            {/* Lab 3: Conditional rendering based on active tab */}
            {activeTab === 'signup' && (
              <div className="group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
              </div>
            )}
            <div className="group">
              <label>Password</label>
              <input type="password"
                placeholder={activeTab === 'login' ? 'Enter password' : 'Create password'} />
            </div>
            <button type="button" className="btn">
              {activeTab === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;