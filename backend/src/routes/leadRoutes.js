const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// @desc    Create a new lead (Request a Property)
// @route   POST /api/leads
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, description } = req.body;

    if (!name || !email || !phone || !description) {
      return res.status(400).json({ success: false, error: 'Please provide all fields' });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      description
    });

    res.status(201).json({ success: true, data: lead });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin) - Placeholder for now
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

module.exports = router;
