import * as yup from "yup";
import { fetchAPI } from "../api/Api";

const minDate = new Date().toISOString().split("T")[0];

export const formSchema = yup.object().shape({
  name: yup.string().required("Please add a name"),
  date: yup
    .date()
    .min(minDate, "Please enter a date starting at today")
    .required("Required"),
  time: yup
    .string()
    .oneOf(
      fetchAPI(new Date()),
      "Invalid Time"
    )
    .required("Please add a time"),
  guests: yup
    .number()
    .integer()
    .min(1, "Number of guests should be at least 1")
    .max(10, "Number of guests should be at most 10")
    .required("Required"),
  occasion: yup.string().oneOf(["birthday", "event"]),
});
