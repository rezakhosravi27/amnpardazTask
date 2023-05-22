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

type Inputs = {
  username: string;
  password: string;
  remember: string;
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          {signinItems.map((item: signinItemProps, index: number) => {
            return (
              <React.Fragment key={item.name}>
                {item.type === "checkbox" && (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register(`${item.name}`)}
                        value="remember"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                )}
                {item.type !== "checkbox" && (
                  <TextField
                    {...register(`${item.name}`, { required: true })}
                    type={item.type}
                    margin="normal"
                    required
                    fullWidth
                    label={item.label}
                    name={item.name}
                    autoComplete="email"
                    autoFocus
                  />
                )}
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default React.memo(Signin);
