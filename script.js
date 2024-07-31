const App = ({ initialButtonText, initialButtonClass }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonClass, setButtonClass] = React.useState(initialButtonClass);

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
root.render(<App initialButtonText="Click me" initialButtonClass="" />);

// const App = (props) => {
//   const { initialButtonText } = props;      ===       const App = ({ initialButtonText }) => {
