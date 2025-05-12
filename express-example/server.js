import express from 'express';

const app = express(); // Detta skapar upp en express-applikation
const PORT = 8080;

// Middlewares
app.use(express.json());

// HTTP Anrop
// GET insults
app.get('/insults', (request, response) => {
    response.json({
        status : 200,
        success : true,
        data : insults,
        message : "GET request for insults successfull"
    });
});

// GET insult by ID

// POST new insult
app.post('/insults', (request, response) => {
    const { insult, play } = request.body;

    if(insult && play) {
        insults.push({ insult, play });
        response.json({
            status : 201,
            success : true,
            data : insults,
            message : 'Insult added successfully'
        });
    } else {
        response.json({
            status : 400,
            success : false,
            message : 'Both insult and play required'
        });
    }
});

// PUT insult by ID

// DELETE insult by ID

app.listen(PORT, () => { // Här startar vi upp vår serveranslutning
    console.log(`Server is running on port ${PORT}`);
});

let insults = [
    {
        "insult": "Thou art a boil, a plague sore, an embossed carbuncle.",
        "play": "King Lear"
    },
    {
        "insult": "More of your conversation would infect my brain.",
        "play": "Coriolanus"
    },
    {
        "insult": "I do desire we may be better strangers.",
        "play": "As You Like It"
    }
]

// app.get('/home', (request, response) => {
//     response.send('<h1>Välkommen till min hemsida</h1>');
// });

// app.get('/about', (request, response) => {
//     response.send('<h1>Välkommen till min aboutsida</h1>');
// });

// app.get('/movies', (request, response) => {
//     response.json({
//         data : ['Gladiator', 'Gudfadern', 'Knives Out'],
//         success: true,
//         status : 200
//     });
// });