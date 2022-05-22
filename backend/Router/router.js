import express from 'express';
const router = express.Router();

//Model
import { cardmodel } from '../Model/model.js';

router.get('/getcarddata', async (req, res) => {
  const a = await cardmodel.find({});
  console.log(a);
  res.send(a);
});

router.post('/postcard', async (req, res) => {
  try {
    const { name, title, description } = req.body;

    const allData = await cardmodel({
      name,
      title,
      description,
    });

    if (allData) {
      await allData.save();
      res.send(allData);
    } else {
      console.log('data not saved');
    }
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
});

router.get('/getcard/:id', async (req, res) => {
  try {
    const carddata = await cardmodel.findOne(
      { _id: req.params.id },
      { Date: 0, __v: 0 }
    );
    console.log('card detail is ', carddata);
    res.send(carddata);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
