const express = require('express');
const router = express.Router();
const { Login } = require('../models').default;

router.post('/logins', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newLogin = await Login.create({
      email,
      password,
    });

    return res.status(201).json({ Login: newLogin });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while retrieving logins' });
  }
});

router.get('/logins', async (req, res) => {
  try {
    const logins = await Login.findAll();

    return res.status(200).json({ logins });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while retrieving logins' });
  }
});

module.exports = router;
