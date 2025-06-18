const employee = [
  {
    id: 1,
    email: "employee1@example.com",
    firstName: "Aryan",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "22-10-2024",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "21-10-2024",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "fix bugs",
        taskDescription: "Revamp the homepage design",
        taskDate: "20-10-2024",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    firstName: "Shubham",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better experience",
        taskDate: "19-10-2024",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new features",
        taskDescription: "Create mockups for the new feature",
        taskDate: "18-10-2024",
        category: "design",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    firstName: "Neha",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides from upcoming clients presentation",
        taskDate: "17-10-2024",
        category: "Presentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the codebase for opptimization",
        taskDate: "16-10-2024",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "15-10-2024",
        category: "QA",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    firstName: "Tanmay",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "14-10-2024",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Implement continuos integration pipeline",
        taskDate: "13-10-2024",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    firstName: "shikha",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign for userinterface for better UX",
        taskDate: "12-10-2024",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest buld for production",
        taskDate: "11-10-2024",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback ",
        taskDescription: "Gather feedback for clients after product launch",
        taskDate: "10-10-2024",
        category: "Support",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setlocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employee, admin };
};
