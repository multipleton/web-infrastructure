import './Greet.css';

function Greet() {
  let name = '';
  const handleChange = event => {
    const { value } = event.target;
    name = value;
  };
  const greet = () => fetch(`http://localhost:3012/greet/${name}`)
    .then(response => response.text())
    .then(alert)
    .catch(console.error);
  return (
    <div className="greet-section">
      <input type="text" onChange={handleChange} />
      <button onClick={greet}>Greet Me</button>
    </div>
  );
}

export default Greet;
