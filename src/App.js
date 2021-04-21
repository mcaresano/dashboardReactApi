import ContentWrapper from "./views/ContentWrapper";
import Sidebar from "./views/Sidebar";

import './css/app.css';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
