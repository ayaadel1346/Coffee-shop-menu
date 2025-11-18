import HeroSec from "@/components/contact/Herosec";
import MainPage from "@/components/contact/MainPage";

export const metadata = {
  title: "Contact Us - Caffeline",
  description:
    "Get in touch with Caffeline for any inquiries, support, or feedback.",
  keywords: ["Caffeline", "Contact", "Support", "Coffee", "Customer Service"],
  authors: [{ name: "Caffeline Team" }],
};

export default function ContactUs() {
  return (
    <>
      <HeroSec />
      <MainPage />
    </>
  );
}
