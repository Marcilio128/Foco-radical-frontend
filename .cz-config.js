module.exports = {
  types: [
    { value: "bug: :bug:", name: "bug:     Correcoes de bugs (:bug:)" },
    { value: "feature: :sparkles:", name: "feature: Novas features (:sparkles:)" },
    { value: "epic: :tada:", name: "epic:    Mudancas grandes (:tada:)" },
    { value: "docs: :memo:", name: "docs:    Documentacao (:memo:)" },
    { value: "chore: :wrench:", name: "chore:   Manutencao (:wrench:)" }
  ],
  messages: {
    type: "Select the commit type:",
    subject: "Briefly describe the change (English only):"
  },
  skipQuestions: ["scope", "body", "breaking", "footer", "confirmCommit"],
  subjectLimit: 50,
  commitMessageFormat: "{{type}} {{subject}}"
};
