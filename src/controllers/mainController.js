// Acá nos falta nuestra fuente de datos

const controller = {
    index : (req, res) => {
       return res.render('index');
    },
    detalleMenu : (req, res) => {
       return res.render('detalleMenu', {});
    }
}


// Acá nos falta un objeto literal con las acciones para cada ruta


module.exports = controller;
// Acá exportamos el resultado