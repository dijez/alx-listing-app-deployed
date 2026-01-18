import BookingForm from "@/components/booking/BookingForm";


export default function BookingPage() {


  return(
     <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Book this property
      </h1>

      <BookingForm />
    </main>
  )
}