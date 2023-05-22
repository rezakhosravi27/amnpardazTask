import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { signinItems, signinItemProps } from "./signinItems";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { useAppDispatch } from "../../../services/redux/hooks";
import { loggedInHandler } from "../../../services/redux/features/users";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  password: string;
};

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        AmnPardaz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Signin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
          {signinItems.map((item: signinItemProps, index: number) => {
            return (
              <React.Fragment key={item.name}>
                {item.type !== "checkbox" && (
                  <TextField
                    {...register(`${item.name}`, {
                      required: "This field must be requierd",
                    })}
                    error={errors[item.name as never]}
                    type={item.type}
                    margin="normal"
                    required
                    fullWidth
                    label={item.label}
                    name={item.name}
                    autoFocus={item.name == "username"}
                  />
                )}
                <FormHelperText error>
                  {errors[item.name as never] && errors[item.name].message}
                </FormHelperText>
              </React.Fragment>
            );
          })}
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
