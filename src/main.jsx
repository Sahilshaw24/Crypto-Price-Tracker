import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-red-600">Hello World</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
