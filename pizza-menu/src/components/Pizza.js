import pizzaData from "../data";

const Pizza = () => {
    const pizzas = pizzaData
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas &&
      <ul className="pizzas">
        {pizzas.map((item) => {
          return (
            <li className={`pizza ${item.soldOut ? "sold-out" : ''}`} key={item.name}>
              <img src={item.photoName} alt="" />
              <h3>
                {item.name}
                <small style={{display: 'block'}}>{`${item.soldOut ? 'SOLD OUT' : item.price}`}</small>
              </h3>
              <p>{item.ingredients}</p>
            </li>
          );
        })}
      </ul>
      }
    </main>
  );
};

export default Pizza;
