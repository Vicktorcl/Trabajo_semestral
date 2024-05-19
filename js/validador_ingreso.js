$(document).ready(function() {
    // Validar formulario con JQuery
    $("#formulario-ingreso").validate({
      rules: {
        usuario: {
          required: true,
        },
        password: {
          required: true,
          minlength: 5,
          maxlength: 15,
        },
      }, // --> Fin de reglas
      messages: {
        usuario: {
          required: "El nombre de usuario es un campo requerido"
        },
        password: {
          required: "La contraseña es un campo requerido",
          minlength: "Su contraseña es de un mínimo de 5 caracteres",
          maxlength: "Su contraseña es de un máximo de 15 caracteres",
        },
    },
  });
});
