

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!2');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!1');
};



exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!4');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso!5 ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso!6 ${id}`);
};