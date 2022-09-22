import HeroBanner from "../components/home/hero/HeroBanner";
import ClientList from "../components/home/list/ClientList";
import Portfolio from "../components/home/portfolio/Portfolio";
import Testimonial from "../components/home/testimonial/Testimonial";

export default function Home() {
  return (
    <div className="">
        <HeroBanner/>
        <ClientList/>
        <Portfolio/>
        <Testimonial/>
    </div>
  );
}
