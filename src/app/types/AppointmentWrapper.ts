import { Observable } from "rxjs";
import { Application } from "./Application";
import { Appointment } from "./Appointment";

export type AppointmentWrapper = {
  message: string | undefined;
  appointment : Appointment | undefined
}
