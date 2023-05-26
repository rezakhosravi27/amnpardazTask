import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { useAppDispatch } from "../../../services/redux/hooks";
import { loggedInHandler } from "../../../services/redux/features/users";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  password: string;
};

function Signin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    dispatch(loggedInHandler(true));
    navigate("/dashboard");
  };

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
          Sign in
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
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default React.memo(Signin);
