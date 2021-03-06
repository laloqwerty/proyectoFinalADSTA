//deberas de utilizar faker para generar los datos
const faker = require('faker');
module.exports = {
    createShipment: function (req, res) {
        try {
                //debera de simular un envio con dirección un precio y una persona con sus datos
                var direccionPersona = faker.address.direction();
                var precio = faker.commerce.price();
                var nombrePersona = faker.name.findName();
                
                var response = {
                    message:"Pedido realizado",
                    data:{
                        address: direccionPersona,
                        name: nombrePersona,
                        price: precio,
                    }
                }
                res.status(201).send(response);
        } catch (e) {
            Sentry.captureException(e);
            Sentry.captureMessage("Something went wrong");
        }

    },
    changeStatus: function (req, res) {
        try {
            //Debera de retornar una dirección random
            // codigo de respuesta 201
            // data la direcciòn random.
            var direccion = faker.address.direction();

            res.status(201).json({
                data: direccion
            });
        } catch (e) {
            Sentry.captureException(e);
            Sentry.captureMessage("Something went wrong");
        }
        
        
    },
};
