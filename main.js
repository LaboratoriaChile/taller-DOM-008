  //Acá crearemos nuestro DOM
  // obtengo mi div que contendrá mi codigo js en html
  const container = document.getElementById('contenedor_datos');
  
  // Con esta forma tengo que tener declarado el evento onclick desde html
  // function ingresar(){
  //   let name = document.getElementById('nombre').value;
  //   let lastName = document.getElementById('apellido').value;
  //   container.innerHTML = `<p class="text">Tu nombre es:  ${name}</p>` + `<p class="text">Tu apellido es: ${lastName}</p>`;
  // }
  
  // Obtengo mi botón que tendrá el evento click
  const button_enter = document.getElementById('btnIngresar');
  // //Acá utilizando el id de declaramos a nuestro boton en HTML haré mi addEventListener con un evento clic y crearemos nuestros elementos solo con innerHTML
  // button_enter.addEventListener('click', () =>{
  //  // Rescato y guardo el valor que el usuario ingrese en el campo del Nombre
  //   let name = document.getElementById('nombre').value;
  // // Acá limpio mi campo nombre al hacer clic en el boton 
  //   document.getElementById('nombre').value = "";
  
  // // Rescato y guardo el valor que el usuario ingrese en el campo del Apellido
  //   let lastName = document.getElementById('apellido').value;
  // // Acá limpio mi campo apellido al hacer clic en el boton 
  //  document.getElementById('apellido').value = "";
  //   container.innerHTML = `<p class="text">Tu nombre es:  ${name}</p>` + `<p class="text">Tu apellido es: ${lastName}</p>`;
  // })



  // Acá utilizando el id de declaramos a nuestro boton en HTML haré mi addEventListener con un evento clic y crearemos nuestros elementos uno a uno
  button_enter.addEventListener('click', (evento) => {
    // Rescato y guardo el valor que el usuario ingrese en el campo del Nombre
    let name = document.getElementById('nombre').value;
    // Acá limpio mi campo nombre al hacer clic en el boton 
    document.getElementById('nombre').value = "";

    // Rescato y guardo el valor que el usuario ingrese en el campo del Apellido
    let lastName = document.getElementById('apellido').value;
    // Acá limpio mi campo apellido al hacer clic en el boton 
    document.getElementById('apellido').value = "";

    // Crearemos un elemento div que contenga los datos ingresados por el usuario
    const container_datos = document.createElement('div');
    //le asignamos una clase para luego poder cambiarle los estilos desde css
    container_datos.classList.add('contenedor');
    // Asigno padre a mi contenedor de datos, para que se imprima en html
    container.appendChild(container_datos);

    // Crear elementos para imprimir nombre ingresado de usuario
    const container_name = document.createElement('p');
    //le asignamos una clase para luego poder cambiarle los estilos desde css
    container_name.classList.add('text');
    let value_container_name = document.createTextNode(`Tu nombre es: ${name}`);
    //asignamos padre (p) al valor que ingreso el usuario
    container_name.appendChild(value_container_name);
    container_datos.appendChild(container_name);

    // Crear elementos para imprimir apellido ingresado por el usuario
    const container_lastName = document.createElement('p');
    //le asignamos una clase para luego poder cambiarle los estilos desde css
    container_lastName.classList.add('text');
    let value_container_lastName = document.createTextNode(`Tu apellido es: ${lastName}`);
    //asignamos padre (p) al valor que ingreso el usuario
    container_lastName.appendChild(value_container_lastName);
    container_datos.appendChild(container_lastName);

    // Agregaré una imagen
    const container_image = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', './9BE.jpg');
    container_image.appendChild(image);
    container_datos.appendChild(container_image);
    container.appendChild(container_datos);

  });