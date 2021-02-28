const router = require('express').Router();
const { register, login, forgotpassword, resetpassword} = require('../controllers/auth')

router.get('/register', register);
router.post('/register', register);

router.get('/login', login);
router.post('/login', login);

router.get('/forgotpassword',forgotpassword)
router.post('/forgotpassword',forgotpassword)

router.get('/resetpassword', resetpassword)
router.put('/resetpassword/:resetToken', resetpassword)


module.exports = router;