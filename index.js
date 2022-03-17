const fastify = require('fastify');
const path = require('path');

// Instantiates the app
const app = fastify();

app.register(require('fastify-static'), {
    root: path.join(__dirname),
})

app.get('/', (req, reply) => {
    reply
        .code(200)
        .header('Content-Type', 'text/html')
        .sendFile('index.html');
});


const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host).then(() => {
    console.log(`Server running on port ${process.env.PORT || 3000}`); // eslint-disable-line no-console
});
