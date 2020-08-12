const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./swag/documentation');  
const express = require('express')
const app = express()
const cors = require('cors')
const markupRouter = require('./routes/graphicsmarkup')
const path = require('path');
const bodyParser = require('body-parser')


app.use(cors())
app.disable('etag');
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html')); 
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation.doc));
app.use('/api', markupRouter)



app.listen(process.env.PORT||3000, () => console.log('Server Started'))

