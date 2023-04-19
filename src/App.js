
import './App.css';
import { useEffect, useState, useRef } from "react";
import axios from 'axios';
function App() {
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);


  const handleSingleClick = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file',file)
    const config = {
      header: {
        'content-type':'multipart/form'
      }

    }
    const {data} = axios.post('localhost:3000/api/uploade/singleFile',formData,config)


  }
  return (
    <div className="app">
      <form onSubmit={handleSingleClick}>
        <span className='title'>Uploade Single File</span>
          <input 
          
            type="file"
            name="file"
            className="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type="submit" className="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
