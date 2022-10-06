// express
import * as express from 'express';

const app = express();
const port = 3000;

app.get('/',(request, response) => {

    response.send('ola participante!');
});
  

//codifique aqui

app.listen(port, () => {
    console.log(`o server esta rodando na porta ${port}!`);
});