import {AcademicCapIcon, BuildingOffice2Icon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import heroImage from '../images/background.png';
import porfolioImage1 from '../images/portfolio/portfolio1.png';
import porfolioImage2 from '../images/portfolio/portfolio2.png';
import porfolioImage3 from '../images/portfolio/portfolio3.png';
import porfolioImage4 from '../images/portfolio/portfolio4.png';
import porfolioImage5 from '../images/portfolio/portfolio5.png';
import porfolioImage6 from '../images/portfolio/portfolio6.png';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Home,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio',
  description: 'React portfolio template built with react and next js',
};

export const SectionId = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const homeData: Home = {
  imageSrc: heroImage,
  name: `I'm Samuel Smith.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Frontend Developer </strong>
        with over <strong className="text-stone-100">8 years of experience</strong> in <br></br> designing, developing,
        and deploying high-quality web applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A results-driven and motivated professional seeking a challenging.<br></br> Open to exploring new opportunities
        and utilizing my skills and experience to drive growth and success.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      Proficient in both frontend and backend development, with expertise in a variety of technologies including React,
      Next.js, React Native, Node.js, Javascript, Typescript, and Vue.js. Strong ability to balance technical and
      business requirements to create innovative and user-friendly solutions. Proven track record of effectively leading
      cross-functional teams and delivering complex projects on-time and on-budget. Committed to staying up-to-date with
      the latest web development technologies and best practices.
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Phoenix, US', Icon: MapIcon},
    // {label: 'Age', text: '24', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'Learning new technologies', Icon: SparklesIcon},
    {label: 'Study', text: 'DePaul University(US)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open for a new role', Icon: BuildingOffice2Icon},
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Bodyo',
    description: '',
    url: '',
    image: porfolioImage2,
  },

  {
    title: 'Healthy Screen',
    description: '',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Six Lamba',
    description: ``,
    url: '',
    image: porfolioImage3,
  },

  {
    title: 'Twitter',
    description: ``,
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'medlab',
    description: '',
    url: '',
    image: porfolioImage1,
  },

  {
    title: 'Thrive',
    description: `
    `,
    url: '',
    image: porfolioImage6,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2013 - 2017',
    location: 'DePaul University(US)',
    title: 'BS Computer Science',
    content: (
      <p>
        {/* <strong style={{color: '#f97316 !important'}}>Skills:</strong> React.js · Next.js · Node.js · TypeScript ·
        Redux.js · Redux Thunk · Gitlab · Git · Ant Design · GitHub{' '} */}
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '06/2022 - 10/2024',
    location: 'Azumo',
    title: 'Senior Frontend Developer',
    content: (
      <p>
        • Led the frontend design and implementation of a high-traffic e-commerce platform using React.js and Next.js,
        achieving a 35% increase in page load speed and a 20% boost in conversion rates.<br></br> • Championed a
        component-driven approach with TypeScript and Redux, reducing code duplication by 30% and accelerating
        development speed by 15% to enhance team efficiency.<br></br> • Collaborated with UX/UI designers on
        user-friendly interfaces, resulting in a 25% improvement in satisfaction scores, while integrating machine
        learning models with TensorFlow and PyTorch and leveraging OpenCV and YOLO for advanced image processing.
      </p>
    ),
  },
  {
    date: '05/2021 - 05/2022',
    location: 'Azumo',
    title: 'Front Team Lead',
    content: (
      <p>
        • Managed a team of 4 frontend developers, delivering 5+ major projects on time and within budget using React.js
        and AngularJS, while ensuring high code quality standards.
        <br></br>• Implemented unit and integration tests with TypeScript, achieving a 40% reduction in production bugs
        and significantly enhancing system stability for a reliable user experience.
        <br></br>• Revitalized the development workflow with modern tools like Webpack and Babel, and utilized Docker
        and Kubernetes for deployment, resulting in a 20% increase in team productivity.
      </p>
    ),
  },
  {
    date: '01/2020 - 04/2021',
    location: 'Glorium Technologies',
    title: 'Frontend Developer',
    content: (
      <p>
        • Contributed to a single-page application using React.js and Next.js, improving user interaction speed by 50%
        and increasing customer satisfaction scores by 15%.
        <br></br>• Automated testing with Jasmine and Karma, reducing manual testing time by 40% and enhancing overall
        code reliability and deployment frequency.
        <br></br>• Collaborated in cross-functional teams to integrate RESTful APIs, improving data retrieval efficiency
        and reducing server response times by 20%.
      </p>
    ),
  },
  {
    date: '05/2018 - 12/2019',
    location: 'Glorium Technologies',
    title: 'Junior Frontend Developer',
    content: (
      <p>
        • Developed a mobile-first web application with TypeScript and React.js, boosting mobile traffic by 50% and user
        engagement by 30%. <br></br>• Optimized site performance, achieving a 60% reduction in page load time and
        significantly enhancing SEO rankings.<br></br> • Directed the implementation of a RESTful API using AWS and
        Google Cloud Platform, increasing data retrieval speeds by 25%.
      </p>
    ),
  },
  {
    date: '07/2017 - 04/2018',
    location: 'Glorium Technologies',
    title: 'Web Developer',
    content: <p>• Performed rigorous testing to identify and fix over 60 bugs within the front-end application.</p>,
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: '',
  testimonials: [
    // {
    //   href: 'https://www.linkedin.com/in/selcukkizilkaya/',
    //   name: 'Selcuk Kizilkaya',
    //   text: 'Fazal demonstrates a strong focus on achieving outcomes and skillfully navigating through numerous challenges. Despite encountering several obstacles, he adeptly resolved each issue by engaging in collaborative discussions with team members, ensuring he could progress and successfully reach the intended goals.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    {
      href: '',
      name: 'Yasar Rahman',
      text: 'Samuel is always a pleasure to work with. He is responsive, timely with his work, and can be counted on to do a thorough job with all tasks, always taking the time to do things the right way so they do not have to be redone. That said, he is always quick to respond to feedback and successfully implement new changes as needed. His level of skill in JavaScript, React, React Native, Next.js, TypeScript as well as SASS/CSS easily approaches mastery. Including him on a project, whether building something from scratch or iterating on an existing codebase, is a no brainer.',
      image: '../images/profilepic.png',
    },
    // {
    //   href: 'https://www.linkedin.com/in/vimbaimidzi/',
    //   name: 'Vimbai Beverly Midzi',
    //   text: `Fazal's work was instrumental in making sure I had the foundations for a donations CMS. Before this, there was an overdependency on engineering support that was very difficult to secure. He listened to my needs and made edits where necessary to make it more usable to me.`,
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
    // {
    //   href: 'https://www.linkedin.com/in/azan-ibrar-9b03a3202/',
    //   name: 'Azan Ibrar',
    //   text: `You're an outstanding engineer, and an even more remarkable friend. Your constant support and willingness to help other falcons make a significant impact. Thanks for all the fantastic contributions you bring to the table!`,
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   href: 'https://www.linkedin.com/in/zaid-iqbal-702b55150/',
    //   name: 'Zaid Iqbal',
    //   text: `Thanks for being a supportive colleague.`,
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   href: 'https://www.linkedin.com/in/sumran-waheed/',
    //   name: 'Samran Waheed',
    //   text: `I want to highlight the outstanding collaboration with Fazal on our recent project. As the Back-End Developer, I worked closely with Fazal, who handled the Front-End tasks.

    //   Fazal's quick and efficient Front-End work greatly contributed to our project's success. His clear communication and proactive approach ensured seamless collaboration. Despite facing challenges on the Back-End, Fazal consistently provided valuable support, pushing the project forward.

    //   I commend Fazal for his dedication, proficiency, and positive attitude. Working with him was a pleasure, and I look forward to future collaborations.`,
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   href: 'https://www.linkedin.com/in/hamza-sohail1/',
    //   name: 'Hamza Sohail',
    //   text: `Thank you, Fazal, for always being so supportive and helpful with any kind of technical issue. You possesses great knowledge and the ability to share it with others. Thanks for dedicating your time to guide and support me and many others.`,
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
    // {
    //   href: 'https://www.linkedin.com/in/mohsin-khalid-a25669218/',
    //   name: 'Mohsin Khalid',
    //   text: `I would like to praise Fazal for always supporting me and guiding me during the start of my career. Your dedication and creativity are truly inspiring. Thank you for always helping me about the little details and overall structure of how things work at Careem.`,
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: (
    <>
      <strong style={{color: 'rgba(249, 115, 22, 1) !important'}}>Reach out</strong> to me through the following social
      links, and let's make things happen! 🚀.Looking forward to connecting with you! 🌟
    </>
  ),
  items: [
    {
      type: ContactType.Email,
      text: 'samuelsmith.jr1102@gmail.com',
      href: 'mailto:samuelsmith.jr1102@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Phoenix, US',
      href: 'https://maps.app.goo.gl/Cw3YU4yxsnjadtBX6',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@fazal_joyia.js',
    //   href: 'https://www.instagram.com/fazal_joyia.js',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'fazaljoyia',
    //   href: 'https://github.com/fazaljoyia',
    // },
  ],
};

export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/fazaljoyia'},
  // {label: 'FaceBook', Icon: FacebookIcon, href: 'https://www.facebook.com/FazalJoyia0786?mibextid=ZbWKwL'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/fazal-abbas-careem/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/fazal_joyia.js/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Fazal__Joyia'},
];
