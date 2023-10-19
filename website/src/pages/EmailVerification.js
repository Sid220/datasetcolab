import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function EmailVerification() {
  const { currentUser, sendEmailVerification_ } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const checkEmailVerified = async () => {
      if (currentUser) {
        if (currentUser.emailVerified) {
          navigate("/");
        } else {
          try {
            await currentUser.reload();
          } catch (error) {
            setError("Failed to check email verification status.");
          }
        }
      }
    };
    const interval = setInterval(checkEmailVerified, 3000); // Check every 3 seconds
    return () => clearInterval(interval);
  }, [currentUser, navigate]);

  const handleResendEmail = async () => {
    try {
      setError("");
      setLoading(true);
      await sendEmailVerification_();
    } catch (error) {
      setError("Failed to resend verification email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {error && <Alert variant="danger">{error}</Alert>}
      {currentUser && !currentUser.emailVerified && (
        <>
          <Alert variant="info">Email verification link sent to {currentUser.email}</Alert>
          <Button variant="primary" onClick={handleResendEmail} disabled={loading}>
            {loading ? "Resending..." : "Resend Email"}
          </Button>
        </>
      )}
    </div>
  );
}
