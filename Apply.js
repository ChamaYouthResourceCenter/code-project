import React, { useState } from "react";
import '../styles/Apply.css';

function Apply() {
  const [formData, setFormData] = useState({
    program: "",
    firstName: "",
    lastName: "",
    nrcNumber: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const programs = [
    "Design Cutting & Tailoring",
    "Bricklaying & Plastering",
    "Carpentry & Joinery",
    "Computer Studies",
    "Farming & Agriculture"
  ];

  const sendEmailNotification = (applicationData) => {
    const notification = {
      type: 'new_application',
      data: applicationData,
      timestamp: new Date().toISOString(),
      read: false
    };

    const notifications = JSON.parse(localStorage.getItem('adminNotifications')) || [];
    notifications.push(notification);
    localStorage.setItem('adminNotifications', JSON.stringify(notifications));

    console.log('Email notification would be sent for:', applicationData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedForms = JSON.parse(localStorage.getItem("submittedForms")) || [];

    // Duplicate check
    const isDuplicate = submittedForms.find(
      form =>
        form.nrcNumber === formData.nrcNumber ||
        form.email === formData.email
    );

    if (isDuplicate) {
      setMessage("⚠️ You have already submitted your application.");
      setMessageType("error");
      return;
    }

    // Save form
    submittedForms.push(formData);
    localStorage.setItem("submittedForms", JSON.stringify(submittedForms));

    // Send email notification
    sendEmailNotification(formData);

    setMessage("✅ Application submitted successfully!");
    setMessageType("success");

    // Reset form
    setFormData({
      program: "",
      firstName: "",
      lastName: "",
      nrcNumber: "",
      dateOfBirth: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      address: ""
    });
  };

  return (
    <div className="apply-container">
      <h1>Fill In Your Details</h1>

      {message && (
        <div className={`form-message ${messageType === "error" ? "error-message" : "success-message"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="application-form">
        {/* Program Selection */}
        <div className="form-group">
          <label htmlFor="program">Select Program:</label>
          <select 
            id="program"
            name="program"
            value={formData.program}
            onChange={handleSelectChange}
            required
          >
            <option value="">Select a program</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>{program}</option>
            ))}
          </select>
        </div>

        {/* Personal Information */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName"
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName"
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nrcNumber">NRC Number:</label>
          <input 
            type="text" 
            id="nrcNumber"
            name="nrcNumber"
            value={formData.nrcNumber} 
            onChange={handleChange}
            required
            placeholder="e.g., 123456/78/9"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input 
            type="date" 
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input 
            type="number" 
            id="age"
            name="age"
            value={formData.age} 
            onChange={handleChange}
            required
            min="16"
            max="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select 
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleSelectChange}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email} 
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            value={formData.phone} 
            onChange={handleChange}
            required
            placeholder="+260 XXX XXX XXX"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea 
            id="address"
            name="address"
            value={formData.address} 
            onChange={handleChange}
            required
            rows="3"
            placeholder="Enter your full address"
          />
        </div>

        {/* Submit Button */}
        <div className="form-group submit-button-container">
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default Apply;