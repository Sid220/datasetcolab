import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Card, Button, ToggleButton, ButtonGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [folderMetadata, setFolderMetadata] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [show, setShow] = useState("all");

  const fetchFolderMetadata = async () => {
    try {
      setLoading(true);

      const idToken = await currentUser.getIdToken();

      let config = {
        headers: {
          idToken: idToken,
        },
      };

      const response = await axios.get(
        "https://api.datasetcolab.com/dataset/view",
        config
      );

      if (Array.isArray(response.data)) {
        setFolderMetadata(response.data);
      } else {
        setFolderMetadata([]); // Set to an empty array if response.data is not an array
      }
    } catch (err) {
      setError("Error fetching projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFolderMetadata();
  }, []);

  function formatUploadTime(uploadTime) {
    const [datePart, timePart] = uploadTime.split("_");
    const [year, month, day] = datePart.split("-");
    const [hour, minute] = timePart.split(":");

    const formattedDate = new Date(
      year,
      month - 1,
      day,
      hour,
      minute
    ).toLocaleString();
    return formattedDate;
  }

  function formatTargetDataset(targetDataset) {
    const formattedTargetDataset = targetDataset.replace(
      /FRC(\d{4})/,
      "FRC $1"
    );
    return formattedTargetDataset;
  }

  function formatStatus(status) {
    if (status === "merged") {
      return "Merged";
    } else if (status === "pendingmerge") {
      return "Pending Merge";
    } else if (status === "postprocessing") {
      return "Postprocessing";
    } else {
      return status;
    }
  }
  
  const redirectToView = (folderName) => {
    navigate(`/view/${folderName}`);
  };

  const [loadingText, setLoadingText] = useState("Loading projects");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === "Loading projects.") {
          return "Loading projects..";
        } else if (prevText === "Loading projects..") {
          return "Loading projects...";
        } else if (prevText === "Loading projects...") {
          return "Loading projects";
        } else {
          return "Loading projects.";
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div className="files-preview">
        <h2>Projects</h2>
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}
        <Form.Group style={{ marginBottom: "10px" }}>
          <ButtonGroup toggle>
            <ToggleButton
              type="radio"
              variant="outline-primary"
              checked={show === "all"}
              onClick={() => setShow("all")}
            >
              All
            </ToggleButton>
            <ToggleButton
              type="radio"
              variant="outline-primary"
              checked={show === "FRC2024"}
              onClick={() => setShow("FRC2024")}
            >
              FRC 2024
            </ToggleButton>
            <ToggleButton
              type="radio"
              variant="outline-primary"
              checked={show === "FRC2023"}
              onClick={() => setShow("FRC2023")}
            >
              FRC 2023
            </ToggleButton>
          </ButtonGroup>
        </Form.Group>
        {isLoading ? (
          <p>{loadingText}</p>
        ) : (
          <div>
            {folderMetadata.length > 0 ? (
              folderMetadata.sort((a, b) => {
                const [datePartA, timePartA] = a.uploadTime.split("_");
                const [yearA, monthA, dayA, hourA, minuteA] = [
                  ...datePartA.split("-"),
                  ...timePartA.split(":")
                ];

                const [datePartB, timePartB] = b.uploadTime.split("_");
                const [yearB, monthB, dayB, hourB, minuteB] = [
                  ...datePartB.split("-"),
                  ...timePartB.split(":")
                ];

                const dateA = new Date(yearA, monthA - 1, dayA, hourA, minuteA);
                const dateB = new Date(yearB, monthB - 1, dayB, hourB, minuteB);

                return dateB - dateA;
              }).filter((metadata) => {
                if (show === "all") {
                  return metadata.targetDataset === "FRC2023" || metadata.targetDataset === "FRC2024";
                } else {
                  return metadata.targetDataset === show;
                }
              }).map((metadata, index) => {
                  const formattedUploadTime = formatUploadTime(
                    metadata.uploadTime
                  );
                  const formattedTargetDataset = formatTargetDataset(
                    metadata.targetDataset
                  );
                  const formattedStatus = formatStatus(metadata.status)

                  return (
                    <div key={index}>
                      <Card key={index} style={styles.datasetCard}>
                        <Card.Body>
                          <h3>{metadata.uploadName.length > 25 ? `${metadata.uploadName.slice(0, 25)}...` : metadata.uploadName}</h3>
                          <small>
                            <strong>Upload Time:</strong> {formattedUploadTime}
                          </small>
                          <br />
                          <small>
                            <strong>Dataset Type:</strong>{" "}
                            {metadata.datasetType}
                          </small>
                          <br />
                          <small>
                            <strong>Target Dataset:</strong>{" "}
                            {formattedTargetDataset}
                          </small>
                          <br />
                          <small>
                            <strong>Status:</strong>{" "}
                            {formattedStatus}
                          </small>
                          <br />
                          <Button
                            variant="primary"
                            className="position-absolute top-0 end-0 m-3"
                            onClick={() => redirectToView(metadata.folderName)}
                          >
                            View
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })
            ) : (
              <div>
                <p>No projects available. Click the button below to upload a new project.</p>
                <Button variant="primary" onClick={() =>navigate("/upload")}>
                  Upload New Project
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
