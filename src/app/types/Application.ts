import { Url } from "url";
import { EmploymentStatus } from "./EmploymentStatus";
import { Gender } from "./Gender";
import { proficiency } from "./Proficiency";

export type Application = {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber : String,
  city: String,
  country : String;
  gender: Gender;
  proficiency: proficiency;
  salaryExpectation : number;
  currentOrganization : String;
  employmentStatus: EmploymentStatus;
  currentJob : String;
  totalYearOfExperience : number;
  preferredWorkType : String;
  otherSkills: String[];
  linkedProfile: Url;
  portfolioUrl : Url;
  twitterUrl : Url;
  githubUrl : Url;
  additionalInformation : String;

}
