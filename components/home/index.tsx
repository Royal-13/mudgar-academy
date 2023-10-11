import Header from "./header"
import Hero from "./hero"
import SectionThree from "./section3"
import SectionOne from "./section1"
import SectionTwo from "./section2"
import SectionFour from "./section4"
import FAQ from "./faq"

export default function HomePage() {
    return (
    <>
    <Header />
    <Hero />
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <FAQ/>
    </>
    )
  }