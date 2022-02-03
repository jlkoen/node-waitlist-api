/* eslint-disable */
db.createUser({
  user: 'api_user',
  pwd: 'api_pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'waitlist-api'
    }
  ]
})
