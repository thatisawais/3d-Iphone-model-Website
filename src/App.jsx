import Nav from "./components/Nav";
import Hero from "./components/hero";
import Soundsection from "./components/Soundsection";
import Displaysection from "./components/Displaysection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";

function App() {

  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Hero />
        <Soundsection />
        <Displaysection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
