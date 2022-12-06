import { Grid, Paper, TextField, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Signup.css";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../../Actions/userActions";

function Signup() {
  // const userRegister = useSelector((state) => state.userRegister);
  // const { userRegisterInfo } = userRegister;
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userRegisterInfo) {
  //     navigate("/login");
  //   }
  // }, [userRegisterInfo, navigate]);
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // dispatch(
  //   register(
  //     user.name,
  //     user.email,
  //     user.password,
  //     user.mobile
  //   )
  // );
  // };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  // const uploadCertificateOfIncorporation = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]);
  //   formData.append("upload_preset", "ih1rthv8");
  //   await axios
  //     .post("https://api.cloudinary.com/v1_1/vdshgp/image/upload", formData)
  //     .then((response) => {
  //       // console.log(response.data.secure_url);
  //       setUser({
  //         ...user,
  //         certificateOfIncorporation: response.data.secure_url,
  //       });
  //       console.log(user);
  //     });
  // };
  const registerUser = () => {
    // console.log(user);
    console.log("User register");
  };
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const paperStyle = {
    padding: "5vh",
    height: "auto",
    width: "50%",
    margin: "20px auto",
  };
  const takeInputs = {
    marginTop: "3vh",
    paddingTop: "2vh",
  };
  const mainContainer = {
    width: "100vw",
    height: "100vh",
    placeItems: "center",
    backgroundColor: "#f2fffb",
  };
  // const btstyle = { margin: "10px 0" };
  // const Textstyle = { margin: "0 4px" };
  // const font = { fontSize: 17 };
  return (
    <Grid display="grid" style={mainContainer}>
      <Paper className="paper" elevation={10} style={paperStyle}>
        <h1 style={{ textAlign: "center", color: "#1976d2", margin: "10px" }}>
          {" "}
          Make a Registration
        </h1>
        <br />

        <form noValidate>
          {/*onSubmit={submitHandler}>*/}
          <Grid
            container
            display="flex"
            justifyContent="center"
            style={takeInputs}
          >
            <Grid item xs={12} md={12} lg={6} pr={4}>
              <TextField
                value={user.name}
                onChange={handleChange}
                label="Name"
                name="name"
                sx={{ mb: 2 }}
                placeholder="Name"
                fullWidth
                required
              ></TextField>
              <TextField
                value={user.email}
                // onChange={handleChange}
                label="Email"
                name="email"
                placeholder="@example.com"
                fullWidth
                required
              ></TextField>
              <TextField
                value={user.password}
                // onChange={handleChange}
                label="Password"
                sx={{ mt: 2 }}
                placeholder="Enter Password"
                type="password"
                name="password"
                fullWidth
                required
              ></TextField>
              <TextField
                value={user.mobile}
                // onChange={handleChange}
                label="Mobile Number"
                sx={{ mt: 2 }}
                placeholder="Mobile Number"
                type="number"
                name="mobile"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid display="flex" justifyContent="center">
            <Button
              type="submit"
              onClick={registerUser}
              color="primary"
              variant="contained"
              style={{ marginTop: "5vh" }}
            >
              Sign Up
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default Signup;
