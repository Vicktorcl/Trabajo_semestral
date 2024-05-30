$(document).ready(function() {
    
    $.validator.addMethod("rutChileno", function(value, element) {

        // Validar que el RUT tenga el formato correcto (8 o 9 dígitos + guión + dígito verificador)
        var rutPattern = /^\d{7,8}-[\dK]$/;
        if (!rutPattern.test(value)) {
            return false;
        }
      
        // Validar el dígito verificador
        var rutSinGuion = value.replace("-", "");
        var rut = rutSinGuion.slice(0, -1);
        var dv = rutSinGuion.slice(-1);
        var factor = 2;
        var sum = 0;
        for (var i = rut.length - 1; i >= 0; i--) {
            sum += parseInt(rut.charAt(i)) * factor;
            factor = factor === 7 ? 2 : factor + 1;
        }
        var dvCalculado = 11 - (sum % 11);
        dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();
      
        return dv === dvCalculado;
      }, "El RUT no es válido (escriba sin puntos y con guión)");

      $.validator.addMethod("emailCompleto", function(value, element) {

        // Expresión regular para validar correo electrónico
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
      
        // Validar correo electrónico con la expresión regular
        return regex.test(value);
      
      }, 'El formato del correo no es válido');
      
      // Agregar método de validación para que un campo sólo acepte 
      // letras y espacios en blanco, pero no números ni símbolos,
      // ideal para campos como nombres y apellidos
      $.validator.addMethod("soloLetras", function(value, element) {
      
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
      
      }, "Sólo se permiten letras y espacios en blanco.");
      
      
      // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
      document.getElementById('rut').addEventListener('keyup', function(e) {
        e.target.value = e.target.value.toUpperCase();
      });

      $.validator.addMethod("emailCompleto", function(value, element) {

        // Expresión regular para validar correo electrónico
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
      
        // Validar correo electrónico con la expresión regular
        return regex.test(value);
      
      }, 'El formato del correo no es válido');
      
      // Agregar método de validación para que un campo sólo acepte 
      // letras y espacios en blanco, pero no números ni símbolos,
      // ideal para campos como nombres y apellidos
      $.validator.addMethod("soloLetras", function(value, element) {
      
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
      
      }, "Sólo se permiten letras y espacios en blanco.");
      
      
      // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
      document.getElementById('rut').addEventListener('keyup', function(e) {
        e.target.value = e.target.value.toUpperCase();
      });


    $("#formulario_usuarios").validate({
      rules: {
        id:{
            required: true,
          },
        rut:{
            required: true,
            rutChileno: true
        },
        nombre:{
            required: true,
            soloLetras: true,
            minlength: 2,
            maxlength: 25,
        },
        apellido:{
            required: true,
            soloLetras: true,
            minlength: 2,
            maxlength: 25,
        },
        correo: {
            required: true,
            emailCompleto: true,
        },
        direccion:{
            required: true,
            minlength: 5,
            maxlength: 150,
        },
        password1: {
          required: true,
          minlength: 5,
          maxlength: 15,
        },
      }, // --> Fin de reglas
      messages: {
          id:{
            required: "Este campo es obligatorio",
          },
        rut:{
            required: "El RUT es un campo requerido",
            rutChileno: "El RUT no es válido (escriba sin puntos y con guión)",
        },
        nombre:{
            required: "Este campo es obligatorio",
            soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
            minlength: "El debe tener al menos 2 carácteres",
            maxlength: "El debe tener a lo más 25 carácteres",
        },
        apellido:{
            required: "Este campo es obligatorio",
            minlength: "El debe tener al menos 2 carácteres",
            maxlength: "El debe tener a lo más 25 carácteres",
        },
        correo: {
            required:"El email es un campo requerido",
            emailCompleto: "El formato del correo no es válido",
        },
        direccion:{
            required: "Este campo es obligatorio",
            minlength: "El debe tener al menos 5 carácteres",
            maxlength: "El debe tener a lo más 150 carácteres",
        },
        password1: {
            required: "La contraseña es una campo obligatorio",
            minlength: "Mínimo 5 caracteres",
            maxlength: "Máximo 15 caracteres",
        },
      },
    });
});