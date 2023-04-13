import { Studies } from "../typings";

export const fetchStudies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getStudies`);
  const data = await res.json();
  const studies: Studies[] = data.studies;
  return studies;
};
