import type {
  TNavLink,
  TService,
  TFormation,
  TTechnology,
  TTestimonial,
  TProject,
} from "../types";

import {
  C,
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
  exa,
  champ,
  uspn,
  katia,
  yacine,
  portf,
  mb,
  ph,
  sup,
  python,
  java,
  uml,
  ubuntu,
  pr,
  ps,
  ai,
  lr,
  ae,
  ocaml,
  php,
  latex,
  sql,
  lc3,
  intellij,
  vs,
  train,
  sac,
  taut,
  vb,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Aperçu",
  },
  {
    id: "formation",
    title: "Formation",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AWS Beginner",
    icon: mobile,
  },
  {
    title: "International Volley-Ball Player",
    icon: vb,
  },
  {
    title: "Content Creator",
    icon: creator,
  },

];

const Formation: TFormation[] = [
  {
    title: "Baccalauréat série scientifique | Mention Très Bien.",
    companyName: "Lycée Malek BENNABI | Algérie",
    icon: mb,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "",
    ],
  },
  {
    title: "1ère Année Pharmacie",
    companyName: "Faculté de Médecine, Sétif | Algérie",
    icon: ph,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "",
    ],
  },
  {
    title: "Licence Informatique",
    companyName: "Université Sorbonne Paris Nord",
    icon: uspn,
    iconBg: "#383E56",
    date: "2021 - 2024",
    points: [
      "",
    ],
  },
  {
    title: "1ère Année CYCLE INGENIEUR INFORMATIQUE",
    companyName: "ÉCOLE d'Ingénieurs Sup Galilée",
    icon: sup,
    iconBg: "#E6DEDD",
    date: "2024 - 2027",
    points: [
      "",
    ],
  },
];


const technologies: TTechnology[] = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "ocaml",
    icon: ocaml,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "latex",
    icon: latex,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "lc3",
    icon: lc3,
  },
  {
    name: "ubuntu",
    icon: ubuntu,
  },
  {
    name: "uml",
    icon: uml,
  },
  {
    name: "ps",
    icon: ps,
  },
  {
    name: "pr",
    icon: pr,
  },
  {
    name: "lr",
    icon: lr,
  },
  {
    name: "ai",
    icon: ai,
  },
  {
    name: "ae",
    icon: ae,
  },
  {
    name: "vs",
    icon: vs,
  },
  {
    name: "intellij",
    icon: intellij,
  },

];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "quelqu'un de passionné par l'informatique et le développement que je connais depuis son tout premier bout de code. Amine impressionne par son évolution rapide en fullstack. Avidement curieux, il absorbe rapidement les enseignements et excelle grâce à son enthousiasme et sa capacité d'adaptation.",
    name: "Yacine ALHUSSEIN",
    designation: "Développeur FULL-STACK",
    company: "Dassault Systèmes",
    image: yacine,
  },
  {
    testimonial:
      "Amine a fait preuve d'un très grand sérieux dans la Programmation Orientée Objet(JAVA), ce qui lui a permis de valider très brillamment l'UE POO avec la note de 16,5/20 ce qui le situe parmi les tout meilleurs étudiants de sa promotion.",
    name: "Marc Champesme",
    designation: "Computer Science Laboratory of Paris-North University (LIPN)",
    company: "Université Sorbonne Paris Nord",
    image: champ,
  },
  {
    testimonial:
      "Amine était un étudiant exceptionnel en architecture et systèmes.Sa maîtrise de l'assembleur LC-3 et des systèmes informatiques, sa capacité à les appliquer dans des projets sont remarquables. Je recommande vivement Amine pour tout projet ou équipe.",
    name: "Stefano Guerrini",
    designation: "Responsable L2 Informatique | Professeur Architecture & Systèmes",
    company: "Université Sorbonne Paris Nord",
    image: uspn,
  },
  {
    testimonial:
      "Amine a été essentiel pour notre projet de simulateur de train. Son expertise en JavaScript, HTML et CSS a été remarquable. Je le recommande vivement pour son engagement et ses compétences techniques exceptionnelles.",
    name: "Katia LARABI",
    designation: "Étudiante en Master 1 Conception des Systèmes et Cyber Sécurité",
    company: "Université Paris-Est Créteil (UPEC)",
    image: katia,
  },
];

const projects: TProject[] = [
  {
    name: "OCTOPUNKS",
    description:
      "Octopunks un clône du Jeu Exapunks.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "JAVAFX",
        color: "green-text-gradient",
      },
      {
        name: "SWING",
        color: "pink-text-gradient",
      },
      {
        name: "ASSEMBLY LC-3",
        color: "blue-text-gradient",
      },
    ],
    image: exa,
    sourceCodeLink: "https://github.com/KESHRUD/OCTOPUNKS.git",
  },

  {
    name: "3D DEV PORTFOLIO",
    description:
      "Apprendre React.js et Three.js en codant son propre portfolio website ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "EmailJS",
        color: "green-text-gradient",
      },
    ],
    image: portf,
    sourceCodeLink: "https://github.com/KESHRUD/3D-KUSH-DEV-PORTFOLIO.git",
  },

  {
    name: "Simulateur de Trains",
    description:
      "un simulateur ferroviaire, où des trains avancent le long de rails sur un plateau en deux dimensions avec des conditions complexes.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: train,
    sourceCodeLink: "https://github.com/KESHRUD/Simulateur-de-Trains.git",
  },

  {
    name: "Résolution du Problème du Sac à dos 0/1",
    description:
      "Conception et analyse d'algorithmes (backtracking, programmation dynamique, approche gloutonne) pour résoudre le Problème. implémentation en Python & C avec expérimentations pour évaluer les performances en temps d'exécution et complexité spatiale.",
    tags: [
      {
        name: "Pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "LaTeX",
        color: "pink-text-gradient",
      },
      {
        name: "Programmation Dynamique",
        color: "orange-text-gradient",
      },
      {
        name: "BackTracking",
        color: "green-text-gradient",
      },
      {
        name: "Analyse de Complexité & Optimisation",
        color: "orange-text-gradient",
      },
    ],
    image: sac,
    sourceCodeLink: "https://github.com/KESHRUD/Sac-dos-0-1.git",
  },

  {
    name: "Tautologie en OCaml",
    description:
      "projet implémente un algorithme de vérification de tautologie en OCaml. Il prend en entrée une formule propositionnelle et détermine si elle est une tautologie ou non.",
    tags: [
      {
        name: "OCaml",
        color: "blue-text-gradient",
      },
      {
        name: "LaTeX",
        color: "green-text-gradient",
      },
      {
        name: "Lambda-calcul",
        color: "pink-text-gradient",
      },
      {
        name: "Logique",
        color: "orange-text-gradient",
      },
    ],
    image: taut,
    sourceCodeLink: "https://github.com/KESHRUD/Tautologie.git",
  },


];

export { services, technologies, Formation, testimonials, projects };
