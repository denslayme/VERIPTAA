import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#16163F', fontSize: '32px', fontWeight: '800' }}>
          VERIPTA
        </h1>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>
          Dashboard — Coming Soon
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '24px',
            background: 'linear-gradient(135deg, #f59e0b, #f3880e)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;