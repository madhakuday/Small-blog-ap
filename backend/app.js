import express from 'express';
const app = express();
import router from './Router/router.js';
import path from 'node:path';

// Db
import './Database/db.js';

//Use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /routes
app.use('/', router);

const __dirname = path.resolve();
// ... other app.use middleware

app.use(express.static(path.join(__dirname, '../', 'client', 'build')));
// console.log(path.join(__dirname, '../', 'client', 'build'));

// Right before your app.listen(), add this:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`port is listen at http://localhost:${port}`);
});
