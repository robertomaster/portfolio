import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { OtherExperiences } from "../../typings";

const query = groq`*[_type=="otherExperiences"] | order(_createdAt desc)`;

type Data = {
  otherExperiences: OtherExperiences[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const otherExperiences: OtherExperiences[] = await sanityClient.fetch(query);
  res.status(200).json({ otherExperiences });
}
