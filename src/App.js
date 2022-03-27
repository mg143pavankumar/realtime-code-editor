import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeEditorPage from "./pages/CodeEditorPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/codeeditor/:roomId" element={<CodeEditorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
