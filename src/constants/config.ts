type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    Formation: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Amine BENHAMMADA | Votre Futur Apprenti",
    fullName: "Amine BENHAMMADA",
    email: "schwamine777@gmail.com",
  },
  hero: {
    name: "Amine BENHAMMADA",
    p: ["Étudiant en 1ère année Cycle d'ingénieur , École d'ingénieurs Sup Galilée.\nÀ la recherche d'une Alternance en Développement Fullstack, Web, Logiciel, DevOps, Cloud ou Data pour Septembre 2024. "],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Aperçu.",
      content: `Je suis étudiant en première année du cycle d'ingénieurs à l'École d'Ingénieurs SUP Galilée. 
      Doté d'une solide passion pour la programmation et les technologies émergentes, 
      j'ai acquis une variété d'expériences dans différents langages et outils. 
      Ma formation m'a permis de développer des compétences approfondies dans un large éventail de technologies, notamment :

      - Langages de programmation : C, Java (y compris Swing et JavaFX), Python, OCAML, Assembleur LC-3
      - Bases de données : SQL, MySQL, PostgreSQL
      - Développement Web : HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS
      - Développement Backend : Node.js, PHP
      - Outils de modélisation et de rendu 3D : Three.js
      - Cloud : AWS(Débutant)
      - Git, Github, GitLab, Docker
      - Typesetting : LaTeX

      Cette diversité de compétences m'a permis d'aborder des projets variés et de développer une compréhension holistique du développement logiciel, allant de la programmation système à la conception Web moderne. 
      Je suis constamment motivé par le désir d'apprendre et de relever de nouveaux défis technologiques, et je suis impatient de mettre mes compétences au service de projets stimulants et innovants.`,
    },
    Formation: {
      p: "Formations Universitaires",
      h2: "Parcours Académique.",
      content: ``,
    },
    feedbacks: {
      p: "Recommendations &",
      h2: "Témoignages.",
    },
    works: {
      p: "Projets",
      h2: "Académiques & Personnels.",
      content: `Au cours de mon parcours académique et personnel, 
      j'ai réalisé plusieurs projets qui m'ont permis d'améliorer mes compétences et d'explorer divers domaines de développement et différentes technologies. 
      Chaque projet contient un lien vers le dépôt GitHub où vous pouvez trouver le code source ainsi que des live demos lorsque disponibles`,
    },
  },
};
