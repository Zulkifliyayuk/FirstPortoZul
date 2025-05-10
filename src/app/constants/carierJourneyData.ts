type detail = {
  detail: string;
};

type carierJourneyDataProps = {
  job: string;
  time: string;
  place: string;
  details: detail[];
};

export const carierJourneyData: carierJourneyDataProps[] = [
  {
    job: 'Frontend Developer',
    time: 'Jul 2024 - Present',
    place: 'Google',
    details: [
      {
        detail:
          'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      },
      {
        detail:
          'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      },
      {
        detail:
          'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      },
      {
        detail:
          'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
      },
    ],
  },
  {
    job: 'Frontend Developer',
    time: 'Jul 2023 - Jul 2024',
    place: 'Slack',
    details: [
      {
        detail:
          'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      },
      {
        detail:
          'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      },
      {
        detail:
          'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      },
      {
        detail:
          'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
      },
    ],
  },
  {
    job: 'Frontend Developer',
    time: 'Nov 2021 - Jul 2023',
    place: 'Skype',
    details: [
      {
        detail:
          'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      },
      {
        detail:
          'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      },
      {
        detail:
          'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      },
      {
        detail:
          'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
      },
    ],
  },
];
