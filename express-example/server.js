import express from 'express';

const app = express(); // Detta skapar upp en express-applikation
const PORT = 8080;

// Middlewares
app.use(express.json());

// HTTP Anrop
// GET insults
app.get('/insults', (request, response) => {
    const { search } = request.query;
    if(search) {
        const matches = insults.filter(insult => insult.insult.includes(search));
        if(matches.length !== 0) {
            response.json({
                status : 200,
                success : true,
                data : matches,
                message : 'Request successful'
            });
        } else {
            response.status(404).json({
                status : 404,
                success : false,
                message : 'No data found'
            });
        }
    } else {
        response.json({
            status : 200,
            success : true,
            data : insults,
            message : 'Request successful'
        });
    }
});

// GET insult by ID
app.get('/insults/:id', (request, response) => {
    const { id } = request.params;
    const insult = insults.find(i => i.id === parseInt(id));
    if(insult) {
        response.json({
            status : 200,
            success : true,
            data : insult,
            message : 'Request successful'
        });
    } else {
        response.status(400).json({
            status : 400,
            success : false,
            message : 'Request unsuccessful'
        });
    }
});

// POST new insult
app.post('/insults', (request, response) => {
    const { insult, play } = request.body;

    if(insult && play) {
        insults.push({ id : insults.length + 1, insult, play });
        response.status(201).json({
            status : 201,
            success : true,
            data : insults,
            message : 'Insult added successfully'
        });
    } else {
        response.status(400).json({
            status : 400,
            success : false,
            message : 'Both insult and play required'
        });
    }
});

// PUT insult by ID
app.put('/insults/:id', (request, response) => {
    const { id } = request.params;
    const { insult, play } = request.body;

    if(insults.some(i => i.id === parseInt(id))) {
        if(insult && play) {
            insults.map(i => {
                if(i.id === parseInt(id)) {
                    i.id = parseInt(id);
                    i.play = play;
                    i.insult = insult;
                }
            });
            response.status(201).json({
                status : 201,
                success : true,
                data : insults,
                message : 'Insult updated successfully'
            });
        } else {
            response.status(400).json({
                status : 400,
                success : false,
                message : 'Both insult and play required'
            });
        }
    } else {
        response.status(400).json({
            status : 400,
            success : false,
            message : 'No insult with matching ID found!'
        });
    }
});

// DELETE insult by ID
app.delete('/insults/:id', (request, response) => {
    const { id } = request.params;
    const filtered = insults.filter(i => i.id !== parseInt(id));
    insults = [];
    insults.push(...filtered);
    response.json({
        status : 200,
        success : true,
        data : insults,
        message : 'Insult removed successfully'
    });
});

app.listen(PORT, () => { // Här startar vi upp vår serveranslutning
    console.log(`Server is running on port ${PORT}`);
});

let insults = [
    {
        "id" : 1,
        "insult": "Thou art a boil, a plague sore, an embossed carbuncle.",
        "play": "King Lear"
    },
    {
        "id" : 2,
        "insult": "More of your conversation would infect my brain.",
        "play": "Coriolanus"
    },
    {
        "id" : 3,
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