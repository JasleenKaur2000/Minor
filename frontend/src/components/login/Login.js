import { React, useEffect, useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, data } = userLogin;

  useEffect(() => {
    if (data) {
      navigate("/home");
    }
  }, [navigate, data]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const mainContainer = {
    width: "100vw",
    height: "100vh",
    placeItems: "center",
    backgroundColor: "#f2fffb",
  };

  const paperStyle = {
    padding: "5vh",
    height: "auto",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { marginTop: "4vh" };
  const font = { fontSize: 17 };
  return (
    <>
      <Grid style={mainContainer} display="grid">
        <Paper className="paper" elevation={10} style={paperStyle}>
          <h1 style={{ margin: "10px", textAlign: "center", color: "#1976d2" }}>
            Login Please{" "}
          </h1>

          <Grid>
            <form
              style={{ marginTop: "5vh" }}
              noValidate
              onSubmit={submitHandler}
            >
              <Grid>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  label="Email"
                  placeholder="@example.com"
                  fullWidth
                  required
                ></TextField>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  label="Password"
                  sx={{ mt: 2 }}
                  placeholder="Enter Password"
                  type="password"
                  fullWidth
                  required
                ></TextField>
                <Typography style={btstyle}>
                  <Link to="#">Forgot Password</Link>
                </Typography>
              </Grid>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btstyle}
                fullWidth
              >
                Login
              </Button>
            </form>
            <Grid style={{ marginTop: "3vh" }}>
              <Typography style={font}>
                New to Organisation? <Link to="/signup"> Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
