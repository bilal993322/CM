const express = require('express')
const router = express.Router()
const Payment = require('../models/Payment')

  router.post('/payment', async (req, res) => {
    try {
      const paymentData = req.body;
      const payment = new Payment(paymentData);
      await payment.save();
      res.status(201).json({ message: 'Payment saved successfully' });
    } catch (error) {
      console.error('Error saving payment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router