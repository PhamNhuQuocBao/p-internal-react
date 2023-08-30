import { TypeOptions } from "../components/Select";

export const optionStatus: TypeOptions[] = [
  { label: "Select status", value: "", disable: true },
  {
    label: "Available",
    value: "Available",
    disable: false,
  },
  {
    label: "Sold out",
    value: "Sold out",
    disable: false,
  },
];

export const optionType: TypeOptions[] = [
  { label: "Select types", value: "", disable: true },
  {
    label: "Gold",
    value: "Gold",
    disable: false,
  },
  {
    label: "Silver",
    value: "Silver",
    disable: false,
  },
  {
    label: "Diamond",
    value: "Diamond",
    disable: false,
  },
];
