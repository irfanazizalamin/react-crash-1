// It's the main component

const App = () => {
  // we can also create styles in JSX in object format
  const styles = {
    color: "red",
    backgroundColor: "black",
  };

  // we can only return a single component, so if there's more than one, add () "parenthesis" and wrap in single root
  // we can use <></> to be a wrapper
  return (
    <h1 className="text-3xl font-bold underline" style={styles}>
      Hello world!
    </h1>
  );
};

export default App;
