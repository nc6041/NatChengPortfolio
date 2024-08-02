import styles from "../style";
import { followupemail, headersketch, finalheaderdesign, prototyping, beforeheader, fu2raw, fu1sketch, fu2sketch, fu1raw, genericwelcome, foodservice, welcomebefore, footerbefore, headerinitialsketch, versionsuline, contentbefore, contentafter, footerafter } from "../assets";

const UlineHero2 = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-dimBlack`}>The Goal</h1>
        </div>

        <p className={`mb-10 w-full`}>
          Create a new industry specific welcome campaign that is more
          personalized and engaging to improve the process of becoming a
          recurring customer with Uline.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-malibu-300`}
          >
            Actionables
          </h1>
        </div>

        <p className={`mb-3 ml-3 text-malibu-300 w-full`}>
          1. Select an industry to target and suitable products to advertise in
          the campaign.
        </p>

        <p className={`mb-3 ml-3 text-malibu-300 mb-3 w-full`}>
          2. Design and develop emails and landing pages that will be beneficial
          to send to the customer within the 3 months following their first
          purchase.
        </p>

        <p className={`mb-32 ml-3 text-malibu-300 mb-3 w-full`}>
          3. Create a circulation timeline of when to send out each email and
          print piece.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-malibu-300`}>Research</h1>
        </div>

        <p className={`mb-6 w-full`}>
          We selected an industry to target for our campaign using Standard
          Industrial Classification (SIC) codes, which are codes that identify
          the type of industry a business or company is under. The more digits
          that are added, the more specific the industry gets.
        </p>

        <p className={`mb-6 w-full`}>
          The goal was to choose an industry that is growing quickly in business
          with Uline, but also had a good variety of mostly high selling
          products to advertise in the campaign. Using Power BI to do market
          analysis, we settled on SIC code 58, Eating and Drinking Places, which
          had projected growing sales with Uline.
        </p>

        <p className={`mb-6 w-full`}>
          From there, the Product Marketing and Web Merchandising Interns
          collaborated to select suitable products to use in the campaign emails
          and landing pages.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-malibu-300`}
          >
            Key Insights and Considerations
          </h1>
        </div>

        <p className={`mb-3 ml-3 text-malibu-300 w-full`}>
          1. Customers under SIC 58 purchased many items listed under janitorial
          and retail.
        </p>

        <p className={`mb-3 ml-3 text-malibu-300 mb-3 w-full`}>
          2. The single-use plastic ban in Canada affects the types of products
          that can be used in our campaign.
        </p>

        <p className={`mb-24 ml-3 text-malibu-300 mb-32 w-full`}>
          3. There are some products related to food service with lower GPs that
          would still be good to advertise since customers may not know that
          Uline sells them.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-malibu-300`}>Ideation</h1>
        </div>

        {/* <p className={`mb-6 w-full`}>
          The design process at Uline starts with web merchandising. They select products to be displayed along with 
          possible concepts for an email design and place all the information in a content sheet which then gets
          passed along to web designers to bring to life. 
        </p> */}

        <p className={`mb-32 w-full`}>
          Us interns mimicked the workflow that the creative department normally
          follows. As a team we decided to redesign the welcome email that gets
          sent immediately following the creation of an account as well as some
          follow up emails and print pieces that would be sent to the customer
          after they make their first purchase. I brainstormed designs for the
          welcome email redesign on my own and was given content sheets
          containing products to use and copy for the follow up emails as they
          were the main deliverables for the project.
        </p>

        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className={`flex-1 text-dimBlack`}>Welcome Email Process</h1>
        </div>

        <p className={`mb-6 w-full`}>
          For the welcome email header redesign I wanted to change the products
          from boxes to food service products that would be on the landing pages
          that the follow up emails would lead to make the design more
          personalized to the customer's business. I also created a generic
          header to send to customers who are not shopping for a specific
          industry, or for personal needs.
        </p>

        <p className={`mb-32 w-full`}>
          The initial redesign strayed too far from Uline's brand style so to
          reel it back in I simplified the product composition and changed the
          color scheme to match Uline's most recognizable colors. The products I
          featured were some of the industry's highest selling products that we
          found during our research stage. This makes the design more relevant
          to customers and exposes them to our products for that industry early
          on.
        </p>

        <ul className="list-none sm:flex justify-end items-center flex-initial mb-32">
          <li className="">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>Before</h1>
            </div>
            <img src={welcomebefore} alt={'welcomebefore'} className="mb-2" />
            {/* <img src={footerbefore} alt={"footerbefore"} className="mb-2 mr-3" /> */}
          </li>
          <li className="ss:ml-3 ml-0 xs:w-auto sm:w-[580px] md:w-[620px] w-[600px]">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>Sketch</h1>
            </div>
            <img
              src={headerinitialsketch}
              alt={'headerinitialsketch'}
              className="mb-2"
            />
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>Versions</h1>
            </div>
            <img src={versionsuline} alt={'versionsuline'} className="mb-2" />
          </li>
        </ul>

        {/* <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-dimBlack`}>
            Before
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6">
            <img src={beforeheader} alt={"beforeheader"} className="w-[100%] h-[100%] relative" />    
        </div>

        <p className={`mb-6 w-full`}>
          For the welcome email header redesign I wanted to change the products from boxes to food
          service products that would be on the landing pages that the follow up emails would lead to make
          the design more personalized to the customer's business. I also created a generic header to send 
          to customers who are not shopping for a specific industry, or for personal needs. 
        </p>

        <p className={`w-full`}>
          I started with a small sketch before bringing the design into photoshop. The initial design I had
          strayed too far from Uline's branch style so to reel it back in I simplified the product composition 
          and changed the color scheme to match Uline's most recognizable colors. 
        </p>

        <div className="flex-1 flex flex-col pb-32 pt-6">
            <img src={headersketch} alt={"headersketch"} className="w-[100%] h-[100%] relative" />    
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex justify-center text-dimBlack`}>Header After</h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-4">
          <img
            src={finalheaderdesign}
            alt={'finalheaderdesign'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className={`flex-1 text-dimBlack`}>Additional Changes</h1>
        </div>

        <p className={`mb-6 w-full`}>
          I also changed the typeface of the content of the email to match the
          custom typeface that Uline uses in all their designs in order to make
          the designs more cohesive across the board as well as help the
          customer become more familiar with the Uline brand and style.
        </p>

        <p className={`mb-32 w-full`}>
          I also changed the footer to match Uline's other emails since the
          welcome email footer differs from the promotional emails Uline
          currently sends out.
        </p>

        <ul className="list-none sm:flex justify-end items-center flex-1 mb-32">
          <li className="sm:mr-2 mr-0">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Content Before
              </h1>
            </div>
            <img
              src={contentbefore}
              alt={'contentbefore'}
              className="mb-2  md:mr-3 mr-0"
            />
          </li>
          <li>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Content After
              </h1>
            </div>
            <img
              src={contentafter}
              alt={'contentafter'}
              className="mb-2 md:ml-3 ml-0 w-[92%]"
            />
          </li>
        </ul>

        <ul className="list-none sm:flex justify-between items-center flex-1 mb-3">
          <li className="sm:mr-2 mr-0">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Footer Before
              </h1>
            </div>
          </li>
          <li>
            <img
              src={footerbefore}
              alt={'footerbefore'}
              className="mb-2 md:ml-3 ml-0"
            />
          </li>
        </ul>

        <ul className="list-none sm:flex justify-between items-center flex-1 mb-32">
          <li className="sm:mr-2 mr-0">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Footer After
              </h1>
            </div>
          </li>
          <li>
            <img
              src={footerafter}
              alt={'footerafter'}
              className="mb-2 md:ml-3 ml-0"
            />
          </li>
        </ul>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex justify-center text-dimBlack`}>
            Welcome Email Final Designs
          </h1>
        </div>

        <ul className="list-none sm:flex justify-end items-center flex-1 mb-32">
          <li className="sm:mr-2 mr-0">
            <img
              src={genericwelcome}
              alt={'genericwelcome'}
              className="mb-2 md:mr-3 mr-0"
            />
          </li>
          <li>
            <img
              src={foodservice}
              alt={'foodservice'}
              className="mb-2 md:ml-3 ml-0"
            />
          </li>
        </ul>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-dimBlack`}>Follow Up Email Process</h1>
        </div>

        <p className={`mb-6 w-full`}>
          I created the follow up emails using the content sheets I was given as
          a guideline in my design process. For both designs, I started with a
          sketch before submitting a photo request to Uline's in-house photo
          studio to shoot the composition of the products that I wanted. The
          first email I created addresses the back end needs of a restaurant,
          focusing on things like kitched supplies and packaging.
        </p>

        <p className={`w-full`}>
          Since Uline's biggest customers in SIC 58 are fast food companies, I
          wanted to illustrate the busyness of the food service industry behind
          the counter while still staying on brand with the high quality
          packaging and organization that Uline typically displays.
        </p>

        <p className={`mb-32 w-full`}>
          The second follow up email targets the front end necessities of a
          restaurant using items like outdoor furniture and plastic A-frames.
        </p>

        <ul className="list-none sm:flex justify-end items-center flex-1 mb-32">
          <li className="sm:mr-2 mr-0">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Follow Up 1 Sketch
              </h1>
            </div>
            <img
              src={fu1sketch}
              alt={'fu1sketch'}
              className="mb-2  md:mr-3 mr-0"
            />
          </li>
          <li>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Follow Up 1 Raws
              </h1>
            </div>
            <img src={fu1raw} alt={'fu1raw'} className="mb-2 md:ml-3 ml-0" />
          </li>
        </ul>

        <ul className="list-none sm:flex justify-end items-center flex-1 mb-32">
          <li className="sm:mr-2 mr-0">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Follow Up 2 Sketch
              </h1>
            </div>
            <img src={fu2sketch} alt={'fu2sketch'} className="mb-2 mr-3" />
          </li>
          <li>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className={`flex justify-center text-dimBlack`}>
                Follow Up 2 Raws
              </h1>
            </div>
            <img src={fu2raw} alt={'fu2raw'} className="mb-2 ml-3" />
          </li>
        </ul>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex justify-center text-dimBlack`}>
            Follow Up Email Final Designs
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-4">
          <img
            src={followupemail}
            alt={'followupemail'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-malibu-300`}>Prototyping</h1>
        </div>

        <p className={`mb-6 w-full`}>
          Since the emails I made will be displayed digitally, I didn't need to
          actually prototype them, but I did prototype the landing pages. Each
          email leads to it's own landing page featuring the same items, but
          with a different header to match the respective email. I coded and
          produced these landing pages on a mock Uline website.
        </p>

        <p className={`mb-6 w-full`}>
          During the development of the landing pages i worked with the web
          merchandising intern to ensure that all the item thumbnails were
          placed in a logical and visually appealing way. Additionally, we made
          sure that the layout of the landing page looked good on both{' '}
          <span className="font-bold text-malibu-300">desktop and mobile</span>.
        </p>

        <div className="flex-1 flex flex-col pb-32 pt-4">
          <img
            src={prototyping}
            alt={'prototyping'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-malibu-300`}>Reflection</h1>
        </div>

        <p className={`mb-6 w-full`}>
          Going through the design process myself and iterating through all of
          the designs I made was very time consuming but also totally worth it!
          Even though my role as a web design intern was more graphic design
          based, I was able to practice user experience design by creating email
          designs that target user needs.
        </p>

        <p className={`mb-6 w-full`}>
          The project was also great real world experience in understanding how
          to work in a team and adjusting my own workflows around the people I
          am working with. I was very lucky to be put on a hardworking and
          passionate team and they taught me a lot about their own roles which
          allowed me to gain a deeper understanding the different parts of a
          business as well as what the design process looks like in larger
          scale.
        </p>

        <p className={`mb-24 w-full`}>
          I hope to apply the design skills I picked up on this project and at
          this internship to create even better user-centric designs in the
          future.
        </p>
      </div>
    </section>
  )
};

export default UlineHero2;
