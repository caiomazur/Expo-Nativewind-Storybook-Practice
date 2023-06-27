import TextInputComponent from "/components/TextInputComponent";

export default {
  title: "TextInputComponent",
  component: TextInputComponent,
};

export const Default = {
  args: {
    state: "default",
    placeholder: "Name your Trilobite:",
  },
};

export const Error = {
  args: {
    ...Default.args,
    state: "error",
  },
};

export const Success = {
  args: {
    ...Default.args,
    state: "success",
  },
};
