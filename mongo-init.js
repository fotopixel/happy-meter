db.createUsder({
  user: 'happyUser',
  pwd: 'happyUser',
  roles: [
    {
      role: 'readWrite',
      db: 'happyMeter'
    }
  ]
})