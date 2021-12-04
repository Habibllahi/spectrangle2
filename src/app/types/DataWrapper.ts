import { Application } from "./Application";
import { Appointment } from "./Appointment";

export type DataWrapper = {
  message: string | undefined;
  data : Application | Appointment | undefined
}
