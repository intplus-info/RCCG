// App.tsx
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import SermonPage from "./pages/SermonPage";
import EventPage from "./pages/EventPage";
import GivePage from "./pages/GivePage";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/sermons" element={<SermonPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/give" element={<GivePage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default App;
