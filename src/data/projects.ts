export type Artwork = {
  crop: [number, number, number, number];
  src?: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  theme: "education" | "scholarship" | "search" | "coaching" | "analytics";
  icon: "education" | "scholarship" | "search" | "coaching" | "analytics";
  compact?: boolean;
  artwork: Artwork;
};

// Replace artwork.src with a file in public/images/projects when final screenshots arrive.
// Crop coordinates reference the supplied design at a normalized 748 × 2048.
export const projects: Project[] = [
  {
    slug: "abroad-eduversity",
    name: "Abroad Eduversity",
    category: "Study abroad growth engine",
    description:
      "Helping students turn global education dreams into reality with the right guidance, universities and opportunities.",
    theme: "education",
    icon: "education",
    artwork: {
      crop: [265, 652, 445, 182],
      alt: "Abroad Eduversity website on a laptop, with Big Ben and a mountain landscape",
    },
  },
  {
    slug: "fund-my-study-abroad",
    name: "Fund My Study Abroad",
    category: "Scholarship matching platform",
    description:
      "Connecting students with genuine scholarships, funding options and global opportunities using smart technology.",
    theme: "scholarship",
    icon: "scholarship",
    artwork: {
      crop: [290, 844, 420, 157],
      alt: "Scholarship platform dashboard on a desktop and mobile phone",
    },
  },
  {
    slug: "rankup-aeo",
    name: "RankUp AEO",
    category: "AI search visibility platform",
    description:
      "Helping brands get discovered in the age of AI search with data-driven insights and optimization tools.",
    theme: "search",
    icon: "search",
    artwork: {
      crop: [265, 1011, 445, 158],
      alt: "RankUp AEO dark dashboard showing AI search visibility analytics",
    },
  },
  {
    slug: "path-creator-behala",
    name: "Path Creator Behala",
    category: "Coaching and admissions platform",
    description:
      "Empowering students with quality education, career guidance and a brighter future.",
    theme: "coaching",
    icon: "coaching",
    compact: true,
    artwork: {
      crop: [229, 1179, 141, 139],
      alt: "Smiling student holding books for Path Creator Behala",
    },
  },
  {
    slug: "tryvizly",
    name: "TryVizly",
    category: "Data visualization made simple",
    description:
      "Turn complex data into beautiful, interactive visualizations. Built for everyone.",
    theme: "analytics",
    icon: "analytics",
    compact: true,
    artwork: {
      crop: [560, 1179, 150, 139],
      alt: "TryVizly data visualization dashboard with colorful charts",
    },
  },
];
