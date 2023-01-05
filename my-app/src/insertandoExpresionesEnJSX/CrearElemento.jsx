import React from "react";
/**
 * Aqui representamos un nuevo objeto por medio de la función de React
 * dentro de JSX
 * En esencia el objeto creado tiene esta forma
 * 
 * element = {
 * 	type: 'h1',
		props: {
			className: 'greeting',
			children: 'Hello, world!'
			}
 *	}
 */
let RepresentarObjeto = () => {
  const element = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello, World"
  );

  return element;
};

// *Prueba de los elementos
let AppPrueba = () => {
  return (
    <>
      <RepresentarObjeto />
    </>
  );
};
export default AppPrueba;
