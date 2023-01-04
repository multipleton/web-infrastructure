/* eslint-disable no-undef */

db.createCollection('contributions');

db.createUser({
  user: "m-wi-db-user",
  pwd: "m-wi-db-password",
  roles: [{ role: "readWrite", db: "m-wi" }],
});

db.contributions.insertMany([
  {
    shared_id: '053c7e56-306e-4ec8-a676-2a7be3d07928',
    title: 'Wrote a book',
    description: 'Really nice book, you should try it',
  },
  {
    shared_id: '053c7e56-306e-4ec8-a676-2a7be3d07928',
    title: 'Created a GitHub repository',
    description: 'It\'s empty, but give him a chance',
  },
  {
    shared_id: 'be851a64-e2ad-40db-8651-87786ededc86',
    title: 'Woke up earlier than usual',
    description: 'Yep, this is commendable',
  },
  {
    shared_id: 'be851a64-e2ad-40db-8651-87786ededc86',
    title: 'Took a photo of his cat',
    description: 'What a cutie',
  },
]);
