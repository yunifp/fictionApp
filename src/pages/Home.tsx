import ClientLayout from "../layouts/ClientLayout";
import Hero from "../components/sections/Hero";
import Trending from "../components/sections/Trending";

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <Trending />
    </ClientLayout>
  );
}