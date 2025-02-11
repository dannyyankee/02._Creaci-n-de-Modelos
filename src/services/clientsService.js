const Clients = require("./../bd/models/clientsModel");

const getClients = async () => {
    const clients = await Clients.findAll();
    return clients;
};

module.exports = {
    getClients
};
