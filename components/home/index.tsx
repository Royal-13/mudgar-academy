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

export default function HomePage() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}