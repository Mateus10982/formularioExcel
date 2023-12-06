import Express from 'express';
const app = Express();
import "../bin/server.js"
//Rotas
import Index from './routes/index';
import PersonRoute  from'./routes/personRoute';

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use('/', Index);
app.use('/Mensagens', PersonRoute);
export default  app;