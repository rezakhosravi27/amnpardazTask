import * as React from "react";
import { useAppSelector } from "../../services/redux/hooks";
import Signin from "../auth/signin/Signin";

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const isLoggedIn = useAppSelector((state) => state.users.isLoggedIn);
  if (!isLoggedIn) return <Signin />;
  return <React.Fragment>{children}</React.Fragment>;
};
