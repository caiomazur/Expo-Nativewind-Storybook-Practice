import TextInputComponent from "/components/TextInputComponent";

export default {
  title: "TextInputComponent",
  component: TextInputComponent,
};

export const Default = () => (
  <TextInputComponent
    className="text-xl text-teal-100 my-4 text-center border-solid border-2 border-teal-400 rounded-lg w-12"
    value="Test Value"
    placeholder="Name your Trilobite:"
  />
);

export const Large = {
  args: {
    size: "large",
    value: "Large text Input",
  },
};

export const Placeholder = {
  args: {
    placeholder: "email@email.com",
    type: "email",
  },
};
