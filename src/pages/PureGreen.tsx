import ProjectPage from '@/components/ProjectPage'
import {
  Frame4,
  Frame7,
  PGallmocks,
  PGDemo,
  PGFinals,
  PGfinalwireframes,
  PGmocks,
  PGsketches,
  PGwireframes,
  Style,
} from '@/assets'
import Why from '@/components/Why'
import Text from '@/components/Text'
import Title from '@/components/Title'
import ProjectPageImage from '@/components/ProjectPageImage'
import List from '@/components/List'
import AccentSpan from '@/components/AccentSpan'

const PureGreen = () => (
  <ProjectPage title="PureGreen App">
    <Text>A simple way to view, compare, and order items from PureGreen.</Text>

    <Text>
      <strong>Team:</strong> Atilano Escobar, Caroline Marx, Jamie Wolfson
    </Text>

    <Text>
      <strong>My Role:</strong> Team Lead, UI/UX Design, Research
    </Text>

    <Text>
      <strong>Timeline:</strong> September 2023 - December 2023
    </Text>

    <Text>
      <strong>Tools:</strong> Figma
    </Text>

    <Text>
      In the 2023 fall semester, I enrolled in a class called User Experience
      for Graphic Design which allowed graphic design students to explore the
      field of UX. In the beginning of a class, each team picked a local coffee
      or smoothie shop to design an app for and we took off. My team was tasked
      with creating an app for PureGreen, a new smoothie shop in town. Although
      PureGreen is a chain, it does not have an app yet. Stepping through each
      phase of the design process, our team identified a natural user base, pain
      points, and possible solutions. We finished the semester with working
      prototypes of our app, following a task flow for a pre-identified user
      persona.
    </Text>

    <ProjectPageImage src={PGFinals} alt={'puregreen finals'} />

    <Why
      theProblem={
        'PureGreen is a popular national smoothie and health food chain with a website, but no mobile application. ' +
        'How might we create an app for PureGreen that makes on-the-go ordering easier for users ' +
        "and aligns with the current brand's identity?"
      }
      butWhy={
        'Many PureGreens are located in populous towns and are bound to attract health-conscious busybodies. ' +
        'Being able to order ahead of time is important for the audience that PureGreen is marketed towards ' +
        'and having an app would also help maintain customer loyalty through a highly competitive landscape ' +
        'of food and drink options.'
      }
    />

    <Title style="projectPage" order={3}>
      The Goal
    </Title>

    <Text>
      Design an app for PureGreen that allows users to conveniently select and
      order items ahead according to their needs while reinforcing brand
      identity and appeal.
    </Text>

    <Title style="projectPage" order={4}>
      Actionables
    </Title>

    <List
      numbered
      accent
      items={[
        'Define target audience and pain points when using other drink and food apps.',
        'Brainstorm helpful features and prioritize information to display in navigation.',
        "Develop interfaces and prototypes aligned with PureGreen's currently style.",
      ]}
    />

    <Title style="projectPage" className="mt-12">
      Research
    </Title>

    <Text>
      To kick off this project each team member started by coming up with a set
      of interview questions that we would later ask to customers inside the
      store to better understand the demographic of customers and how they have
      interacted with food and drink ordering apps before.
    </Text>

    <Text>
      We asked typical demographic questions like occupation, age, location on
      campus, etc. Some additional questions we asked related more to previous
      experience with apps such as, "What are the factors that influence your
      decision to order in person or mobile?" or "Walk me through your process
      of making a mobile order". Questions like these provided us with valuable
      information and understanding of PureGreen's typical customers and what
      they might look for in a mobile app.
    </Text>

    <Title style="projectPage" order={4}>
      Key Insights
    </Title>

    <List
      numbered
      className="text-malibu-300 mb-4"
      items={[
        <>
          <strong>Convenience</strong>: People like apps because it's easier to
          view on mobile on the go versus opening a website that has been built
          mainly for desktop.
        </>,

        <>
          <strong>Lifestyle</strong>: Many customers are busy people who want
          something quick to get them through the day, but even waiting in the
          store for the smoothie to be made sometimes took up too much time.
          Additionally, we found it was also important to customers the
          ingredients and macronutrients of an item, and they would often
          compare these things before making a decision.
        </>,
        <>
          <strong>Familiarity</strong>: Using a mobile app for ordering allows
          people to see their order history as well as deals and new items that
          would not be immediately obvious through the website or unavailable if
          ordering in person.
        </>,
      ]}
    />

    <Text>
      After deriving these insights, we created user personas and user journey
      maps to further explore the minds of our potential users and identify
      highlights and pain points they might experience while engaging with the
      app.
    </Text>

    <Title style="projectPage" order={3} className="mt-12">
      User Personas
    </Title>

    <Text>
      We created four <AccentSpan>user personas</AccentSpan> to help us
      visualize our target audience, including basic demographic information as
      well as a short bio, their core needs, and frustrations with other apps
      and ordering in person. We took each persona's needs into account, but
      ultimately focused in on one persona, Suzie, to base the rest of our flows
      on.
    </Text>

    <ProjectPageImage src={Frame7} alt={'userpersonas'} />

    <Title style="projectPage" order={3} className="mt-12">
      User Journey Maps
    </Title>

    <Text>
      After drafting our personas, we created{' '}
      <AccentSpan>user journey maps</AccentSpan> for each of them to track their
      feelings throughout the possible app ordering process. Our journey map
      stages consisted of the sections awareness & needs, consideration,
      acquisition, and service & loyalty. For each stage we noted the steps,
      thoughts, actions, pain points and feelings, and opportunities for growth
      in the app.
    </Text>

    <ProjectPageImage src={Frame4} alt={'userjourneymaps'} />

    <Title style="projectPage" className="mt-12">
      Ideation
    </Title>

    <Title style="projectPage" order={3}>
      Sketching
    </Title>

    <Text>
      Using our insights and notes from personas and journey maps we started a
      timed <AccentSpan>sketching</AccentSpan> exercise to visuzlize possible
      solutions for our app. The short time span allowed us to get our ideas on
      paper without worrying about nitty-gritty details and helped us think
      about bigger picture ideas. To narrow things down, each classmate taped
      their sketches for their respective apps to a wall and we were given the
      opportunity to participate in <AccentSpan>dot voting</AccentSpan> to pick
      our favorite sketches.
    </Text>
    <ProjectPageImage src={PGsketches} alt={'sketches'} />

    <Title style="projectPage" order={3}>
      Wireframing
    </Title>

    <Text>
      Following the sketching, we moved into the{' '}
      <AccentSpan>wireframing</AccentSpan> phase to generate even more ideas.
      Over the span of a few classes, each team member was given 45 minutes to
      develop about eight low-fidelity wireframes for 3 screens: the dashboard,
      menu, and checkout pages. After creating these wireframe sets, we would
      consolidate as a team and narrow down the designs we liked best, as well
      as design any other necessary screens for the task of placing an order.
    </Text>

    <Text>
      The following image shows the wireframes we narrowed down togethers from
      our sets. The first row, from left to right, contains a splash screen, two
      dashboard options, and one menu screen. The second row contains the second
      menu option, two checkout/order placed options, and an order completed
      screen.
    </Text>

    <ProjectPageImage src={PGwireframes} alt={'wireframes'} />

    <Title style="projectPage" order={3}>
      Continuing Wireframes
    </Title>

    <Text>
      After narrowing down our options, we polished these wireframes and created
      new <AccentSpan>high-fidelity wireframes</AccentSpan>. We also added new
      screens like product detail pages as well as implementing small styles
      like buttons and fonts. Additionally, we created overlay screens such as
      "item added" overlays to implement feedback to the user when they add an
      item, giving them confirmation instead of leaving them wondering if they
      added an item or not. Our most important features from the wireframes lie
      in the dashboard, menu, and item detail pages.
    </Text>
    <Text>
      The dashboard has hero shots and would contain different specials,
      announcements, and more, so that a user can easily see these things right
      when they open the app. The menu page allows users to expand each item
      into a card containing more nutrition facts and details about an item to
      minimize the time it takes to navigate to an item page, back out, and to
      another item page to compare ingredients and nutrition. The item detail
      page contains expandable information that goes much more in depth into the
      item. It has a full item description, an expandable ingredient list, an
      expandable customizations list with toggle switches, and another
      expandable extended information section. This way the user only needs to
      see exactly what they want and can pry further if necessary.
    </Text>
    <ProjectPageImage src={PGfinalwireframes} alt={'finalwireframes'} />

    <Title style="projectPage">Prototyping</Title>

    <Title style="projectPage" order={3}>
      Typography & Colors
    </Title>

    <Text>
      To start the prototyping stage, we began by implementing a style guide
      with colors and type. We chose typefaces that mimicked the ones on
      PureGreen's site and logo. The colors also were taken from their website
      to promote brand identity and familiarity between the website and app. We
      finished off the prototypes by creating linkages and animations to turn
      our designs into a <AccentSpan>useable prototype</AccentSpan>.{' '}
    </Text>

    <ProjectPageImage src={Style} alt={'style'} />

    <Title style="projectPage" order={3}>
      In-Depth Glance
    </Title>

    <Text>
      The mockups below offer some more in-depth descriptions on specific
      features of the app in some of our more important screens.
    </Text>
    <ProjectPageImage src={PGmocks} alt={'mocks'} />

    <Title style="projectPage" order={3}>
      Final Designs & Prototype
    </Title>

    <video autoPlay loop muted playsInline className="pb-56 pt-4">
      <source src={PGDemo} type="video/mp4" />
    </video>

    <ProjectPageImage src={PGallmocks} alt={'mocks'} />

    <Title style="projectPage">Reflection</Title>

    <Text>
      This project was a more unique process for me, as the team dynamic was
      slightly different than I have experienced before. The class is targeted
      towards graphic designers, so my team members did not have previous
      exposure to user experience design or Figma. Therefore, this case study
      had a bit of a learning curve for all of us. I guided the team through our
      different exercises and taught them how to use Figma. Each of the team
      members came with different skills, so it was up to me to delegate tasks
      that best fit each of them. I was privileged to be on a team with quick
      learners, as we were able to finish each step of the design process in a
      timely manner without too much difficulty.
    </Text>

    <Text>
      The more difficult part of the process for me was trying to coordinate
      four different design styles into one. As shown in the wireframes, we each
      have vastly different design styles, so when we were splitting up the
      final designs, we had to go through and make small changes to make sure
      the end designs were all cohesive and matched the original PureGreen
      style.
    </Text>
    <Text>
      In the end, this project was extremely valuable, as it taught me
      collaborative skills such as team leading and communication that I haven't
      had the opportunity to pick up in other projects. If we had more time, I
      would definitely like to test the app with more people or even ask
      PureGreen about the app and further consolidate with them.
    </Text>
  </ProjectPage>
)

export default PureGreen
