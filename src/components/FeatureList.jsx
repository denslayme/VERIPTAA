import React from 'react';

function FeatureList({ systemName, description, features }) {
  return (
    <div className="left">
      <div className="tag">SECURE • VERIFIED • TRUSTED</div>
      <h1>{systemName}</h1>
      <p className="desc">{description}</p>
      <div className="list">
        <h3>SYSTEM FEATURES</h3>
        {/* Lab 3: Rendering array using .map() */}
        {features.map((item, i) => (
          <div key={i} className="item">
            <span className="check">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureList;