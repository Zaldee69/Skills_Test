import { useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import "./App.css";
import { Document, Page, pdfjs } from "react-pdf";
import { BsFillFolderFill } from "react-icons/bs";
import { IoIosBrush } from "react-icons/io";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [numPages, setNumPages] = useState(null);
  const [preview, setPreview] = useState("");
  const arr = [];

  for (let i = 1; i <= numPages; i++) {
    arr.push(i);
  }

  const onChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      localStorage.setItem("pdf", reader.result);
      getPdf();
    };
  };

  const getPdf = () => {
    setPreview(localStorage.getItem("pdf"));
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    getPdf();
  }, []);

  return (
    <div className="App">
      <nav>
        <div>
          <ul>
            <li>
              <input
                onChange={onChange}
                name="image"
                type="file"
                id="actual-btn"
                hidden
              />
              <label for="actual-btn">
                <BsFillFolderFill size="20px" color="#5F6368" />
              </label>
            </li>
            <li>
              <IoIosBrush size="20px" color="#5F6368" />
            </li>
          </ul>
        </div>
      </nav>
      <div className="pdf-container">
        <div className="pdf-card">
          {preview && (
            <Document file={preview} onLoadSuccess={onDocumentLoadSuccess}>
              {arr.map((num) => {
                return (
                  <Page className="pdf-card" width="400" pageNumber={num} />
                );
              })}
            </Document>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
