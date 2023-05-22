export type signinItemProps = {
  type: string;
  label: string;
  name: string;
};

export const signinItems: signinItemProps[] = [
  {
    type: "text",
    label: "Username",
    name: "username",
  },
  {
    type: "password",
    label: "Password",
    name: "password",
  },
  {
    type: "checkbox",
    label: "Remember me",
    name: "remember",
  },
];
