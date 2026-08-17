const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/utils/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/leads', require('./src/routes/leadRoutes'));

app.get('/', (req, res) => {
  res.send('Aura Homes API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
