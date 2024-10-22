import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div style={
        {
            display: "flex",
        justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
            color: "white",
        }
    }>
      <h1>Habitrix</h1>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);