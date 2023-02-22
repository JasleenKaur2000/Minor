import { Paper } from "@mui/material";
import "../../styles/Home.css";
//import Plus from ../
import React from "react";
import { Add } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <br></br>
        <div>
          <Paper elevation={24}>
            <div id="head">
              <h1 style={{}}>Teacher Dashboard </h1>
            </div>
          </Paper>
        </div>
        <div>
          <br></br>
          <h2>Offer a Gec subject to students</h2>

          <br></br>
          <p>Department:CSE B.Tech</p>

          <br></br>
          <Button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            Logout
          </Button>

          <br></br>
          <Paper
            className="plus"
            style={{
              minWidth: "50px",
              minHeight: "45px",
              padding: "5px",
              margin: "20px",
              display: "inline-flex",
              cursor: "pointer",
            }}
            elevation={10}
          >
            <Link to="/gec-info">
              <Add className="add-icon" />
            </Link>
          </Paper>

          <div>
            <p> click here to add gec subject</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

<Paper style={{ margin: "20px 10%", padding: "8px" }}></Paper>;
