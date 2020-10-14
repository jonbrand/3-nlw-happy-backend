import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    openingHours,
    openOnWeekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    openingHours,
    openOnWeekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.json({ message: 'Hello World' });
});

app.listen(3333);
