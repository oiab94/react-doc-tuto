/**
 * Esta es la primera forma en la que se puede usar los elementos en JSX
 * @returns el elemento para que lea el HTML
 */

let PrimeraForma = () => {
  const name = "Juan Perez";
  const element = <h1>Hello, {name}</h1>;

  return element;
};

/**
 * Esta es la segunda forma en la que se puede presentar en el JSX
 * @returns el elemento para que lea el HTML
 */
let SegundaForma = () => {
  const user = {
    firstName: "Harper",
    lastName: "Perez",
  };

  let formatUser = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const element = <h1>Hello, {formatUser(user)}!</h1>;

  return element;
};

// *Insertando los elementos
let AppPrueba = () => {
	return (
	<div>
		<PrimeraForma />
		<SegundaForma />
	</div>
)}
export default AppPrueba;