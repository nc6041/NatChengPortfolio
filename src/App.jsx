import styles from "./style";
import { Navbar, OW, Hero, Footer, CaseStudies } from './components'
import PageSection from './components/PageSection'

const App = () => (
  <>
    <Navbar />

    <Hero />

    <PageSection>
      <CaseStudies />
    </PageSection>

    <Footer />
  </>
)


export default App;
