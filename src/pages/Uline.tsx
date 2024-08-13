import ProjectPage from '@/components/ProjectPage'
import Why from '@/components/Why'
import Text from '@/components/Text'
import ProjectPageImage from '@/components/ProjectPageImage'
import BoldLabeled from '@/components/BoldLabeled'
import AccentSpan from '@/components/AccentSpan'
import Title from '@/components/Title'
import List from '@/components/List'

import initialfinaldesign from '@/assets/initialfinaldesign.png'
import followupemail from '@/assets/followupemail.png'
import finalheaderdesign from '@/assets/finalheaderdesign.png'
import prototyping from '@/assets/prototyping.png'
import fu2raw from '@/assets/FU2RAW.png'
import fu1sketch from '@/assets/FU1SKETCH.png'
import fu2sketch from '@/assets/FU2SKETCH.png'
import fu1raw from '@/assets/FU1RAW.png'
import genericwelcome from '@/assets/genericwelcomefinal.jpg'
import foodservice from '@/assets/foodservicewelcomefinal.jpg'
import welcomebefore from '@/assets/welcomebefore.png'
import footerbefore from '@/assets/footerbefore.png'
import headerinitialsketch from '@/assets/headerinitialsketch.png'
import versionsuline from '@/assets/versionsuline.png'
import contentbefore from '@/assets/contentbefore.png'
import contentafter from '@/assets/contentafter.png'
import footerafter from '@/assets/footerafter.png'


const Uline = () => (
  <ProjectPage title="Uline New Customer Retention">
    <Text>
      Rethinking Uline's welcome campaign by targetting specific industries in
      order to improve new customer retention.
    </Text>

    <BoldLabeled label="Team">
      Uline Creative Interns (10 members total)
    </BoldLabeled>

    <BoldLabeled label="My Role">
      Web Design, Web Production, UX Design, Print Design
    </BoldLabeled>

    <BoldLabeled label="Timeline">June 2023 - August 2023</BoldLabeled>
    <BoldLabeled label="Tools">
      Adobe Photoshop, Adobe InDesign, VSCode
    </BoldLabeled>

    <Text>
      In the summer of 2023, I worked as a{' '}
      <AccentSpan bold>web design intern</AccentSpan> at{' '}
      <AccentSpan bold>Uline</AccentSpan>, a shipping and distribution company.
      My job mainly consisted of designing emails, homepage banners, and
      internal site banners. However, the creative interns were also tasked with
      a project to complete over the course of 2 months: creating a new welcome
      campaign targeted to a specific industry to improve new customer retention
      from that industry. I was only required to{' '}
      <AccentSpan bold>design new emails</AccentSpan> and{' '}
      <AccentSpan bold>landing page banners</AccentSpan> for the project, but I
      also took on the role of coding the landing pages and designing a print
      piece since we didn't have a web production or print design intern. I will
      describe the overview and process of this project, but unfortunately,
      cannot share all the specifics.
    </Text>

    <ProjectPageImage
      src={initialfinaldesign}
      alt={'Initial and final designs'}
      caption="Final Designs"
    />

    <Why
      theProblem={
        'Uline was having a difficult time getting customers to ' +
        'continue their business with Uline after making their initial purchase.'
      }
      butWhy={
        "It's cheaper to keep customers than to bring in more. Improving the " +
        'retention rate of new customers would reduce the costs of having to ' +
        'continuously find new customers.'
      }
    />

    <Title style="projectPage" order={3}>
      The Goal
    </Title>

    <Text>
      Create a new industry specific welcome campaign that is more personalized
      and engaging to improve the process of becoming a recurring customer with
      Uline.
    </Text>

    <Title style="projectPage" order={4}>
      Actionables
    </Title>

    <List
      numbered
      className="text-malibu-300"
      items={[
        'Select an industry to target and suitable products to advertise in the campaign.',
        'Design and develop emails and landing pages that will be beneficial to send to the customer within the 3 months following their first purchase.',
        'Create a circulation timeline of when to send out each email and print piece.',
      ]}
    />

    <Title style="projectPage">Research</Title>

    <Text>
      We selected an industry to target for our campaign using Standard
      Industrial Classification (SIC) codes, which are codes that identify the
      type of industry a business or company is under. The more digits that are
      added, the more specific the industry gets.
    </Text>

    <Text>
      The goal was to choose an industry that is growing quickly in business
      with Uline, but also had a good variety of mostly high selling products to
      advertise in the campaign. Using Power BI to do market analysis, we
      settled on SIC code 58, Eating and Drinking Places, which had projected
      growing sales with Uline.
    </Text>

    <Text>
      From there, the Product Marketing and Web Merchandising Interns
      collaborated to select suitable products to use in the campaign emails and
      landing pages.
    </Text>

    <Title style="projectPage" order={4}>
      Key Insights and Considerations
    </Title>

    <List
      numbered
      className="text-malibu-300"
      items={[
        'Customers under SIC 58 purchased many items listed under janitorial and retail.',
        'The single-use plastic ban in Canada affects the types of products that can be used in our campaign.',
        'There are some products related to food service with lower GPs that would still be good to advertise since customers may not know that Uline sells them.',
      ]}
    />

    <Title style="projectPage">Ideation</Title>

    {/* <Text>
          The design process at Uline starts with web merchandising. They select products to be displayed along with 
          possible concepts for an email design and place all the information in a content sheet which then gets
          passed along to web designers to bring to life. 
        </Text> */}

    <Text>
      Us interns mimicked the workflow that the creative department normally
      follows. As a team we decided to redesign the welcome email that gets sent
      immediately following the creation of an account as well as some follow up
      emails and print pieces that would be sent to the customer after they make
      their first purchase. I brainstormed designs for the welcome email
      redesign on my own and was given content sheets containing products to use
      and copy for the follow up emails as they were the main deliverables for
      the project.
    </Text>

    <Title style="projectPage" order={3}>
      Welcome Email Process
    </Title>

    <Text>
      For the welcome email header redesign I wanted to change the products from
      boxes to food service products that would be on the landing pages that the
      follow up emails would lead to make the design more personalized to the
      customer's business. I also created a generic header to send to customers
      who are not shopping for a specific industry, or for personal needs.
    </Text>

    <Text>
      The initial redesign strayed too far from Uline's brand style so to reel
      it back in I simplified the product composition and changed the color
      scheme to match Uline's most recognizable colors. The products I featured
      were some of the industry's highest selling products that we found during
      our research stage. This makes the design more relevant to customers and
      exposes them to our products for that industry early on.
    </Text>

    <div className="flex flex-row gap-8 my-32">
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Before
        </Title>
        <img src={welcomebefore} alt={'welcomebefore'} className="mb-2" />
      </div>
      {/* This flex-basis is the perfect amount to get the columns the same height. I know no better way of doing this. */}
      <div className="basis-[43.95%]">
        <Title style="projectPage" order={3} center>
          Sketch
        </Title>
        <img
          src={headerinitialsketch}
          alt={'headerinitialsketch'}
          className="mb-2"
        />
        <Title style="projectPage" order={3} center>
          Versions
        </Title>
        <img src={versionsuline} alt={'versionsuline'} className="mb-2" />
      </div>
    </div>

    <Title style="projectPage" order={3} center>
      Header After
    </Title>

    <ProjectPageImage src={finalheaderdesign} alt="Final header design" />

    <Title style="projectPage" order={3}>
      Additional Changes
    </Title>

    <Text>
      I also changed the typeface of the content of the email to match the
      custom typeface that Uline uses in all their designs in order to make the
      designs more cohesive across the board as well as help the customer become
      more familiar with the Uline brand and style.
    </Text>

    <Text>
      I also changed the footer to match Uline's other emails since the welcome
      email footer differs from the promotional emails Uline currently sends
      out.
    </Text>

    <div className="flex flex-row gap-8 my-32">
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Content Before
        </Title>
        <img src={contentbefore} alt={'contentbefore'} />
      </div>
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Content After
        </Title>
        <img src={contentafter} alt={'contentafter'} />
      </div>
    </div>

    <div className="flex flex-row gap-8 mb-4 items-center">
      <Title style="projectPage" order={3} className="flex-none">
        Footer Before
      </Title>
      <img src={footerbefore} alt={'footerbefore'} />
    </div>

    <div className="flex flex-row gap-8 items-center mb-32">
      <Title style="projectPage" order={3} className="flex-none">
        Footer After
      </Title>
      <img src={footerafter} alt={'footerafter'} />
    </div>

    <Title style="projectPage" order={3} center>
      Welcome Email Final Designs
    </Title>

    <div className="flex mb-32">
      <div className="sm:mr-2 mr-0">
        <img
          src={genericwelcome}
          alt={'genericwelcome'}
          className="mb-2 md:mr-3 mr-0"
        />
      </div>
      <div>
        <img
          src={foodservice}
          alt={'foodservice'}
          className="mb-2 md:ml-3 ml-0"
        />
      </div>
    </div>

    <Title style="projectPage" order={3}>
      Follow Up Email Process
    </Title>

    <Text>
      I created the follow up emails using the content sheets I was given as a
      guideline in my design process. For both designs, I started with a sketch
      before submitting a photo request to Uline's in-house photo studio to
      shoot the composition of the products that I wanted. The first email I
      created addresses the back end needs of a restaurant, focusing on things
      like kitched supplies and packaging.
    </Text>

    <Text>
      Since Uline's biggest customers in SIC 58 are fast food companies, I
      wanted to illustrate the busyness of the food service industry behind the
      counter while still staying on brand with the high quality packaging and
      organization that Uline typically displays.
    </Text>

    <Text>
      The second follow up email targets the front end necessities of a
      restaurant using items like outdoor furniture and plastic A-frames.
    </Text>

    <div className="flex flex-row gap-8 my-32">
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Follow Up 1 Sketch
        </Title>
        <img src={fu1sketch} alt={'fu1sketch'} />
      </div>
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Follow Up 1 Raws
        </Title>
        <img src={fu1raw} alt={'fu1raw'} />
      </div>
    </div>

    <div className="flex flex-row gap-8 my-32">
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Follow Up 2 Sketch
        </Title>
        <img src={fu2sketch} alt={'fu2sketch'} />
      </div>
      <div className="flex-1">
        <Title style="projectPage" order={3} center>
          Follow Up 1 Raws
        </Title>
        <img src={fu2raw} alt={'fu2raw'} />
      </div>
    </div>

    <Title style="projectPage" order={3} center>
      Follow Up Email Final Designs
    </Title>

    <div className="flex-1 flex flex-col pb-32 pt-4">
      <img
        src={followupemail}
        alt={'followupemail'}
        className="w-[100%] h-[100%] relative"
      />
    </div>

    <Title style="projectPage">Prototyping</Title>

    <Text>
      Since the emails I made will be displayed digitally, I didn't need to
      actually prototype them, but I did prototype the landing pages. Each email
      leads to it's own landing page featuring the same items, but with a
      different header to match the respective email. I coded and produced these
      landing pages on a mock Uline website.
    </Text>

    <Text>
      During the development of the landing pages i worked with the web
      merchandising intern to ensure that all the item thumbnails were placed in
      a logical and visually appealing way. Additionally, we made sure that the
      layout of the landing page looked good on both{' '}
      <span className="font-bold text-malibu-300">desktop and mobile</span>.
    </Text>

    <ProjectPageImage src={prototyping} alt={'prototyping'} />

    <Title style="projectPage">Reflection</Title>

    <Text>
      Going through the design process myself and iterating through all of the
      designs I made was very time consuming but also totally worth it! Even
      though my role as a web design intern was more graphic design based, I was
      able to practice user experience design by creating email designs that
      target user needs.
    </Text>

    <Text>
      The project was also great real world experience in understanding how to
      work in a team and adjusting my own workflows around the people I am
      working with. I was very lucky to be put on a hardworking and passionate
      team and they taught me a lot about their own roles which allowed me to
      gain a deeper understanding the different parts of a business as well as
      what the design process looks like in larger scale.
    </Text>

    <Text>
      I hope to apply the design skills I picked up on this project and at this
      internship to create even better user-centric designs in the future.
    </Text>
  </ProjectPage>
)

export default Uline
