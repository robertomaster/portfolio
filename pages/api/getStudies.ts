import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Studies } from "../../typings";

const query = groq`*[_type=="studies"]{
  ...,
}`;

type Data = {
  studies: Studies[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const studies: Studies[] = await sanityClient.fetch(query);
  res.status(200).json({ studies });
}
