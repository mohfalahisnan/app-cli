export default function (plop) {
  // helper untuk cek fitur
  plop.setHelper("includes", function (array, value, options) {
    if (Array.isArray(array) && array.includes(value)) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  // helper untuk tanggal
  plop.setHelper("currentDate", function () {
    return new Date().toISOString();
  });

  // Basic test generator
  plop.setGenerator("test", {
    description: "Create a basic test project to verify Plop is working",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your test project?",
        default: "my-test-project"
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "output/{{name}}",
        base: "templates/test",
        templateFiles: "templates/test/**"
      }
    ]
  });

  plop.setGenerator("project", {
    description: "Create a new project",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Project name:",
      },
      {
        type: "list",
        name: "framework",
        message: "Choose a framework:",
        choices: ["express"],
      },
      {
        type: "checkbox",
        name: "features",
        message: "Select features:",
        choices: ["zod", "trpc"]
      }
    ],
    actions: (data) => {
      const actions = [];

      // Base template
      actions.push({
        type: "addMany",
        destination: "{{name}}",
        base: "templates/{{framework}}",
        templateFiles: "templates/{{framework}}/**"
      });

      return actions;
    }
  });
}
