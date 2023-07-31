
import Express from 'express';
import BodyParser from 'body-parser';


const app = Express();
const bodyParser = BodyParser
const {raw} = bodyParser;

app.set("view engine","ejs");
app.use(Express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//PAGINA INICIAL
app.get('/', async (req, res) => {
    const perguntas = await pergunta.findAll({ raw: true });
    res.render('index', { perguntas, ordem: 'recentes' })
  });















app.listen(8080,()=>{
    console.log("Server is running on port 8080")
});