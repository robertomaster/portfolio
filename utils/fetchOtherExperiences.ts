import { OtherExperiences } from "../typings";

export const fetchOtherExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getOtherExperiences`
  );
  const data = await res.json();
  const otherExperiences: OtherExperiences[] = data.otherExperiences;
  return otherExperiences;
};
