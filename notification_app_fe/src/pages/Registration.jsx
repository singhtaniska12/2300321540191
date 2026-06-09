import { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobileNo: "",
    githubUsername: "",
    rollNo: "",
    accessCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://4.224.186.213/evaluation-services/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      alert("Registration Successful!");
    } catch (error) {
      console.error(error);
      alert("Registration Failed!");
    }
  };

  return (
  <div className="registration-container">
    <h2>Registration Form</h2>
    <p style={{ textAlign: "center", marginBottom: "20px", color: "#666" }}>
  Register to get your Client ID and Client Secret
</p>

    <form className="registration-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="mobileNo"
        placeholder="Mobile Number"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="githubUsername"
        placeholder="GitHub Username"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="rollNo"
        placeholder="Roll Number"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="accessCode"
        placeholder="Access Code"
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  </div>
);
}

export default Registration;