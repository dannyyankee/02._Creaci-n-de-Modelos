const clientsService = require("./../services/clientsService");

const getClients = async (req, res) => {
    const Clients = await clientsService.getClients();
    res.status(200).send(Clients);
};

module.exports = {
    getClients,
};
