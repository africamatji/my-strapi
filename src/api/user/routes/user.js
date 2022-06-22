module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/users-test',
      handler: 'user.exampleAction',
    },
    {
      method: 'POST',
      path: '/users',
      handler: 'user.create',
    },
  ]
}
