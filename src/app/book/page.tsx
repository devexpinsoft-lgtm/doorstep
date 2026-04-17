import type { Metadata } from "next";
import BookingPageContent from "@/components/BookingPageContent";

export const metadata: Metadata = {
  title: "Book a Service | Doorstep",
  description: "Book a professional home service with DoorStep. Fill out our quick form and we'll match you with a certified pro — same day, guaranteed.",
};

export default function BookPage() {
  return <BookingPageContent />;
}
