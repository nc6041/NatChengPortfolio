import ProjectPage from '@/components/ProjectPage'
import {
  finals,
  sketch,
  storyboard,
  brainstorming,
  affinitydiagram,
  paperprototype,
  taskflows,
  wireframes,
  video1,
  video2,
  video3,
} from '../assets'
import Why from '@/components/Why'
import Text from '@/components/Text'
import BoldLabeled from '@/components/BoldLabeled'
import ProjectPageImage from '@/components/ProjectPageImage'
import Title from '@/components/Title'
import List from '@/components/List'
import AccentSpan from '@/components/AccentSpan'

const Uline = () => (
  <ProjectPage title="LIS 470: Interaction Design Case Study">
    <Text>
      Using AI to provide resources and education for accessible healthcare and
      wellness options for every kind of person.
    </Text>

    <BoldLabeled label="Team">Emma Freisberg, Megan Wu</BoldLabeled>
    <BoldLabeled label="My Role">UI/UX Design</BoldLabeled>
    <BoldLabeled label="Timeline">February 2023 - May 2023</BoldLabeled>
    <BoldLabeled label="Tools">Figma, Miro</BoldLabeled>

    <Text>
      During my spring 2023 semester I took a class called Interaction Design
      Studio where we learned about the design process, user research
      techniques, design principles, and more. We spent the semester defining
      and solving a problem that we would discover through interviews with a
      wide demographic of people. We walked through each step of the design
      process and finished the project with 9 mockup app interfaces that solved
      the problem we initially defined.
    </Text>

    <ProjectPageImage src={finals} alt={'finals'} />

    <Why
      theProblem={
        'How might we provide education and resources to help people implement ' +
        'and understand the significance of effective health and wellness ' +
        'practices in their daily lives?'
      }
      butWhy={
        'Taking care of ourselves is important! Especially with a society that ' +
        'is moving towards a “no time for rest” mindset, it is very easy to ' +
        'burnout which takes a toll on mental and physical health.'
      }
    />

    <Title style="projectPage" order={3}>
      The Goal
    </Title>

    <Text>
      Create an app that will help users to understand the importance of health
      and wellness, as well as find accessible resources to implement it into
      their lives.
    </Text>

    <Title style="projectPage" order={4}>
      Actionables
    </Title>

    <Text>
      1. Understand different care routines and opinions on self-care through
      observational interviews.
    </Text>

    <Text>
      2. Design a mobile interface that uses an AI chatbot to give users the
      most personalized and relative information possible.
    </Text>

    <Title style="projectPage">Research</Title>

    <Text>
      We started our project with conducting 6{' '}
      <AccentSpan bold>observational studies</AccentSpan> and{' '}
      <AccentSpan bold>interviews</AccentSpan> with people of various ages and
      backgrounds to gain insight before settling on a main problem statement.
      During a season of sickness, we decided to evaluate how people take care
      of themselves.
    </Text>

    <Title style="projectPage" order={4}>
      Some of our interview questions:
    </Title>
    <List
      numbered
      accent
      className="mb-4"
      items={[
        'What are some ways that you take care of yourself?',
        'What is self-care by your definition?',
        'Do you think self-care is important? Why or why not?',
      ]}
    />

    <Text>
      For the observational studies, our participants walked us through their
      “self-care” activities which ranged from things like their skin-care
      routine, to a session at the gym together. During the observation
      activities, we asked the participants to voice out their thoughts and
      actions while they performed the actions to eliminate any assumptions we
      may have had during the study.
    </Text>

    <Title style="projectPage" order={3} className="mt-28">
      Data Collection
    </Title>

    <Text>
      We used <AccentSpan bold>affinity diagramming</AccentSpan> to organize the
      data we collected in our interview and observation notes. We used Miro to
      put single ideas and statements on digital post-it notes and group common
      thoughts together.
    </Text>

    <ProjectPageImage src={affinitydiagram} alt={'affinitydiagram'} />

    <Title style="projectPage" order={4}>
      Key Insights
    </Title>

    <List
      numbered
      accent
      className="mb-4"
      items={[
        <BoldLabeled label="Accessible care">
          We found that it is difficult for people to find accessible avenues to
          healthcare and wellness. These include things like finding doctors,
          hobbies to de-stress, managing time to put self-care into their
          schedule, and more.
        </BoldLabeled>,
        <BoldLabeled label="Self-care is not a priority">
          Many of our participants did not see self-care as necessary, which
          most mentioned led to illness and burn out.
        </BoldLabeled>,
        <BoldLabeled label="Expansion of self-care">
          Many of the participants included mental, emotional, and spiritual
          care under the umbrella of self-care as opposed to only physical care.
        </BoldLabeled>,
      ]}
    />

    <Title style="projectPage">Ideation</Title>

    <Title style="projectPage" order={3}>
      Brainstorming
    </Title>

    <Text>
      Using our insights and notes from affinity diagramming we started our{' '}
      <AccentSpan bold>brainstorming</AccentSpan> phase with a brain dump of any
      and all ideas. We put all of our ideas on post it notes and grouped them
      again similarly to the affinity diagramming. To settle on a few ideas, we
      used dot voting to select 3 main ideas to focus on. Most of the ideas
      emphasized personalization to the user because we found that people
      typically care for themselves in a way that is best suited to their
      lifestyle.
    </Text>

    <ProjectPageImage src={brainstorming} alt={'brainstorming'} />

    <Title style="projectPage" order={3}>
      Sketching + Storyboarding
    </Title>

    <Text>
      Each group member sketched out 3 potential ideas based on the main ideas
      we selected during brainstorming.
    </Text>

    <div className="flex flex-col lg:flex-row">
      <ProjectPageImage src={sketch} alt={'sketch'} />
      <ProjectPageImage src={storyboard} alt={'storyboard'} />
    </div>

    <Title style="projectPage" order={3}>
      Final Decision
    </Title>

    <Text>
      We decided on creating an <AccentSpan bold>AI assistant</AccentSpan> that
      will help with all of the issues we found in our research including time
      management, accessibility, and healthcare. As AI is becoming increasingly
      prominent in our world and personal lives, we thought a chatbot was the
      most effective solution to being able to answer more specific questions
      from the user and addressed our problem statement.
    </Text>

    <Title style="projectPage" order={4}>
      App Solutions
    </Title>

    <List
      numbered
      accent
      className="mb-4"
      items={[
        'Allows user to find doctors, specialists, classes, and more, that are perfectly fit to the users needs by the user answering questions ' +
          '(e.g. male or female doctor, insurance, etc.).',
        'AI will allow the user to automatically schedule the activities it recommends.',
        'The user can save and favorite activities that they participated in and enjoyed or want to view at a later date.',
      ]}
    />

    <Title style="projectPage">Prototyping</Title>

    <Title style="projectPage" order={3}>
      Paper Prototyping
    </Title>

    <Text>
      To visualize what our design could end up looking like we made{' '}
      <AccentSpan bold>paper prototypes</AccentSpan> to{' '}
      <AccentSpan bold>test</AccentSpan> the design quickly and with low time
      commitment. We instructed participants to find a new doctor and schedule
      an appointment with them using the prototypes. We also had them voice out
      again their thought process as well as any feedback they had about using
      the prototype.
    </Text>

    <ProjectPageImage src={paperprototype} alt={'paperprototype'} />

    <Title style="projectPage" order={3}>
      Task Flows
    </Title>

    <Text>
      We began digital prototyping by creating{' '}
      <AccentSpan bold>task flows</AccentSpan> and blocking out basic elements
      for the screens that would be needed to complete 3 different tasks.
    </Text>

    <ProjectPageImage src={taskflows} alt={'taskflows'} />

    <Title style="projectPage" order={3}>
      Wireframes
    </Title>

    <Text>
      We created <AccentSpan bold>low fidelity prototypes</AccentSpan> of the
      previous task flow screens using actual icons, text, image placeholders,
      and components. The wireframes included interfaces that allow the user to
      quickly and easily add recommended activities and healthcare options to
      their schedules that would sync to the user's calendar.
    </Text>

    <ProjectPageImage src={wireframes} alt={'wireframes'} />

    <Title style="projectPage" order={3}>
      Interactive Mockups
    </Title>

    <Text>
      After some revision we turned the low-level details into{' '}
      <AccentSpan bold>high-fidelity wireframes</AccentSpan>, implementing a
      color palette, text styles, logos, actual images, and more components. Our
      designs changed a bit with the menu bar initially being blue, but we
      changed it to pink and white to simplify the design. We also changed our
      info boxes and buttons to match throughout the app, as there were
      different styles of the same element across multiple screens. This helps
      the user <AccentSpan bold>draw on past experiences</AccentSpan>, like
      filling out the login boxes, to fill out boxes in the future such as
      insurance info.
    </Text>

    <Title style="projectPage" order={3}>
      Flow 1: Onboard and Customization
    </Title>

    <Text>
      Users can easily create an account by entering their email and a password,
      or by using Google, Facebook, or Apple. The process is straightforward and
      quick so users can start chatting right away. We also included a feature
      for users to customize their AI to make it friendlier and easier to talk
      to.
    </Text>

    <video autoPlay loop muted playsInline className="pb-32 pt-4">
      <source
        src={video1}
        className="w-[100%] h-[100%] relative"
        type="video/mp4"
      />
    </video>

    <Title style="projectPage" order={3}>
      Flow 2: Getting Help
    </Title>

    <Text>
      The recommended chat feature allows users to quickly find resources
      without even having to type. The personalized bot helps users find
      specialists that are perfect for them and users can explore, save, or even
      book appointments with the suggestions with just a few taps.
    </Text>

    <video autoPlay loop muted playsInline className="pb-32 pt-4">
      <source
        src={video2}
        className="w-[100%] h-[100%] relative"
        type="video/mp4"
      />
    </video>

    <Title style="projectPage" order={3}>
      Flow 3: Personal Info
    </Title>

    <Text>
      The profile section is what allows the chat bot to understand the user
      quickly and target their needs perfectly. Users can fill out their
      personal information such as insurance that lets them get exactly what
      they need, when they need it.
    </Text>

    <video autoPlay loop muted playsInline className="mb-56 pt-4">
      <source
        src={video3}
        className="w-[100%] h-[100%] relative"
        type="video/mp4"
      />
    </video>

    <Title style="projectPage">Reflection</Title>

    <Text>
      Looking back, this project has given me a strong grasp of how users and
      apps interact. Guided by established design heuristics, I was able to
      design an app to help people learn and integrate healthier habits into
      their lives. Testing our prototypes with users trying out different tasks
      was invaluable - they pointed out things we hadn't even considered,
      allowing us to improve our design before even really starting. I would
      have liked to test our high-fidelity mockups as well if time allowed,
      however my team and I were still able to create a design we can really be
      proud of.
    </Text>
  </ProjectPage>
)

export default Uline
