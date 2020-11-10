const app = require('./src/app');
const port = 8000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});