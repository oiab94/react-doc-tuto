// *Permite manejar el DOM de nuestro HTML
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Creamos un ejemplo de un reloj en marcha
 */
let Tick = () => {
	const element = (
		<div>
			<h1>Hello World!</h1>
			<h2>It is {new Date().toLocaleTimeString()}</h2>
		</div>
	)

	root.render(element);
}
setInterval(Tick, 1000);

// *Prueba de la aplicacion
let AppPrueba = () =>{
	return (
		<>
			<Tick />
		</>
	)
};
export default AppPrueba;