export const json = {
  title: "Tree Persona Survey",
  description: "A survey to help you find your tree persona",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: "What is your favorite color?",
          isRequired: true,
          choices: ["Black", "White", "Red", "Blue", "Green", "Yellow"],
        },
      ],
      title: "Color",
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "question2",
          title: "What is your favorite music genre?",
          isRequired: true,
          choices: [
            "Hip-hop",
            "Ballad",
            "Classical",
            "EDM",
            "Jazz",
            "R&B",
            {
              value: "Pop ",
              text: "Pop",
            },
          ],
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
          type: "radiogroup",
          name: "question6",
          title: "What is your favorite season? ",
          isRequired: true,
          choices: ["Spring", "Summer", "Fall", "Winter"],
        },
      ],
      title: "Season",
    },
  ],
};
