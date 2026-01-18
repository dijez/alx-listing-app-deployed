import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";


export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const [properties, setProperties] = useState<any[]>([]);
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
);

        // const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return (

    // <PropertyDetail property={property} />;
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyDetail key={property.id} property={property} />
      ))}
    </div>
    )
}