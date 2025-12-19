import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('fees');
  const [applications, setApplications] = useState([]);
  const [fees, setFees] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isManagerLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    // Load applications
    const storedApplications = JSON.parse(localStorage.getItem('submittedForms')) || [];
    setApplications(storedApplications);

    // Load fees from localStorage or set defaults
    const storedFees = JSON.parse(localStorage.getItem('programFees')) || getDefaultFees();
    setFees(storedFees);
  }, [navigate]);

  const getDefaultFees = () => ({
    carpentry: {
      programName: "Carpentry & Joinery",
      tuition: 3500,
      ppe: 1000,
      accommodation: 1500,
      meals: 1500,
      otherRequirements: "NRC, 2 Passport Size Photos, 1 Hard Cover Exercise book"
    },
    tailoring: {
      programName: "Design Cutting & Tailoring",
      tuition: 3500,
      ppe: 1000,
      accommodation: 1500,
      meals: 1500,
      otherRequirements: "NRC, 2 Passport Size Photos, 1 Hard Cover Exercise book"
    },
    bricklaying: {
      programName: "Bricklaying & Plastering",
      tuition: 3500,
      ppe: 1000,
      accommodation: 1500,
      meals: 1500,
      otherRequirements: "NRC, 2 Passport Size Photos, 1 Hard Cover Exercise book"
    },
    computer: {
      programName: "Computer Studies (ICT)",
      tuition: 3500,
      labCoat: 400,
      accommodation: 1500,
      meals: 1500,
      otherRequirements: "NRC, 2 Passport Size Photos, Copies of Grade 9 or 12 Results, 1 Hard Cover Exercise book"
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('isManagerLoggedIn');
    navigate('/');
  };

  const updateFees = (program, field, value) => {
    const updatedFees = {
      ...fees,
      [program]: {
        ...fees[program],
        [field]: field === 'tuition' || field === 'ppe' || field === 'labCoat' || field === 'accommodation' || field === 'meals' 
          ? parseInt(value) || 0 
          : value
      }
    };
    setFees(updatedFees);
    localStorage.setItem('programFees', JSON.stringify(updatedFees));
  };

  const deleteApplication = (index) => {
    const updatedApplications = applications.filter((_, i) => i !== index);
    setApplications(updatedApplications);
    localStorage.setItem('submittedForms', JSON.stringify(updatedApplications));
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <p>Chama Youth Resource Center - Fee Management</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      <div className="admin-nav">
        <button 
          className={activeTab === 'fees' ? 'active' : ''}
          onClick={() => setActiveTab('fees')}
        >
          💰 Manage Fees
        </button>
        <button 
          className={activeTab === 'applications' ? 'active' : ''}
          onClick={() => setActiveTab('applications')}
        >
          📋 Applications ({applications.length})
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'fees' && (
          <FeesTab 
            fees={fees}
            onUpdate={updateFees}
          />
        )}

        {activeTab === 'applications' && (
          <ApplicationsTab 
            applications={applications} 
            onDelete={deleteApplication}
          />
        )}
      </div>
    </div>
  );
}

// Fees Management 
function FeesTab({ fees, onUpdate }) {
  const programs = [
    { key: 'carpentry', label: 'Carpentry & Joinery', icon: '🔨' },
    { key: 'tailoring', label: 'Design Cutting & Tailoring', icon: '🧵' },
    { key: 'bricklaying', label: 'Bricklaying & Plastering', icon: '🧱' },
    { key: 'computer', label: 'Computer Studies (ICT)', icon: '💻' }
  ];

  return (
    <div className="tab-content">
      <h2>Program Fees Management</h2>
      <p className="tab-description">Update fees and requirements for each program. Changes will reflect immediately on the website.</p>
      
      <div className="fees-grid">
        {programs.map((program) => (
          <div key={program.key} className="fee-card">
            <div className="fee-card-header">
              <span className="program-icon">{program.icon}</span>
              <h3>{fees[program.key]?.programName || program.label}</h3>
            </div>
            
            <div className="fee-fields">
              <div className="fee-field">
                <label>Tuition Fee (K)</label>
                <input
                  type="number"
                  value={fees[program.key]?.tuition || 0}
                  onChange={(e) => onUpdate(program.key, 'tuition', e.target.value)}
                  min="0"
                />
              </div>

              {(program.key === 'carpentry' || program.key === 'tailoring' || program.key === 'bricklaying') && (
                <div className="fee-field">
                  <label>PPE Fee (K)</label>
                  <input
                    type="number"
                    value={fees[program.key]?.ppe || 0}
                    onChange={(e) => onUpdate(program.key, 'ppe', e.target.value)}
                    min="0"
                  />
                </div>
              )}

              {program.key === 'computer' && (
                <div className="fee-field">
                  <label>Lab Coat Fee (K)</label>
                  <input
                    type="number"
                    value={fees[program.key]?.labCoat || 0}
                    onChange={(e) => onUpdate(program.key, 'labCoat', e.target.value)}
                    min="0"
                  />
                </div>
              )}

              <div className="fee-field">
                <label>Accommodation (K)</label>
                <input
                  type="number"
                  value={fees[program.key]?.accommodation || 0}
                  onChange={(e) => onUpdate(program.key, 'accommodation', e.target.value)}
                  min="0"
                />
              </div>

              <div className="fee-field">
                <label>Meals Allowance (K)</label>
                <input
                  type="number"
                  value={fees[program.key]?.meals || 0}
                  onChange={(e) => onUpdate(program.key, 'meals', e.target.value)}
                  min="0"
                />
              </div>

              <div className="fee-field full-width">
                <label>Other Requirements</label>
                <textarea
                  value={fees[program.key]?.otherRequirements || ''}
                  onChange={(e) => onUpdate(program.key, 'otherRequirements', e.target.value)}
                  rows="3"
                  placeholder="Enter program requirements..."
                />
              </div>
            </div>

            <div className="fee-total">
              <strong>Total Fees: K{fees[program.key] ? 
                (fees[program.key].tuition + 
                 (fees[program.key].ppe || fees[program.key].labCoat || 0) + 
                 fees[program.key].accommodation + 
                 fees[program.key].meals) 
                : 0}
              </strong>
            </div>
          </div>
        ))}
      </div>

      <div className="bank-details-section">
        <h3>Bank Account Details</h3>
        <div className="bank-details">
          <div className="bank-field">
            <label>Account Name</label>
            <input type="text" value="Chama Youth Resource Center" readOnly />
          </div>
          <div className="bank-field">
            <label>Bank Name</label>
            <input type="text" value="National Savings And Credit Bank (NATSAVE)" readOnly />
          </div>
          <div className="bank-field">
            <label>Branch</label>
            <input type="text" value="CHAMA" readOnly />
          </div>
          <div className="bank-field">
            <label>Account Number</label>
            <input type="text" value="2011752076701" readOnly />
          </div>
          <div className="bank-field">
            <label>Branch Code</label>
            <input type="text" value="585903" readOnly />
          </div>
          <div className="bank-field">
            <label>Swift Code</label>
            <input type="text" value="lnzazmo" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

// Applications Tab Component (Simplified)
function ApplicationsTab({ applications, onDelete }) {
  return (
    <div className="tab-content">
      <h2>Student Applications</h2>
      {applications.length === 0 ? (
        <div className="no-data">
          <p>No applications received yet.</p>
          <p>Applications will appear here when students submit forms.</p>
        </div>
      ) : (
        <div className="applications-grid">
          {applications.map((application, index) => (
            <div key={index} className="application-card">
              <h3>{application.firstName} {application.lastName}</h3>
              <p><strong>Program:</strong> {application.program}</p>
              <p><strong>NRC:</strong> {application.nrcNumber}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone || 'Not provided'}</p>
              <p><strong>Gender:</strong> {application.gender}</p>
              <p><strong>Age:</strong> {application.age}</p>
              <div className="application-actions">
                <button 
                  className="delete-btn"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;