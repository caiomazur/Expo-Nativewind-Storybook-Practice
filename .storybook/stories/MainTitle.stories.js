import MainTitle from "../../components/MainTitle";

export default {
  title: "MainTitle",
  component: MainTitle,
};

export const Large = {
  args: {
    title: "Welcome to the Trilobite App!",
    size: "large",
  },
};

export const Medium = {
  args: {
    ...Large.args,
    size: "medium",
  },
};

export const Small = {
  args: {
    ...Large.args,
    size: "small",
  },
};
