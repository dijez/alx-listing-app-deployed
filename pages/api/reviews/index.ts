import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { propertyId, name, rating, comment } = req.body;

  // Basic validation
  if (!propertyId || !name || !rating || !comment) {
    return res.status(400).json({
      message: "Missing required review fields",
    });
  }

  const newReview = {
    id: Date.now().toString(), // temporary ID
    propertyId,
    name,
    rating,
    comment,
    createdAt: new Date().toISOString(),
  };

  // In real apps → save to DB
  // For ALX → just return the review

  return res.status(201).json({
    message: "Review submitted successfully",
    review: newReview,
  });
}
