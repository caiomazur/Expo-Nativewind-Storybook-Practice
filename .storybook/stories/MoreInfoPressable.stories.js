import { StyledMoreInfoPressable } from "../../components/Pressables";

export default {
  title: "MoreInfoPressable",
  component: StyledMoreInfoPressable,
};

export const Primary = {
  args: {
    children: "More about Trilobites:",
    type: "primary",
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    type: "secondary",
  },
};

export const Medium = {
  args: {
    ...Primary.args,
    size: "medium",
  },
};

export const Large = {
  args: {
    ...Primary.args,
    size: "large",
  },
};
