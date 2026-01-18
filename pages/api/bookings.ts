import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const bookingData = req.body;


   if (!bookingData || !bookingData.email) {
    return res.status(400).json({ message: "Invalid booking data" });
  }

  
  return res.status(201).json({
    message: "Booking created successfully",
    booking: bookingData,
  });
}
