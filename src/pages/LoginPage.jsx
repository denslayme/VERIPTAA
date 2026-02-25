import React from 'react';
import AuthHeader from '../components/AuthHeader';
import FeatureList from '../components/FeatureList';
import '../styles/Auth.css';

function LoginPage() {

  // Lab 2: Object - system information
  const system = {
    name: 'VERIPTA',
    description: 'PTA Payment Verification System',
    campus: 'USTP - CDO Campus'
  };

  // Lab 2: Array - list of system features
  const features = [
    'Secure Payment Verification',
    'Real-time Transaction Monitoring',
    'Automated Receipt Processing',
  ];

  return (
    <div className="page">

      {/* LEFT SIDE - passes data via props to FeatureList component */}
      <FeatureList
        systemName={system.name}
        description={system.description}
        features={features}
      />

      {/* RIGHT SIDE - login form (static, no logic yet) */}
      <div className="right">
        <div className="box">

          {/* Reusable AuthHeader component with props */}
          <AuthHeader
            title={system.name}
            description={system.description}
            campus={system.campus}
          />

          {/* Tab buttons - static display only in Lab 2 */}
          <div className="tabs">
            <button className="active">Login</button>
            <button>Sign Up</button>
          </div>

          {/* Static form - no state/logic yet */}
          <form>
            <div className="group">
              <label>ID Number</label>
              <input type="text" placeholder="Enter ID Number" />
            </div>
            <div className="group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <button type="button" className="btn">Login</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;