import ProjectPage from '@/components/ProjectPage'
import Why from '@/components/Why'
import Text from '@/components/Text'
import BoldLabeled from '@/components/BoldLabeled'
import ProjectPageImage from '@/components/ProjectPageImage'
import Title from '@/components/Title'
import List from '@/components/List'
import AccentSpan from '@/components/AccentSpan'

import userjourneymap1 from '@/assets/userjourneymap1.png'
import userjourneymap2 from '@/assets/userjourneymap2.png'
import home from '@/assets/home.png'
import about from '@/assets/about.png'
import services from '@/assets/services.png'
import resource from '@/assets/resource.png'
import volunteers from '@/assets/volunteers.png'
import contactus from '@/assets/contactus.png'
import donate from '@/assets/donate.png'
import companalysis from '@/assets/companalysis.png'
import userpersonas from '@/assets/userpersonas.png'

const Benefit = () => (
  <ProjectPage title="educa11y Website Redesign">
    <div className="w-full px-12">
    <Text>
      Providing non-profits with accessible design resources through the
      benefit.design volunteer program.
    </Text>

    <BoldLabeled label="Team">
      educa11y Volunteer Web and Brand Design Team (8 members total)
    </BoldLabeled>

    <BoldLabeled label="My Role">Web Design</BoldLabeled>

    <BoldLabeled label="Timeline">January 2023 - March 2023</BoldLabeled>

    <BoldLabeled label="Tools">Figma, FigJam</BoldLabeled>

    <Text>
      In efforts to gain real world experience in design and working in a team,
      I searched for volunteer design opportunities to develop these skills
      while also making an impact on the community. I found an organization
      called benefit.design that assists non-profits with their{' '}
      <AccentSpan bold>creative needs</AccentSpan> using the help of volunteer
      designers. The project I joined was a{' '}
      <AccentSpan bold>website redesign</AccentSpan> for the non-profit
      educa11y, an organization dedicated to the{' '}
      <AccentSpan bold>
        advocation and education of digital accessibility
      </AccentSpan>
      . Our team was split into web designers and brand designers.
      Unfortunately, after we made the wireframes, my team ceased all
      communication, so I was unable to produce any mockups with them, but I
      will still describe the design process up to where we stopped.
    </Text>

    <Why
      theProblem={
        'The current website is only one page and does not give visitors any ' +
        'action items or details about the organization besides the mission ' +
        'statement and contact card.'
      }
      butWhy={
        "As a non-profit, it's important for those who are interested in it to " +
        'understand not only the mission statement, but the people behind it ' +
        'and the resources it provides.'
      }
    />

    <Title style="projectPage" order={3}>
      The Goal
    </Title>

    <Text>
      Redesign the current website that includes organization overview,
      donations, volunteer signups, services, and a contact form using the new
      brand style guidelines.
    </Text>

    <Title style="projectPage" order={4}>
      Actionables
    </Title>

    <List
      numbered
      accent
      className="mb-4"
      items={[
        'Perform research to understand possible users and their pain points.',
        'Map user journey flows and conduct competitive analysis to better understand the market.',
        'Learn and iterate on designs as the design process proceeds.',
      ]}
    />

    <Title style="projectPage">Research & Empathy</Title>

    <Text>
      Our research/empathy stage was broken into 3 parts. Some team members
      conducted competitive analysis to identify the strengths and weaknesses of
      competitors in order to develop strategies to improve educa11y products.
      Others worked on user personas to look at what kind of users would be
      using the site.
    </Text>

    <Text>
      Another team member and I were in charge of creating user journey maps to
      better understand how users will interact with the site. We highlighted
      pain points and ways people would use the site to enhance their experience
      and target their needs.
    </Text>

    <Title style="projectPage" order={3}>
      Competitive Analysis
    </Title>

    <ProjectPageImage src={companalysis} alt="companalysis" />

    <Title style="projectPage" order={3}>
      User Personas
    </Title>

    <ProjectPageImage src={userpersonas} alt="userpersonas" />

    <Title style="projectPage" order={3}>
      User Journey Maps
    </Title>

    <ProjectPageImage src={userjourneymap1} alt="userjourneymap1" />

    <ProjectPageImage src={userjourneymap2} alt="userjourneymap2" />

    <Title style="projectPage">Ideation & Prototype</Title>

    <Text>
      Following our research and after some discussion with the stakeholder we
      moved on to the creation of the wireframes. Together we decided on a
      general style guide for the site and created our wireframes under that.
    </Text>

    <Title style="projectPage" order={3} center>
      Home Page
    </Title>

    <ProjectPageImage src={home} alt="home" />

    <Title style="projectPage" order={3} center>
      About
    </Title>

    <ProjectPageImage src={about} alt="about" />

    <Title style="projectPage" order={3} center>
      Services
    </Title>

    <ProjectPageImage src={services} alt="services" />

    <Title style="projectPage" order={3} center>
      Resources
    </Title>

    <ProjectPageImage src={resource} alt="resource" />

    <Title style="projectPage" order={3} center>
      Volunteers
    </Title>

    <ProjectPageImage src={volunteers} alt="volunteers" />

    <Title style="projectPage" order={3} center>
      Contact
    </Title>

    <ProjectPageImage src={contactus} alt="contactus" />

    <Title style="projectPage" order={3} center>
      Donate
    </Title>

    <ProjectPageImage src={donate} alt="donate" />

    <Title style="projectPage">Reflection</Title>

    <Text>
      Despite losing contact with my team and stakeholder, this was still an
      amazing learning experience as my first time going through the design
      process on an actual project. I learned important techniques in
      empathizing with users like making user journey maps and working with user
      personas for the first time, as well as how to work with other designers
      in a remote setting. Ideally I would have liked to finish up the project
      with the stakeholder, but the project was still a valuable experience
      regardless.
    </Text>
    </div>
  </ProjectPage>
)

export default Benefit
