import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tutor,
    freelance,
    nef,
    PwC,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "PWC UK: Pathway to a flying start",
      icon: PwC,
      iconBg: "#E6DEDD",
      date: "March 2022 - May 2022",
      points: [
        "Collaborated in designing tools and platforms that help clients visualize and analyse data efficiently, using languages like Python, R, or SQL.",
        "Implemented data specialists and engineers to build, maintain, and optimize software that processes large datasets.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Shadow senior engineers and data specialists, learning how to integrate data insights with business decision-making processes.",
      ],
    },
    {
      title: "Computer Science Tutor",
      company_name: "Self Employed",
      icon: tutor,
      iconBg: "#383E56",
      date: "May 2022 - Dec 2022",
      points: [
        "Developed students with hands-on coding exercises, debugging, and troubleshooting inprogramming languages (Python).",
        "Advocated students in preparing for exams, assessments, and assignments, focusing on high-yield topics and effective study techniques and increasing grades.",
        "Ensured students' proficiency with educational and development tools, including code editors (VSCode), version control systems.",
        "Participating in code reviews and providing constructive feedback to students.",
      ],
    },
    {
      title: "Project Officer",
      company_name: "National energy foundation",
      icon: nef,
      iconBg: "#383E56",
      date: "April 2023 - Sep 2023",
      points: [
        "Accomplished a 75% success rate in securing energy-saving benefits for clients by evaluating needs and eligibility through structured questioning.",
        "Collaborated with a cross-functional team to streamline assessment processes, reducing assessment time per client by 20%.",
        "Processed applications for over 200 energy vouchers, supporting low-income households in managing energy expenses.",
      ],
    },
    {
      title: "Freelance Front End Developer",
      company_name: "Self Employed",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Created high-quality websites employing HTML, CSS, JavaScript and React adhering to industry best practices.",
        "nhanced and boosted efficiency of website implementing functionality increasing customer acquisition by 30%.",
        "Increased client's customers conversation by 40% by redesigning the marketing tab, by migrating the database to firebase and developing the frontend with Next.js .",
        "Implemented responsive designs with HTML, CSS, and JavaScript frameworks, ensuring cross-device compatibility and enhancing mobile accessibility by over 50%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tanvir proved me wrong.",
      name: "Sima",
      designation: "Business Owner",
      company: "Grand Solutions",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tanvir does.",
      name: "Shazim",
      designation: "Head Chef",
      company: "Grand India",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
    },
    {
      testimonial:
        "After Tanvir optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Zafhirul",
      designation: "Business Owner",
      company: "Desi Spice",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };