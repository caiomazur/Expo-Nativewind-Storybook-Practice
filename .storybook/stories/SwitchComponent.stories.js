import SwitchComponent from "../../components/SwitchComponent";

export default {
  title: "SwitchComponent",
  component: SwitchComponent,
};

export const Default = {
  args: {
    state: "default",
    label: "Turn Trilobite On/Off",
  },
};

export const NoLabel = {
  args: {
    state: "noLabel",
    label: "",
  },
};
