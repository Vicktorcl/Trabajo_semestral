$(document).ready(function() {
    $.validator.addMethod("aceptarDigitos", function(value, element) {
      if(isNaN(parseFloat(value)) == false){
        return true;
      }
      return false;
    },"Por favor escribir sólo números.");

    $.validator.addMethod("minimoPrecio", function(value, element) {
      let valor = parseFloat(value);
      if(valor < 0){
        return false;
      }
      return true;
    },"La cantidad no puede ser menor a 0.");
      $("#formulario_bodega").validate({
        rules: {
          categoria:{
            required: true,
          },
          nombre:{
            required: true,
          },
          descripcion:{
            required: true,
            minlength: 2,
            maxlength: 200,
          },
          cantidad:{
            required: true,
            number:true,
            min:1,
          },
  
        }, // --> Fin de reglas
        messages: {
          categoria:{
            required: "Este campo es obligatorio",
          },
          nombre:{
            required: "Este campo es obligatorio",
          },
          descripcion:{
            required: "Este campo es obligatorio",
            minlength: "El debe tener al menos 2 carácteres",
            maxlength: "El debe tener a lo más 200 carácteres",
          },
          cantidad:{
            required: "Este campo es obligatorio",
            number: "El campo debe ser un numero",
            min: "La cantidad debe ser mayor o igual que 1",
            
          },
        },
      });
  });