import DetailItem from "../components/Timeline/DetailItem"
import { FreelanceChapter } from "./types"

const currentYear = new Date().getFullYear()
export const freelanceHistory:FreelanceChapter[] = [
  {
    timeframe: "2005-2007",
    events: [
      {
        year: 2005,
        yearEnd: 2007,
        title: 'Desktop Wallpaper Aficionado', 
        subtitle: "University of Kentucky Athletics",
        text: [
          "As a student, I was enamored by digital design, but great digital photography was tough to come by. However, our D\u2060-\u20601 athletics department had plenty of that! I spent my college years creating website graphics and desktop wallpapers for UKAthletics.com",
          "I also found ways to grow my skills creating graphics and print assets for various student groups on campus."
        ],
        type: "DESIGN",
      }
    ]
  },
  {
    timeframe: "2007-2010",
    events: [
      {
        year: 2007,
        yearEnd: 2012,
        title: 'School Music Program Branding Guru', 
        subtitle: "Middle and high schools throughout Kentucky",
        text: [
          "In college, I learned how to teach choir. I also learned the immense value of good design! When I got my first job, I set out to brand my choir program. We had our logo EVERYWHERE and the students loved it.",
          "As word spread amongst my friends and colleagues across the state, I grew this into a small business of branding music programs, creating classroom teaching aids and posters, creating promotional materials, you name it!"
        ], 
        type: "DESIGN",
      },
      {
        year: 2009,
        yearEnd: 2012,
        title: 'One-stop shop',
        subtitle: "Middle and high schools throughout Kentucky",
        text: [
          "I launched a website for my choir programs. It was simple. A blogger site, I think. But it got me doing this type of thing and I was good at it. I was approached by other programs within the school and (again) by some of my music-teacher colleagues to set up their site as well. ",
          "During these years I also led some disctrict-wide seminars about using tech for enhancing education, teaching other teachers to fish."
        ],
        type: "DEV"
      },
      {
        year: 2008,
        yearEnd: 2015,
        title: 'Creative Programming Graphics',
        subtitle: 'Adventure Christian Church',
        text: [
          "During this time, I also moved into creating all the creative graphics packages for a local church. Print, screen, and web, I did it all."
        ],
        type: "DESIGN"
      }
    ]
  },
  {
    timeframe: "2010-2014",
    events: [
      {
        year: 2011,
        title: 'I Built My First Website! 🎉', 
        text: [
          "Adventure Church desperately needed a new website, and that's where I stepped in. I built my first website from the ground up using HTML, CSS, and JS.",
          "This build included integrating a third-party CMS, giving the staff the ability to create and edit their own page content.",
          "This project is when I first got bit by the development bug and I couldn't turn back."
        ],
        type: "DEV",
      },
      {
        year: 2010,
        yearEnd: 2017,
        title: 'Everyone Needs Swag!',
        subtitle: 'Joseph Johnson Promotions, Louisville, KY',
        text: [
          "After leaving teaching, I became the primary designer for Joseph Johnson Promotions, a small promotional products company in Louisville, KY. This meant putting logos on pens and mugs, but also everything from brochures to business cards to t-shirts.",
          "It's still very fun (and a little strange) to be walking around town and see someone in a shirt I designed!"
        ],
        type: "DESIGN"
      }
    ]
  },
  {
    timeframe: "2014-2017",
    events: [
      {
        year: 2014,
        yearEnd: 2017,
        title: '"Template Platforms Are AMAZING!"', 
        subtitle: '- Me, circa 2014',
        text: 'These are the days when I discovered the beauty of template platforms like *shape-space* and *word-push*. Back then, they allowed me to do a lot of the work of building a polished website for clients without the fuss. Here are some of the projects from that era:', 
        additionalContent: (
          <ul>
            <DetailItem 
              title="Guaranteed Home Construction" 
              desc="General Contractor in Louisville, KY" 
            />
            <DetailItem 
              title="RxAlternatives" 
              desc="Compounding Pharmacy in Louisville, KY" 
            />
            <DetailItem 
              title="Open Doors" 
              desc="Humanitarian organization in Kentucky and Guatemala" 
            />
            <DetailItem 
              title="Wear The Legacy" 
              desc="E-Commerce apparel website" 
            />
            <DetailItem 
              title="Forza Tuned" 
              desc="High-end tuning garage in Georgetown, IN" 
            />
          </ul>
        ),
        type: "DEV",
      },
      {
        year: 2017,
        title: "Branding Specialist",
        text: "I began taking more ambitious design jobs, creating brand identities (logos, style guides, etc) for several clients, mostly of the local small business variety.",
        type: "DESIGN"
      }
    ]
  },
  {
    timeframe: "2017-2019",
    events: [
      {
        year: 2017,
        title: 'The custom calendar conundrum', 
        subtitle: 'Limitations breed innovation',
        text: [
          "In 2016 we moved to Germany. A local church brought me in to redesign their logo and marketing materials, including a website. I turned to my *shape-space* bag of tricks, only to find that the calendar widgets they offer all followed an American calendar model.",
          "The real challenge was not finding and replacing german day and month names. That part was easy. The real challenge was their calendar going MON to SUN, instead of SUN to SAT. In the end, I ended up building a custom calendar component that was able to interact with the built-in functionality that the template offered, to make the experience a recognizable one for a German audience."
        ], 
        type: "DEV",
      },
      {
        year: 2017,
        title: '"Template Platforms Are GARBAGE!"', 
        subtitle: '- Me, circa 2017',
        text: [
          "I have always had a can-do approach to what clients asked for, even if it was something I had not yet learned. At the end of the day, the customer really is always right.",
          "Templating platforms can be really great and they have a lot to offer. But they also can be very limiting. You can customize anything and everything that they have created a slider for.",
          "This is the point when I started bumping up against those limitations in almost every job that I built. My solution? Custom javascript code injections. I learned Javascript and started using it for custom functionality on all of my projects.",
        ], 
        type: "DEV",
      },
      {
        year: 2019,
        title: 'Hodge Law, PLLC', 
        text: 'My final freelance client. This website was completed but never launched, at the request of the client for budgetary reasons.', 
        type: "DEV",
      },
      {
        year: 2019,
        title: 'Hodge Law, PLLC', 
        text: 'My last design client. Included logo work, All print assets (letterhead, business cards etc), brand guidelines, and website.', 
        type: "DESIGN",
      },
      {
        year: 2018,
        yearEnd: 2019,
        title: 'The "Custom Builds" Guy',
        subtitle: "Atomivox, a creative agency in Lisbon, Portugal", 
        text: [
          "In 2018, I partnered with an agency in Portugal who worked primarily in Wordpress/Divi but needed a custom builds expert.",
          "I played a part building websites using page builders, but my primary role was to build the custom components and elements according to client spec.",
          "This was my first taste of building React applications and embedding them into a WP site. Some of my jobs included:"
        ],
        additionalContent: (
          <ul>
            <DetailItem 
              title="React savings calculator"
              desc="A interactive savings calculator based on ReactJS "
            />
            <DetailItem 
              title="Custom calendar"
              desc="Building on my previous experience with international calendars, this was calendar 2.0, built with ReactJS"
            />
            <DetailItem
              title="Multi-step Form"
              desc="Client requested a form that could be handled across multiple steps. Built with ReactJS"
            />
            <DetailItem 
              title="Website builds"
              desc="Used our page builders to build client websites."
            />
            <DetailItem 
              title="Branding/Logo development"
              desc="Led initial branding efforts for two incoming clients"
            />
          </ul>
        ),
        type: "DEV",
      },
    ]
  },
  {
    timeframe: `2019-${currentYear}`,
    events: [
      {
        year: 2019,
        yearEnd: currentYear,
        title: 'Finally, a full-time developer!', 
        subtitle: "It took a while, but I've found what I love.",
        text: [
          "After years of building skills on the side, I finally made the switch to developing full-time.",
          "In this period, I have worked as the sole or primary Frontend developer on two projects. One was a Fintech startup with a tiny team, and the other on a team at a Fortune 100 company."
        ], 
        additionalContent: (
          <ul>
            <DetailItem
              title="AIG Warranty"
              desc=".NET, C#, SQL, React"
            />
            <DetailItem 
              title="borderless"
              desc="React, Typescript, GraphQL, Node.js (+ TS), Prisma, Docker"
            />
          </ul>
        ),
        type: "DEV",
      },
    ]
  },
]