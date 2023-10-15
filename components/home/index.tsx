import Header from "./header"
import Hero from "./hero"
import SectionThree from "./section3"
import SectionOne from "./section1"
import SectionTwo from "./section2"
import SectionFour from "./section4"
import FAQ from "./faq"
import Host from "./host"
import BenefitsSection from "./benefitsSection"
import RegisterForm from "./registerform"
import Float from "./float"
import Footer from "./footer"
import Testimonial from "./testimonials"
import { type } from "os"
import Footer1 from "./footer1"
import CountdownMobile from "./countdown_mobile"

type Props = {
  session: boolean;
};

export default function HomePage({session}: Props) {
  return (
    <>
      <Header session={session}/>
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
                <Testimonial/>
                <SectionFour />
                <FAQ />
                <Host />
                <RegisterForm />
              </div>
              <div className="right_block_container">
                <Float />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1/>
    </>
  )
}