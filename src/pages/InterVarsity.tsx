import ProjectPage from '@/components/ProjectPage'
import Why from '@/components/Why'
import Text from '@/components/Text'
import Title from '@/components/Title'
import ProjectPageImage from '@/components/ProjectPageImage'
import List from '@/components/List'
import AccentSpan from '@/components/AccentSpan'

import Frame4 from '@/assets/Frame4.png'
import Frame7 from '@/assets/Frame7.png'
import PGallmocks from '@/assets/PGallmocks.png'
import PGFinals from '@/assets/PGFinals.png'
import PGfinalwireframes from '@/assets/PGfinalwireframes.png'
import PGmocks from '@/assets/PGmocks.png'
import PGsketches from '@/assets/PGsketches.png'
import Style from '@/assets/Style.png'
import GiveSiteMockup from '@/assets/GiveSiteMockup.png'
import GiveSiteMockup1 from '@/assets/GiveSiteMockup1.png'
import IVBefore from '@/assets/IVBefore.png'
import IVTalkingPoints from '@/assets/IVTalkingPoints.png'
import IVIdeation from '@/assets/IVIdeation.png'
import IVWF from '@/assets/IVWF.png'
import IVWF2 from '@/assets/IVWF2.png'
import onehundred from '@/assets/onehundred.png'
import Components from '@/assets/Components.png'
import Prototype from '@/assets/Prototype.png'
import s1 from '@/assets/s1.png'
import s2 from '@/assets/s2.png'
import Video from '@/assets/IVVideo.mp4'

const InterVarsity = () => (
  <ProjectPage title="InterVarsity">
    <Text>Inspiring ministry partners through the visualization of staff and campaign fundraising journeys.</Text>

    <Text>
      <strong>Collaborators:</strong> Ashley Crutcher (Experience Director & Manager), Rachel Lance (Product Owner), 
      Nathan Lens (Lead Developer)
    </Text>

    <Text>
      <strong>My Role:</strong> Digital Product Design, Research
    </Text>

    <Text>
      <strong>Timeline:</strong> June 2024 - August 2024
    </Text>

    <Text>
      <strong>Tools:</strong> Figma, Miro
    </Text>

    <Text>
    This past summer, I joined the communications team at InterVarsity, also known as twentyonehundred productions (2100), 
    as a digital product design intern. During my time with InterVarsity, I worked on a variety of real-world projects, 
    honing skills in everything from landing page design, to developing user research plans. My main project for the summer 
    was creating a progress tracker to monitor the donation progress for marketing campaigns and InterVarsity staff.
    </Text>

    <ProjectPageImage src={GiveSiteMockup1} alt="Progress tracker mockups" />

    <Why
      theProblem={
        'There wasn’t specific a problem per se, but rather a need to motivate our ministry partners to ' +
        'contribute more, or to get prospective donors to contribute at all. The current InterVarsity website ' +
        'lacked information on the progress of a campaign or staff’s fundraising goal. Sometimes donors just need a little ' +
        'encouragement, and the current giving pages did not have any indicators or updates to inspire them.'
      }
      butWhy={
        'When reaching out to ministry partners who are contributing significantly to our staff and organization, ' +
        'it’s important that they know the impact of their gifts. A tracker tells our donors that their help ' +
        'really does make a difference. Visual markers of progress also encourage donors to increase their contributions. ' +
        'For instance, if a staff is only $500 away from their goal, a donor may be motivated to give the full $500 instead of ' +
        '$250 they were planning to.'
      }
    />

    <Title style="projectPage" order={3}>
      The Goal
    </Title>

    <Text>
    Create a fundraising progress tracker to provide insight to donors as to where staff and marketing campaigns 
    are at in their fundraising process.
    </Text>

    <Title style="projectPage" order={4}>
      Actionables
    </Title>

    <List
      numbered
      accent
      items={[
        'Meet with the Give Site product owner and identify the needs, constraints, and possible solutions.',
        'Brainstorm different designs and produce low and high fidelity wireframes.',
        "Bring designs to product owner and development team for continued iteration. ",
      ]}
    />

    <Title style="projectPage" className="mt-12">
      Research
    </Title>
    
    <Text>
        For context, this is what the give site form looked like before. The only “push” that exists 
        is a small blue banner with some words of encouragement. Even then, it's not very engaging at all and does nothing
        to involve the user in the donation process. 
    </Text>

    <ProjectPageImage src={IVBefore} alt="before" />

    <Title style="projectPage" order={5} className="mt-12">
      Let's talk!
    </Title>

    <Text>
    The first step was to meet with the product owner of the Give Site to learn a little more about what was needed and why. 
    Given what I knew from the project brief, I went into the meeting with a few talking points and clarification questions 
    that would help me to figure out next steps and understand what the final design should look like. The questions and talking 
    points are pictured below.
    </Text>

    <ProjectPageImage src={IVTalkingPoints} alt="talking points" />

    <Text>
    Because the timeline did not allow for us to conduct our own research, I did some quick research online to ensure that progress 
    cues are actually motivators for donors. After digging around on NextAfter, a fundraising research lab, I was able to confirm that 
    the addition of a progress bar in&nbsp; 
    <a href="https://www.nextafter.com/experiments/how-an-animated-progress-bar-impacted-visits-to-the-website/" 
       target="_blank" 
       style={{ textDecoration: 'underline', color: '#209CE9' }}>
     one experiment 
    </a>
    &nbsp;resulted in a donation increase of 20.5% among those giving, and in&nbsp;
    <a href="https://www.nextafter.com/experiments/how-an-animated-progress-bar-impacted-visits-to-the-website/" 
       target="_blank" 
       style={{ textDecoration: 'underline', color: '#209CE9' }}>
    other cases
    </a>, 
  the presence of progress bars resulted in higher quality donations.
    
  
</Text>

<Text>
Following the meeting, we agreed on the next course of action, which was to design a few styles, wireframe, and present them later. 
The insights I found were based on the answers to my questions as well as the product owner’s own notes.
</Text>

    <Title style="projectPage" order={4}>
      Key Insights
    </Title>

    <List
      numbered
      className="text-malibu-300 mb-4"
      items={[
        <>
          <strong>Non-specific</strong>: Due to back-end constraints, the progress tracker shouldn’t show very specific 
          numbers such as exact dollar amounts, and it won't be able to perform live updates yet and staff and campaign managers
          will have to update progress manually.
        </>,

        <>
          <strong>Engagement</strong>: The tracker must be engaging and help users to visualize their contribution
          (perhaps an animation may be useful here!).
        </>,
        <>
          <strong>Storytelling</strong>: Giving is a process, 
          there should be follow-through after they submit a donation.
        </>,
      ]}
    />


    <Title style="projectPage" className="mt-12">
      Ideation
    </Title>

    <Title style="projectPage" order={3}>
      Brainstorming
    </Title>

    <Text>
    When I first received the project brief, my head was already buzzing with ideas. 
    Following the client meeting, I quickly dumped all of my thoughts and ideas into a notebook 
    to capture everything.  Given that the tracker progress would not be providing live updates
    for the time being, I focused on ideas conveying progress visually by either showing the most 
    recently updated numbers or by representing progress without relying on numerical data.
    </Text>
    
    <Text>
    Additionally, the donation page features a sidebar that I aimed to integrate. This sidebar 
    includes various information displays and widgets that can be swapped and toggled as needed, 
    making it versatile for marketing campaigns where the tracker might not need to be the focal point.
    </Text>

    <Title style="projectPage" order={3} className='mt-12'>
      Sketching
    </Title>

    <Text>
    I followed up my brainstorming session by sketching out a few ideas pictured below to visualize my concepts. 
    I experimented with different progress bar styles, animations for selecting various giving 
    options, thank-you page designs, and more. My exploration included designs using a bar format, 
    the InterVarsity logo, and a text-only approach.
    </Text>

    {/* <ProjectPageImage src={IVIdeation} alt="ideation" /> */}
    <ProjectPageImage src={s1} alt="s1" />
    <ProjectPageImage src={s2} alt="s2"/>


    <Text>
    I brought these sketches to my manager for feedback, where I learned that the planting motif 
    was already being used in another campaign and that incorporating plants on the Give Site could 
    cause unnecessary confusion. 
    </Text>

    <Text>
    After some discussion, we decided to focus on the bar style, logo, 
    and text-only options for further iteration, with animations limited to microinteractions. We 
    also refined the logo style, retaining only the arch as a subtle nod to the actualy logo 
    to avoid logo interference. Due to the layout of the donation form section, the bar style was 
    chosen for placement within the main form, while the logo and text-only styles were reserved for 
    use in the sidebar during marketing campaigns.
    </Text>

    <Title style="projectPage" order={3}>
      Wireframing
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

    <ProjectPageImage src={IVWF} alt="wireframes" />

    <Title style="projectPage" order={5} className="mt-12">
      More discussion...
    </Title>

    <Text>
        After finishing the first round of wireframes, I presented them to the UX team during our
        weekly critique where many new considerations were raised. 
    </Text>

    <Text>
        For example, if we were do have a "jump" in the progress bar when the user selects an amount
        to give, how will we calculate the percentage of their contribution when a partner chooses to
        give monthly or quarterly? Will we reflect the visual representation as their cumulative 
        12-month contribution, or should we just show one month? Should we include the total goal amount?
    </Text>
    
    <Text>
    There was a lot to think about, so I tackled each issue one at a time. The biggest challenge at hand 
    was how to display a partner's potential contribution for giving options that would repeat throughout 
    the year. My initial idea was to include a <strong>written signifier</strong> indicating that the displayed 
    contribution would be based on a 12-month commitment. However, after speaking with a few other 
    InterVarsity staff, I discovered that most donors typically give monthly for at least a 
    year and that we could trust donors to understand this when shown their potential contribution.
    </Text>
    
    <Text>
        As for the goal amount, a discussion with the developers allowed for a straightforward solution. 
        The tracker is still a new feature and it should aim to be as simple as possible, so we decided 
        to show only a percentage for now, which was within the team's current capacity. I left the developers 
        with wireframe styles that included end-goal amounts for future implementation when the bandwidth exists.
    </Text>

    <Text>
        After much talking and seldom designing, I drafted some new wireframes!
    </Text>

    <ProjectPageImage src={IVWF2} alt="wireframes2" />

    <Text>
        We made a few key changes based on the feedback: removing the "As of" update disclaimer, and added the visual 
        display of a donor's contribution upon gift selected.
    </Text>

    <Text>
        I then moved onto visual design updates. In the context of the actual giving page, the initial progress bar 
        looked visually uninteresting and somewhat "floaty". There was no clear connection between the percentage 
        and the bar, they seemed like two separate elements. Additionally, the percentage felt too close 
        to the button amounts, making the overall design feel cluttered and unbalanced. To remedy this, I repositioned 
        the percentage below the bar and created a visual connection using a small pointer in between the two. I also 
        reduced the size of the percent sign to bring focus to the number itself.
    </Text>

    <Title style="projectPage" order={5} className="mt-12">
      Here comes another challenge!
    </Title>

    <Text>
        During review, I realized I had overlooked an important edge case: when a goal has been met 
        and has reached 100%, users should still be able to donate. A filled progress bar, however, might 
        give the impression that the goal has been met and cause potential donors to thing their contribution 
        is no longer needed.
    </Text>

    <Text>
        The best solution I came up with was to slightly push back the 100% mark so that the bar 
        is never truly "full", along with adding a playful signifier to inform the user that donations 
        are still accepted and valuable, even after the initial goal has been met.
    </Text>

    <Text>
        This design ensures that visitors can see there is always room for more and encourages them to continue contributing.
    </Text>

    <ProjectPageImage src={onehundred} alt="100" />

    <Title style="projectPage">Prototyping</Title>

    <Title style="projectPage" order={3}>
      Typography & Colors
    </Title>

    <Text>
        With the wireframes being approved, I finally moved onto prototyping. 
        In this phase, I added colors, changed fonts, fully developed the side-bar styles, 
        and polished everything up. 
    </Text>

    <Text>
        When choosing to add the progress bar to a give page, staff can pick 
        one of three colors: orange, blue, or green. In the case of the side-bar, they can 
        select both a style and color with the text-only option in only orange 
        and blue, as InterVarsity doesn't have green icons.
    </Text>

    <ProjectPageImage src={Components} alt="Finals" />

    <Text>
    I also added some simple animations to keep users engaged and provide even better visualization of 
    contribution. Following the actionables I stated at the start of this study, donation is a 
    process. There should be follow through feedback to the user after their submit their donation. 
    I included the progress bar in the thank you page to confirm their contribution and to keep 
    continual engagement. 
    </Text>

    <ProjectPageImage src={Prototype} alt="prototype" />

    <Title style="projectPage" order={3}>
      Final Designs & Prototype
    </Title>

    <video autoPlay loop muted playsInline className="pb-8 mx-auto"
     style={{ maxWidth: '80%', maxHeight: '80%' }}
     >
      <source src={Video} type="video/mp4" />
    </video>

    <Title style="projectPage">Reflection</Title>

    <Text>
    This project presented a myriad challenges, but in return, I received a wealth of new skills, 
    experiences, perspectives, and so much more. For what seemed like a simple concept, I was 
    amazed by the number of details that needed to be considered and addressed at each step of the process. 
    From seeking client approval, to overlooked edge cases, I encountered so many teachable aspects
    of design I never thought about that I would have missed had I not done this internship.
    </Text>

    <Text>
    But that's what internships are for—learning! Fortunately, I was a part of a wonderfully 
    patient and supportive team that guided me just enough so I could explore and create on my own. 
    This was my first experience working closely with a client and developers, and even in just a 
    few calls, I learned a lot.
    </Text>

    <Text>
    One of my key takeaways from this project is the importance of considering developer capacity 
    and database design within my own designs. What I envisioned versus what was realistic for the 
    organization to do were quite different, but these constraints provided an fun 
    challenge. Now that I have a deeper understanding of the real-world digital product design 
    process, I'm eager to put this newfound knowledge to good use in future projects.
    </Text>

    <Title style='funky' order={3}>Nat;</Title>
  </ProjectPage>
)

export default InterVarsity
