if (document.getElementById('menu')) {

  fetch('navbar_normal.html').then(response => {

      return response.text();

  }).then(htmlContent => {

  document.getElementById('menu').innerHTML = htmlContent;

  window.scrollTo(0, 0);

  });

};

if (document.getElementById('menu_cliente')) {

  fetch('navbar_cliente.html').then(response => {

      return response.text();

  }).then(htmlContent => {

  document.getElementById('menu_cliente').innerHTML = htmlContent;

  window.scrollTo(0, 0);

  });

};

if (document.getElementById('menu_administrador')) {

  fetch('navbar_administrador.html').then(response => {

      return response.text();

  }).then(htmlContent => {

  document.getElementById('menu_administrador').innerHTML = htmlContent;

  window.scrollTo(0, 0);

  });

};

