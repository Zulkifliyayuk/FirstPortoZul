type PeopleSayProps = {
  name: string;
  job: string;
  comment: string;
  linkImage: string;
};

export const peopleSayData: PeopleSayProps[] = [
  {
    name: 'Rafel Struick',
    job: 'CEO',
    comment:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
    linkImage: '/images/profile1.png',
  },
  {
    name: 'Elena Martinez',
    job: 'Product Manager',
    comment:
      '“Mark’s attention to detail and user-centered approach helped us launch a product that truly resonates with our users.”',
    linkImage: '/images/profile2.png',
  },
  {
    name: 'Liam Chen',
    job: 'Senior Developer',
    comment:
      '“Collaborating with Mark improved our codebase quality significantly. His clean, modular code made onboarding new developers effortless.”',
    linkImage: '/images/profile3.png',
  },
  {
    name: 'Sophia Walker',
    job: 'UX Designer',
    comment:
      '“Mark always brings a thoughtful approach to collaboration. His understanding of design and development balance is outstanding.”',
    linkImage: '/images/profile4.png',
  },
];
