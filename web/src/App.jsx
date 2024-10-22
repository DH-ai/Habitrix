import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="main" style="align:center">
      <h1>Habitrix</h1>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);