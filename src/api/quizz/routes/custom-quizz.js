
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-quizz",
      handler: "quizz.findAll",
    },
    {
      method: "GET",
      path: "/quiz-create",
      handler: "quizz.createQuizz",
    }
  ],
};
