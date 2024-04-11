if (document.getElementById('menu')) {

  fetch('menu_superior.html').then(response => {

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