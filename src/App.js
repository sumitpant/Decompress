import React,{useEffect} from 'react'
import './App.css';
import json from './json.zip'
import JSZipUtils from "jszip-utils"
import JSZip from 'jszip';

function App() {

  useEffect(() => {
                

   const fun=async()=>{
     

      JSZipUtils.getBinaryContent(json,  async function(err, data) {
        if(err) {
            throw err; 
        }
    
        let zip =JSZip(data);
      
        zip.loadAsync(data).then( async function (obj) {
          
          obj.forEach( async function  (relativePath, zipEntry) {  
          
             let result= await zip.file(zipEntry.name).async("string");
             console.log(JSON.parse(result))
           

        });
            
        });
    });

   }
    fun()
    
  


  })


  return (
    <div className="App">
             HEllo
           
           
    </div>
  );
}

export default App;
