/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { useAppDispatch } from "../../../services/redux/hooks";
import { userDataHandler } from "../../../services/redux/features/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../services/redux/hooks";

type Inputs = {
  username: string;
  password: string;
};

function Signup() {
  const userData = useAppSelector((state) => state.users.userData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: {
    username: string;
    password: string;
  }) => {
    dispatch(userDataHandler(data));
    toast.success("User created.please login with same Username and password");
    return navigate("/signin");
  };

  React.useEffect(() => {
    if (userData.username && userData.password) return navigate("/signin");
  }, [navigate, userData.password, userData.username]);

  return (
    <Container
      component="main"
      maxWidth="md"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "60vw", md: "25vw" },
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <React.Fragment>
            <TextField
              {...register("username", {
                required: "This field must be requierd",
              })}
              error={errors["username"] && true}
              type="text"
              margin="normal"
              required
              fullWidth
              label="username"
              autoFocus
            />
            <FormHelperText error>
              {errors["username"] && errors["username"].message}
            </FormHelperText>
            <TextField
              {...register("password", {
                required: "This field must be requierd",
              })}
              error={errors["password"] && true}
              type="password"
              margin="normal"
              required
              fullWidth
              label="password"
              inputProps={{ "data-testid": "password" }}
            />
            <FormHelperText error>
              {errors["password"] && errors["password"].message}
            </FormHelperText>
          </React.Fragment>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
