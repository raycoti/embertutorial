const router = require('express').Router()
module.exports = router

router.get('/',function(req,res) {
	res.send('Working');
});

router.use('/rentals', require('./rentals'))



router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})