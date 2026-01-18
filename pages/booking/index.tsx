import BookingForm from "@/components/booking/BookingForm";


export default function BookingPage() {


  return(
     <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Book this property
      </h1>
      {/* axios.post(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
  formData
); */}

      <BookingForm />
    </main>
  )
}