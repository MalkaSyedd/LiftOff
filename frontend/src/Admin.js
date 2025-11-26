import React, { useState } from "react";
import "./Admin.css";
console.log("Admin component mounted");


const sections = [
  "Dashboard",
  "Flights",
  "Bookings",
  "Users",
  "Sellers",
  "Support",
  "Payments",
  "Settings",
];

const Admin = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <>
            <h1>Dashboard</h1>
            <p>Overview of LiftOff system activity.</p>
          </>
        );
      case "Flights":
        return (
          <>
            <h1>Flights</h1>
            <p>Create and manage flights, update status.</p>
          </>
        );
      case "Bookings":
        return (
          <>
            <h1>Bookings</h1>
            <p>View, search, modify, or cancel bookings.</p>
          </>
        );
      case "Users":
        return (
          <>
            <h1>Users</h1>
            <p>Manage customer accounts and details.</p>
          </>
        );
      case "Sellers":
        return (
          <>
            <h1>Sellers</h1>
            <p>Manage airline/seller accounts and permissions.</p>
          </>
        );
      case "Support":
        return (
          <>
            <h1>Support</h1>
            <p>Handle customer support tickets.</p>
          </>
        );
      case "Payments":
        return (
          <>
            <h1>Payments</h1>
            <p>Monitor transactions and refunds.</p>
          </>
        );
      case "Settings":
        return (
          <>
            <h1>Settings</h1>
            <p>Update admin profile and system settings.</p>
          </>
        );
      default:
        return <h1>Welcome to Admin</h1>;
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">LiftOff Admin</h2>
        <nav className="admin-nav">
          {sections.map((section) => (
            <button
              key={section}
              className={
                "admin-nav-item" +
                (activeSection === section ? " admin-nav-item-active" : "")
              }
              onClick={() => setActiveSection(section)}
              type="button"
            >
              {section}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="admin-main">{renderContent()}</main>
    </div>
  );
};

export default Admin;

