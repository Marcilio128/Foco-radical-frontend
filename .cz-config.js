module.exports = {
  types: [
    { value: "bug: :bug:", name: "bug:     Correcoes de bugs (:bug:)" },
    { value: "feature: :sparkles:", name: "feature: Novas features (:sparkles:)" },
    { value: "epic: :tada:", name: "epic:    Mudancas grandes (:tada:)" },
    { value: "docs: :memo:", name: "docs:    Documentacao (:memo:)" },
    { value: "chore: :wrench:", name: "chore:   Manutencao (:wrench:)" }
  ],
  questions: ["type", "subject"],
  message: {
    type: "Essa alteracao se encaixa em qual qualificacao?",
    subject: "Descreva a alteracao de forma breve:"
  },
  subjectLimit: 72,
  commitMessageFormat: "{{type}} {{subject}}"
};
