import React from 'react';
import './BusinessSetup.scss';

const BusinessSetup: React.FC = () => {
  const businesses = [
    {
      type: "Retail",
      description: "These businesses sell physical products directly to consumers.",
      examples: "Clothing stores, grocery stores, electronics shops, bookstores.",
      features: "Clothing stores, grocery stores, electronics shops, bookstores."
    },
    {
      type: "Service",
      description: "These businesses offer services rather than physical products.",
      examples: "Salons, spas, repair shops, cleaning services, consulting firms.",
      features: "Appointment scheduling, service management, customer database, invoicing, time tracking, employee management."
    },
    {
      type: "Food and Beverages",
      description: "These businesses provide food and drink services.",
      examples: "Restaurants, cafes, bars, food trucks.",
      features: "Table management, menu management, kitchen order management, split billing, tipping options, inventory tracking for ingredients."
    },
    {
      type: "Hospitality",
      description: "These businesses provide lodging and associated services.",
      examples: "Hotels, motels, bed and breakfasts, inns.",
      features: "Room and reservation management, guest check-in/check-out, housekeeping management, in-room services, integration with property management systems (PMS)."
    }
  ];

  return (
    <div className="business-setup">
      <h1>Welcome to [POS System Name]</h1>
      <p>Let's get your business set up quickly and easily</p>
      <h2>Please select the type of business you operate</h2>
      <div className="business-list">
        {businesses.map((business, index) => (
          <div className="business-card" key={index}>
            <h3>{business.type}</h3>
            <div className="business-description">
              <strong>Description:</strong>
              <p>{business.description}</p>
            </div>
            <div className="business-examples">
              <strong>Examples:</strong>
              <p>{business.examples}</p>
            </div>
            <div className="business-features">
              <strong>POS features:</strong>
              <p>{business.features}</p>
            </div>
            <button className="select-button">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSetup;
