'use strict';

/**
 * A set of functions called "actions" for `user`
 */

module.exports = {
    create: async (ctx, next) => {
      const twilio = {
        id: "AC3ea7533c703bba5990a7d08bdd81e92e",
        token: "0159500d876accf8629217eae07333bc",
        phone: "+13392184928"
      }
      const smsClient = require('twilio')(twilio.id, twilio.token);
      const { email, username, password, phone } = ctx.request.body;
      const token = '3412';
      const user = {
        email,
        username,
        password,
        token,
        phone
      };

      try {
        const data = await strapi.plugins['users-permissions'].services.user.add(user);
        await smsClient.messages.create({
          to: phone,
          from: twilio.phone,
          body: `Your verification code is ${token}`
        });
        ctx.body = {
          testVar: ctx.request.body.email,
        };
      } catch (err) {
        ctx.body = err;
      }
    },
   exampleAction: async (ctx, next) => {
     try {
       ctx.body = {
         testVar: 'testVar',
       };
     } catch (err) {
       ctx.body = err;
     }
   }
};
