export default function (plop) {
  plop.setGenerator("component", {
    description: "Create vue component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Component path?",
      },
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/views/components/{{dashCase path}}/{{titleCase name}}.vue",
        templateFile: "./templates/components/component.vue.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "../../tests/unit/components/{{dashCase path}}/{{dashCase name}}.spec.ts",
        templateFile: "./templates/components/component.spec.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "../../src/views/components/index.ts",
        templateFile: "./templates/index.ts.hbs",
        skipIfExists: true,
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Create vue page",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Page path?",
      },
      {
        type: "input",
        name: "name",
        message: "Page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/views/pages/{{dashCase path}}/{{titleCase name}}.vue",
        templateFile: "./templates/pages/page.vue.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "../../tests/unit/pages/{{dashCase path}}/{{dashCase name}}.spec.ts",
        templateFile: "./templates/pages/page.spec.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "../../src/views/pages/index.ts",
        templateFile: "./templates/index.ts.hbs",
        skipIfExists: true,
      },
    ],
  });

}
