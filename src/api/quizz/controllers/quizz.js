'use strict';

/**
 *  quizz controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::quizz.quizz');
module.exports = createCoreController("api::quizz.quizz", ({ strapi }) => ({
  async findAll (ctx) {
    const entries = await strapi.db.query("api::quizz.quizz").findMany();

    ctx.body = entries;
  },
  createQuizz (ctx) {
    console.log('strapi.services', strapi.services);
  },
}));
