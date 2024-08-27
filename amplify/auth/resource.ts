import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      oidc: [
        {
          name: "auh0",
          clientId: secret("AUTH0_CLIENT_ID"),
          clientSecret: secret("AUTH0_CLIENT_SECRET"),
          issuerUrl: "dev-n2xybsy8ikhganbx.us.auth0.com",
          scopes: ["email", "opendid", "profile"],
        },
      ],
      logoutUrls: ["http://localhost:3000/"],
      callbackUrls: ["http://localhost:3000/profile"],
    },
  },
});

// import { defineAuth, secret } from '@aws-amplify/backend';
//
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//     externalProviders: {
//       oidc: [
//         {
//           name: 'auh0',
//           clientId: secret('nkFhNHWBvXO0Rq5jpTZPjOLzzaf3XyUx'),
//           clientSecret: secret('6o3csq9JlFsKrS6GUzcO51QU3nRP9fDn6-8A6hdzJV6zdbNx3YbryG_gyz8r_dCI'),
//           issuerUrl: 'dev-n2xybsy8ikhganbx.us.auth0.com',
//         },
//       ],
//       logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
//       callbackUrls: [
//         'http://localhost:3000/profile',
//         'https://mywebsite.com/profile',
//       ],
//     },
//   },
// });
