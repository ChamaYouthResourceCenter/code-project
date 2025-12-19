import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/fees.css';

function TailoringFees() {
  const [fees, setFees] = useState(null);

  useEffect(() => {
    const storedFees = JSON.parse(localStorage.getItem('programFees')) || {};
    setFees(storedFees.tailoring);
  }, []);

  if (!fees) {
    return <div className="fees-container">Loading...</div>;
  }

  return (
    <div className="fees-container">
      <h1>Design Cutting & Tailoring – Fees & Details</h1>

      <div className="fees-box">
        <p><strong>Program Duration:</strong> 3 Months</p>
        <p><strong>Training Mode:</strong> Practical + Theory</p>
        <p><strong>Requirements:</strong> {fees.otherRequirements}</p>

        <h2>Fees Structure</h2>
        <ul>
          <li>Tuition Fee: K{fees.tuition}</li>
          <li>PPE: K{fees.ppe}</li>
        </ul>
        
        <p>For those coming from distant residents or districts to consider the following:</p>
        <ul>
          <li>Accommodation Allowance: K{fees.accommodation}</li>
          <li>Meal Allowance: K{fees.meals}</li>
        </ul>

        <h3>Total Estimated Cost: K{fees.tuition + fees.ppe + fees.accommodation + fees.meals}</h3>

        <h3>Account Details</h3>
        <ul>
          <li>Account Name: Chama Youth Resource Center</li>
          <li>Bank Name: National Savings And Credit Bank (NATSAVE)</li>
          <li>Branch: CHAMA</li>
          <li>Account Number: 2011752076701</li>
          <li>Branch Code: 585903</li>
          <li>Swift Code: lnzazmo</li>
        </ul>
      </div>

      <Link to="/apply" className="apply-btn">Apply Now</Link>
    </div>
  );
}

export default TailoringFees;