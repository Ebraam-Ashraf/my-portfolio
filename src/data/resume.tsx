import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ebraam Ashraf",
  initials: "EA",
  url: "https://ebraamashraf.dev",
  location: "Cairo, Egypt",
  resumeLink: "https://drive.google.com/file/d/1-tSbF13Wrme2S-niNb0BqPezXqyNySpz/view?usp=drive_link",
  description: "Computer Engineering Student",
  summary:
    "As a sophomore in Computer Engineering at Cairo University, I bring a strong programming background, a passion for mathematics, and expertise in web development and embedded systems. I thrive on hands-on experience and possess a knack for swiftly learning and applying new skills with precision and innovation. I actively contribute to open source in scientific Python and data tooling ecosystems.",
  avatarUrl: "/me.jpg",
  skills: [
    "C",
    "C++",
    "Python",
    "C#",
    "VHDL",
    "ARM Assembly",
    "Go",
    "JavaScript",
    "TypeScript",
    "React",
    "FastAPI",
    "Node.js",
    "Express",
    "ASP.Net",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Gin",
    "STM32",
    "Arduino",
    "NumPy",
    "Pandas",
    "OpenCV",
    "Unity",
    "Docker",
    "Git",
    "Linux",
    "Bash",
    "ElasticSearch",
    "RabbitMQ",
  ],
  navbar: [{ href: "#hero", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "beroashraf333@gmail.com",
    tel: "01094250012",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ebraam-Ashraf",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ebraam-ashraf-70234b293/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Gmail: {
        name: "Send Email",
        url: "mailto:beroashraf333@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "View Resume",
        url: "https://drive.google.com/file/d/1-tSbF13Wrme2S-niNb0BqPezXqyNySpz/view?usp=drive_link",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Cairo University Eco Racing Team (CUERT)",
      href: "https://www.linkedin.com/company/cairo-university-eco-racing-team",
      badges: [],
      location: "Cairo, Egypt",
      title: "Autonomous Team Member",
      logoUrl: "/cairo_university_eco_racing_team_logo.jpg",
      start: "Oct 2025",
      end: "Present",
      description:
        "Applied pre-trained AI detection models using OpenCV for real-time image and video analysis. Integrated and evaluated computer vision models within practical applications.",
    },
    {
      company: "Cairo University Eco Racing Team (CUERT)",
      href: "https://www.linkedin.com/company/cairo-university-eco-racing-team",
      badges: [],
      location: "Cairo, Egypt",
      title: "Public Relations Team Member",
      logoUrl: "/cairo_university_eco_racing_team_logo.jpg",
      start: "Mar 2025",
      end: "Sep 2025",
      description:
        "Gained hands-on PR experience while collaborating in an autonomous, self-managed team. Led communication efforts and built strong public engagement strategies independently.",
    },
  ],
  certifications: [
    {
      title: "DEPI – Digital Egypt Pioneers Initiative",
      dates: "2025",
      description:
        "Selected for the DEPI program, a government-backed digital upskilling initiative focused on advanced technology tracks.",
      image: "/DEPI.png",
      links: [],
      technologies: ["Frontend", "Backend"],
    },
    {
      title: "Supervised Machine Learning",
      dates: "2025",
      description:
        "Completed the Supervised Machine Learning: Regression and Classification course by Andrew Ng on Coursera — the first course of the Machine Learning Specialization.",
      image: "/Supervised Machine Learning.png",
      links: [],
      technologies: ["Machine Learning", "Python"],
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      dates: "2024",
      description:
        "Comprehensive full-stack web development bootcamp covering HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
      image: "/The Complete Full-Stack Web Development Bootcamp.jpg",
      links: [],
      technologies: ["React", "Node.js", "PostgreSQL", "JavaScript"],
    },
  ],
  openSourceContributions: [
    {
      logoUrl: "/gammapy_logo.png",
      altText: "Gammapy",
      href: "https://github.com/gammapy/gammapy/pull/6460",
      projectTitle: "Gammapy Contributions",
      institution: "Open Source Contributor",
      period: "2026",
      keywords: ["Python", "Scientific Computing", "Documentation"],
      description:
        "Contributed merged pull requests to Gammapy including `#6460`, and additional contributions in `#6459`, `#6427`, and `#6409`.",
    },
    {
      logoUrl: "/pyarrow_logo.png",
      altText: "Apache Arrow",
      href: "https://github.com/apache/arrow/pull/49410",
      projectTitle: "Apache Arrow Contribution",
      institution: "Open Source Contributor",
      period: "2026",
      keywords: ["Python", "Data Engineering", "Arrow"],
      description:
        "Contributed to Apache Arrow through pull request `#49410`.",
    },
    {
      logoUrl: "/github_logo.png",
      altText: "xarray-sql",
      href: "https://github.com/lincc-frameworks/xarray-sql/pull/120",
      projectTitle: "xarray-sql Contributions",
      institution: "Open Source Contributor",
      period: "2026",
      keywords: ["Python", "xarray", "SQL"],
      description:
        "Contributed to xarray-sql with pull request `#120` and issue-level work including `#58`.",
    },
    {
      logoUrl: "/github_logo.png",
      altText: "pljulia",
      href: "https://github.com/pljulia/pljulia/issues/27",
      projectTitle: "pljulia — Feature Proposal",
      institution: "Open Source Contributor",
      period: "2026",
      keywords: ["Julia", "PostgreSQL", "Feature Design"],
      description:
        "Opened issue `#27` proposing per-function persistent dictionary (SD) support in PL/Julia, enabling function-level state caching similar to PL/Python's SD.",
    },
  ],
  education: [
    {
      school: "Cairo University Faculty of Engineering",
      href: "https://eng.cu.edu.eg/en/",
      degree: "Bachelor's Degree in Computer Engineering",
      logoUrl: "/cufe.jpeg",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Bookify - Event Ticketing Platform",
      href: "https://github.com/Ebraam-Ashraf/Bookify",
      active: true,
      description:
        "Built a full-stack event ticketing and rewards platform with role-based dashboards, secure authentication, and e-commerce workflows for tickets and merchandise.",
      technologies: ["React", ".NET", "PostgreSQL", "JWT", "Azure"],
      links: [
        {
          type: "Website",
          href: "https://bookify-ticket-shop-rewards.lovable.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ebraam-Ashraf/Bookify",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/muhammad-khaled-05mukh_fullstack-database-webdevelopment-activity-7448059160832753665-jgc3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcQZjIB__kRFOld0v-_IQq-ovLSXdioq8M",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/bookify.jpg",
      video: "",
    },
    {
      title: "GAME-BOY on STM32",
      href: "https://github.com/Ebraam-Ashraf/GAME-BOY",
      active: true,
      description:
        "Built a GameBoy-inspired embedded gaming platform on STM32 using ARM assembly, including a menu system and multiple games like Snake, Pong, Brick Breaker, XO, and Flappy Bird.",
      technologies: ["ARM Assembly", "STM32", "TFT Display", "Embedded Systems"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ebraam-Ashraf/GAME-BOY",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Mirror",
          href: "https://github.com/MuhammadKhaledD/MicroProcessors_GameBoy",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/ebraam-ashraf-70234b293_embeddedsystems-armassembly-stm32-activity-7327732501290835968-tbav?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcQZjIB__kRFOld0v-_IQq-ovLSXdioq8M",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/game_boy.jpg",
      video: "",
    },
    {
      title: "Pipelined CPU in VHDL",
      href: "https://github.com/MuhammadKhaledD/pipelined-cpu-vhdl",
      active: true,
      description:
        "Implemented a custom 5-stage pipelined RISC CPU in VHDL with hazard detection, forwarding, interrupt support, and a Python-based assembler.",
      technologies: ["VHDL", "Computer Architecture", "Python", "Assembler"],
      links: [
        {
          type: "Source",
          href: "https://github.com/MuhammadKhaledD/pipelined-cpu-vhdl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/porcessor.png",
      video: "",
    },
    {
      title: "Consulty",
      href: "https://github.com/Ebraam-Ashraf/consulty-backend",
      active: true,
      description:
        "Developed a consultation platform with a Go backend and React frontend, focusing on clean API design and practical user flows.",
      technologies: ["Go", "Gin", "React", "REST API"],
      links: [
        {
          type: "Website",
          href: "https://minimal-glance-spot.lovable.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Ebraam-Ashraf/consulty-backend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/Ebraam-Ashraf/minimal-glance-spot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/consulty_system_design.png",
      video: "",
    },
    {
      title: "NestedFrame CSV <-> ASDF Converter",
      href: "https://nest-schema-asdf.vercel.app/",
      active: true,
      description:
        "Built a converter that maps CSV data to ASDF schema format with a React frontend and FastAPI backend.",
      technologies: ["React", "TypeScript", "FastAPI", "Data Processing"],
      links: [
        {
          type: "Website",
          href: "https://nest-schema-asdf.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/Ebraam-Ashraf/nest-schema-asdf",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Ebraam-Ashraf/gammapy-demo-backend/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ASDF_CSV.png",
      video: "",
    },
    {
      title: "Postgres MCP Server",
      href: "https://github.com/Ebraam-Ashraf/postgres-mcp",
      active: true,
      description:
        "Built an MCP server for PostgreSQL that enables LLM clients to query databases safely with schema introspection, explain plans, and optional write controls.",
      technologies: ["Python", "PostgreSQL", "MCP", "Security"],
      links: [
        {
          type: "Docs",
          href: "https://deepwiki.com/Ebraam-Ashraf/postgres-mcp",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ebraam-Ashraf/postgres-mcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/postgres_mcp.png",
      video: "",
    },
    {
      title: "Probability in Ray Tracing",
      href: "https://github.com/Ebraam-Ashraf/Probability-In-Ray-Tracing",
      active: true,
      description:
        "Applied Monte Carlo simulation in Unity ray tracing to study convergence, variance, and rendering quality trade-offs using statistical analysis.",
      technologies: ["C#", "Unity", "Monte Carlo", "Python", "NumPy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ebraam-Ashraf/Probability-In-Ray-Tracing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/nancyashraff_won-2nd-place-at-the-14th-research-day-ugcPost-7411828732128194560-N2Id?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcQZjIB__kRFOld0v-_IQq-ovLSXdioq8M",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/research_day.jpg",
      video: "",
    },
    {
      title: "lane_track_car",
      href: "https://github.com/AbdelrhmanAtta/lane_track_car",
      active: true,
      description:
        "Built an embedded lane tracking car project using low-level C development for microcontroller-based control and sensing.",
      technologies: ["C", "Arduino", "Embedded Systems", "Microcontrollers"],
      links: [
        {
          type: "Source",
          href: "https://github.com/AbdelrhmanAtta/lane_track_car",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cairo_university_eco_racing_team_logo.jpg",
      video: "",
    },
    {
      title: "Physiotherapy Center Management System",
      href: "https://github.com/Ibrahim-Abohola/Physiotherapy-Center",
      active: true,
      description:
        "Developed a data-structures course project that simulates physiotherapy center scheduling using queues, priority queues, and stacks.",
      technologies: ["C++", "Data Structures", "Queues", "Stacks"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ibrahim-Abohola/Physiotherapy-Center",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Physiotherapy-Center.png",
      video: "",
    },
    {
      title: "OS-Scheduler",
      href: "https://github.com/Ibrahim-Abohola/OS-Scheduler",
      active: true,
      description:
        "Implemented operating system CPU scheduling algorithms (FCFS, HPF, Round Robin) in C with multiple CPUs and semaphores for synchronization.",
      technologies: ["C", "Operating Systems", "Scheduling algorithms", "Semaphores", "Makefile"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ibrahim-Abohola/OS-Scheduler",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Process-Scheduler.png",
      video: "",
    },
    {
      title: "Snake_Ladder_Monoply_Game",
      href: "https://github.com/Ibrahim-Abohola/Snake_Ladder_Monoply_Game",
      active: true,
      description:
        "Built an OOP course project in C++ that combines Snakes & Ladders and Monopoly with design mode, play mode, and custom game objects.",
      technologies: ["C++", "OOP", "GUI", "Game Development"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ibrahim-Abohola/Snake_Ladder_Monoply_Game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/snake_ladder.png",
      video: "",
    },
    {
      title: "Circuit Solver",
      href: "https://github.com/Ebraam-Ashraf/Circuits-Simulator",
      active: true,
      description:
        "Implemented a circuit solver using Modified Nodal Analysis with NumPy to compute node voltages and branch currents from text-based circuit input.",
      technologies: ["Python", "NumPy", "Linear Algebra", "Simulation"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ebraam-Ashraf/Circuits-Simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/circuit_solver.png",
      video: "",
    },
  ],
  awards: [
    {
      title: "2nd Place - 14th Research Day",
      dates: "2026",
      location: "TCCD Career Center, Cairo University",
      description:
        "Won 2nd place with the 'Probability in Ray Tracing - Monte Carlo Simulation' research project.",
      image: "/TCCD.jpeg",
      links: [
        {
          title: "Post",
          href: "https://www.linkedin.com/posts/nancyashraff_won-2nd-place-at-the-14th-research-day-ugcPost-7411828732128194560-N2Id?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcQZjIB__kRFOld0v-_IQq-ovLSXdioq8M",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          title: "Project",
          href: "https://github.com/Ebraam-Ashraf/Probability-In-Ray-Tracing",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
