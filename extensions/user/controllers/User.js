const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::user.user", ({ strapi }) => ({

  async create (ctx) {
    const { phone, username } = ctx.request.body;
    console.log('phone', phone);
    console.log('username', username);

    //const data = await strapi.plugins['users-permissions'].services.user.add(user);
  }


}));
