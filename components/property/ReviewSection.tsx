import axios from "axios";
import { useState, useEffect } from "react";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`
);

      // const response = await axios.get(
      //   `/api/properties/${propertyId}/reviews`
      // );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchReviews();
}, [propertyId]);


  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;