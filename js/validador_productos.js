$(document).ready(function() {
    $.validator.addMethod("aceptarDigitos", function(value, element) {
      if(isNaN(parseFloat(value)) == false){
        return true;
      }
      return false;
    },"Por favor escribir sólo números.");
    $.validator.addMethod("maxDescuentSub", function(value, element) {
      let valor = parseFloat(value);
      if(valor < 0 || valor > 5 ){
        return false;
      }
      return true;
    },"Por favor no superar mas de 5%.");
    $.validator.addMethod("maxDescuento", function(value, element) {
      let desc = parseFloat(value);
      if(desc < 0 || desc > 50 ){
        return false;
      }
      return true;
    },"Por favor no superar mas de 50%.");
    $.validator.addMethod("minimoPrecio", function(value, element) {
      let valor = parseFloat(value);
      if(valor < 0){
        return false;
      }
      return true;
    },"El precio no puede ser menor a 0.");
      $("#formulario_productos").validate({
        rules: {
            id:{
                required: true,
              },
          categoria:{
            required: true,
          },
          nombre:{
            required: true,
            minlength: 2,
            maxlength: 30,
          },
          descripcion:{
            required: true,
            minlength: 2,
            maxlength: 200,
          },
          precio:{
            required: true,
            number:true,
            min:0,
          },
          desc_subscriptor:{
            required: true,
            number:true,
            min:0,
            max:100,
          },
          desc_oferta:{
            required: true,
            number:true,
            min:0,
            max:100,
          },
  
        }, // --> Fin de reglas
        messages: {
            id:{
                required: "Este campo es obligatorio",
              },
          categoria:{
            required: "Este campo es obligatorio",
          },
          nombre:{
            required: "Este campo es obligatorio",
            minlength: "El debe tener al menos 2 carácteres",
            maxlength: "El debe tener a lo más 25 carácteres",
          },
          descripcion:{
            required: "Este campo es obligatorio",
            minlength: "El debe tener al menos 2 carácteres",
            maxlength: "El debe tener a lo más 200 carácteres",
          },
          precio:{
            required: "Este campo es obligatorio",
            number: "El campo debe ser un numero",
            min: "El precio debe ser mayor o igual que 0"
          },
          desc_subscriptor:{
            required: "Este campo es obligatorio",
            number: "El campo debe ser un numero",
            min: "El porcentaje suscriptor debe ser mayor o igual que 0",
            max: "El porcentaje suscriptor debe ser menor o igual que 100",
            
          },
          desc_oferta:{
            required: "Este campo es obligatorio",
            number: "El campo debe ser un numero",
            min: "El porcentaje oferta debe ser mayor o igual que 0",
            max: "El porcentaje oferta debe ser menor o igual que 100",
          },
        },
      });
  });