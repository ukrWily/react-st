const App = (props) => {
  console.log(props);
  const [buttonText, setButtonText] = React.useState("Click me");
  const [buttonClass, setButtonClass] = React.useState("");

  const onButtonClick = () => {
    setButtonText(`Hello from React ${Math.random()}`);
    setButtonClass("green-btn");
  };

  return (
    <div className="app">
      <button className={buttonClass} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const head = <h1>Hello</h1>;
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
