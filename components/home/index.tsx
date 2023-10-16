import Header from "./header";
import Hero from "./hero";
import SectionThree from "./section3";
import SectionOne from "./section1";
import SectionTwo from "./section2";
import SectionFour from "./section4";
import FAQ from "./faq";
import Host from "./host";
import BenefitsSection from "./benefitsSection";
import RegisterForm from "./registerform";
import Float from "./float";
import Testimonial from "./testimonials";
import Footer1 from "./footer1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

type Props = {
  session: boolean;
};

export default function HomePage({ session }: Props) {
  const numbers = [1, 2, 3];
  const places = [
    "Noida",
    "Baroda",
    "Navi Mumbai",
    "Delhi",
    "Chennai",
    "Assam",
    "Indore",
    "Sonipat",
    "Bangalore",
  ];

  function logRandomData() {
    const random_number = Math.floor(Math.random() * 3);
    const random_place = Math.floor(Math.random() * 9);

    const number = numbers[random_number];
    const place = places[random_place];

    toast.info(`+${number} people from ${place} just joined the waitlist!`);
  }

  setInterval(logRandomData, 15000);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header session={session} />
      <Hero />
      <main id="main">
        <section id="included" className="Included">
          <div className="container">
            <SectionOne />
          </div>
          <div className="container Included_Block">
            <SectionTwo />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <BenefitsSection />
                <SectionThree />
                <Testimonial />
                <SectionFour />
                <FAQ />
                <Host />
                <RegisterForm />
              </div>
              <AnimatePresence>
              <div className="right_block_container">
                <Float />
              </div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
