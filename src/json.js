export const json = {
  title: "Tree Persona Survey",
  description: "A survey to help you find your tree persona",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "What is your favorite color?",
          isRequired: true,
        },
      ],
      title: "Color",
    },
    {
      name: "page2",
      elements: [
        {
          type: "text",
          name: "question2",
          title: "What is your favorite music genre?",
          isRequired: true,
        },
      ],
      title: "Music",
    },
    {
      name: "page3",
      elements: [
        {
          type: "text",
          name: "question3",
          title:
            "What type of environment do you prefer? (e.g., beach, mountain, forest)",
          isRequired: true,
          placeholder: "text",
        },
        {
          type: "text",
          name: "question4",
          title:
            "What are your favorite outdoor activities? (e.g., camping, kayaking, rock climbing, bird watching, gardening, stargazing)",
        },
      ],
      title: "Activity",
    },
    {
      name: "page4",
      elements: [
        {
          type: "text",
          name: "question5",
          title: "What is your favorite food? ",
          isRequired: true,
        },
      ],
      title: "Food",
    },
    {
      name: "page5",
      elements: [
        {
          type: "text",
          name: "question6",
          title: "What is your favorite season? ",
          isRequired: true,
        },
      ],
      title: "Season",
    },
  ],
};
