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
  linkedProfile: string;
  portfolioUrl : string;
  twitterUrl : string;
  githubUrl : string;
  additionalInformation : String;

}
