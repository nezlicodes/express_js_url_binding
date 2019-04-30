const express = require ('express');
const app = express();

app.get('/:id', (req, res) => {
    res.send('your id is: ' + req.params.id)
})

app.listen(3000)