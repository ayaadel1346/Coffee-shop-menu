import HeroSec from "@/components/about/Herosec";
import MainPage from "@/components/about/MainPage";

export const metadata = {
  title: "About CafféLine",
  description:
    "Learn more about CafféLine, our story, mission, vision, and team.",
  authors: [{ name: "CafféLine Team" }],
};

export default function About() {
  return (
    <>
      <HeroSec />
      <MainPage />
    </>
  );
}
