import { EmploymentStatus } from "./EmploymentStatus";
import { Gender } from "./Gender";
import { proficiency } from "./Proficiency";

export type Application = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber : string,
  city: string,
  country : string;
  gender: string;
  proficiency: string;
  salaryExpectation : number;
  currentOrganization : string;
  employmentStatus: string;
  currentJob : string;
  totalYearOfExperience : number;
  preferredWorkType : string;
  otherSkills: string[];
  linkedProfile: string;
  portfolioUrl : string;
  twitterUrl : string;
  githubUrl : string;
  additionalInformation : string;

}
