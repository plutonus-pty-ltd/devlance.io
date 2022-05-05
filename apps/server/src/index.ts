import express from 'express';

const app = express();
const port = 3335;

app.get('/', (_req, res) => {
    res.send('Devlance server');
});

app.listen(port, () => {
    console.log(`Server listening on 0.0.0.0:${port}`);
});
