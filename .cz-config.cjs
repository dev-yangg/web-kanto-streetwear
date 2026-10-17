module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    {
      value: "style",
      name: "style:    Code style & formatting only (no logic change)",
    },
    {
      value: "refactor",
      name: "refactor: Restructured code, no bug fix or feature added",
    },
    {
      value: "perf",
      name: "perf:     Improved performance, no behavior change",
    },
    {
      value: "test",
      name: "test:     Added or updated tests",
    },
    {
      value: "docs",
      name: "docs:     Documentation only (README, comments)",
    },
    {
      value: "chore",
      name: "chore:    Build process, tooling, or dependency updates",
    },
    {
      value: "revert",
      name: "revert:   Reverted a previous commit",
    },
    {
      value: "WIP",
      name: "WIP:      Incomplete work, not ready for review",
    },
  ],
  scopes: [
    { name: "components" },
    { name: "pages" },
    { name: "templates" },
    { name: "content" },
    { name: "hooks" },
    { name: "lib" },
    { name: "styles" },
    { name: "images" },
    { name: "types" },
    { name: "gatsby" },
    { name: "config" },
    { name: "deps" },
    { name: "root" },
  ],
  usePreparedCommit: false,
  messages: {
    type: "Commit type:",
    scope: "\nScope (optional):",
    customScope: "Custom scope:",
    subject: "Short description (imperative tense):\n",
    body: 'Long description (optional). Use "|" for new line:\n',
    breaking: "Breaking changes (optional):\n",
    footer: "Closed issues (optional). E.g.: #31, #34:\n",
    confirmCommit: "Proceed with this commit?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100,
};
