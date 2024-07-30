const App = () => {
  const [buttonText, setButtonText] = React.useState("Click me");
  console.log(buttonText);

  const onButtonClick = () => {
    setButtonText(`Hello from React ${Math.random()}`);
  };

  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const head = <h1>Hello</h1>;
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
