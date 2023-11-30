import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";

const styles = {
  padding: "20px",
  downloadContainer: { maxWidth: "800px", margin: "0 auto" },
  datasetCard: { marginBottom: "20px", border: "1px solid #e9ecef" },
  optionsContainer: {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
    position: "relative",
  },
  downloadMethodContainer: { display: "flex", gap: "10px" },
  downloadButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
    border: "none",
    padding: "0",
  },
  codeBlock: {
    backgroundColor: "#e9ecef",
    padding: "10px",
    borderRadius: "5px",
    overflow: "auto",
    position: "relative",
    marginBottom: "5px",
  },
  copyButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",
  },
  alertContainer: {
    position: "fixed",
    bottom: "10px",
    left: "10px",
    zIndex: 999,
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  closeButton: { cursor: "pointer" },
  checkboxGroup: { display: "flex", gap: "10px", flexWrap: "wrap" },
};

export default function Settings() {
  const emailRef = useRef();
  const emailConfirmRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail_, updatePassword_, logout } = useAuth();
  const [error, setError] = useState(null);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false)
  const [loadingNewApiKey, setLoadingNewApiKey] = useState(false);
  const [apiKey, setApiKey] = useState("API_KEY");
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  let navigate = useNavigate();

  function handleEmail(e) {
    e.preventDefault();
    if (emailRef.current.value !== emailConfirmRef.current.value) {
      setError("Emails do not match");
      return;
    }

    const promises = [];
    setLoadingEmail(true);
    setError("");

    if (emailRef.current.value !== currentUser.email && emailRef.current.value) {
      promises.push(updateEmail_(emailRef.current.value));
    }

    Promise.all(promises)
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoadingEmail(false);
      });
  }

  function handlePassword(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    const promises = [];
    setLoadingPassword(true);
    setError("");

    if (passwordRef.current.value) {
      promises.push(updatePassword_(passwordRef.current.value));
    }

    Promise.all(promises)
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoadingPassword(false);
      });
  }

  const fetchApiKeyOnMount = async () => {
    try {
      const idToken = await currentUser.getIdToken();

      let config = {
        headers: {
          idToken: idToken,
        },
      };

      const response = await axios.get("https://api.datasetcolab.com/getapikey", config);
      setApiKey(response.data);
    } catch (err) {
      setError("Error fetching API key.");
    }
  };

  const fetchNewApiKey = async () => {
    try {
      setLoadingNewApiKey(true);

      const idToken = await currentUser.getIdToken();

      let config = {
        headers: {
          idToken: idToken,
        },
      };

      const response = await axios.get("https://api.datasetcolab.com/newapikey", config);
      setApiKey(response.data);
      setShowCopyAlert(false);
    } catch (err) {
      setError("Error generating a new API key.");
    } finally {
      setLoadingNewApiKey(false);
    }
  };

  useEffect(() => {
    // Call the function when the component mounts
    fetchApiKeyOnMount();

    const alertTimeout = setTimeout(() => setShowCopyAlert(false), 5000);
    return () => clearTimeout(alertTimeout);
  }, [currentUser]); // Include currentUser in the dependency array if it's used inside the effect


  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setShowCopyAlert(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      <h4>Update Email</h4>
      <Form onSubmit={handleEmail}>
        <Form.Group controlId="email" style={{ marginBottom: "20px" }}>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group controlId="emailConfirm" style={{ marginBottom: "20px" }}>
          <Form.Label>Email Confirmation:</Form.Label>
          <Form.Control type="email" ref={emailConfirmRef} required />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loadingEmail} style={{ marginBottom: "20px" }}>
          Update
        </Button>
      </Form>
      <h4>Update Password</h4>
      <Form onSubmit={handlePassword}>
        <Form.Group controlId="password" style={{ marginBottom: "20px" }}>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>
        <Form.Group controlId="passwordConfirm" style={{ marginBottom: "20px" }}>
          <Form.Label>Password Confirmation:</Form.Label>
          <Form.Control type="password" ref={passwordConfirmRef} required />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loadingPassword} style={{ marginBottom: "20px" }}>
          Update
        </Button>
      </Form>
      <h4>API Key</h4>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div  style={{ ...styles.codeBlock, width: "100%" }}>
          <code>{apiKey}</code>
          <div
            style={styles.copyButton}
            onClick={handleCopyToClipboard}
          >
            <span role="img" aria-label="Copy">
              📋
            </span>
          </div>
        </div>
        <Button
          variant="primary"
          type="submit"
          onClick={fetchNewApiKey}
          style={{ marginLeft: "10px", minWidth: "120px"}}
          disabled={loadingNewApiKey}
        >
          {loadingNewApiKey ? "Loading..." : "New API Key"}
        </Button>
      </div>
      <h4>Delete Account</h4>
      <Button variant="danger" type="submit" style={{ marginBottom: "20px" }} onClick={() => navigate("/delete")}>
        Delete Account
      </Button>
      {showCopyAlert && (
        <Alert variant="success" style={styles.alertContainer} dismissible>
          API Key copied to clipboard
        </Alert>
      )}
    </div>
  );
}
