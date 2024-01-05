import React from 'react';
import { useAuthFilter } from '../Context/AuthContext';

const ResetPassword = () => {
  const { resetPassword } = useAuthFilter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.elements.email.value; // Check if the email input is present

    try {
      await resetPassword(emailVal);
      alert('Check your email');
      // Additional logic after password reset
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="padding max-container">
      <div className="p-8">Reset Password</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Enter your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your Email" /><br />
        <button type="submit">Reset password</button>
      </form>
    </section>
  );
};

export default ResetPassword;