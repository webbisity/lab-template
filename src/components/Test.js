import React, { useEffect, useState } from 'react';

const Test = () => {

  const [content, setContent] = useState("");

  useEffect(() => {
    // Load the Google API client library
    window.gapi.load('client', () => {
      // Initialize the API with your API key and specific Google APIs
      window.gapi.client.init({
        apiKey: 'AIzaSyAqc1RhWrI-0_GwG784mjTe_MOrebAABC4',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      }).then(() => {
        // Fetch files from the shared folder using the folder's ID
        window.gapi.client.drive.files.list({
          q: "'120Gh543AOnfa48tJcMgXqHW25eWZjrZG' in parents", // Replace FOLDER_ID with your folder's ID
        }).then(async response => {
          const files = response.result.files;

          for (const file of files) {
            if (file.mimeType !== 'application/vnd.google-apps.folder') {
              // Fetch the content of each file using its ID
              const fileResponse = await window.gapi.client.drive.files.get({
                fileId: file.id,
                alt: 'media', // Fetch the actual file content
              });

              const fileContent = fileResponse.body;
              console.log(`Content of ${file.name}:`, fileContent);
              /* setContent(fileResponse.body); */
              // You can process the file content as needed
            }
          }
        });
      });
    });
  }, []);

  
  return (
    <div>
      <h1>My Google Drive App</h1>
      {/* {content && <img src={`data:image/png;base64,${content}`} />} */}
    </div>
  );
}

export default Test;

/* 
useEffect(() => {
  // Load the Google API client library
  window.gapi.load('client', () => {
    // Initialize the API with your API key and specific Google APIs
    window.gapi.client.init({
      apiKey: 'AIzaSyAqc1RhWrI-0_GwG784mjTe_MOrebAABC4',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    }).then(() => {
      // Fetch files from the shared folder using the folder's ID
      window.gapi.client.drive.files.list({
        q: "'120Gh543AOnfa48tJcMgXqHW25eWZjrZG' in parents", // Replace FOLDER_ID with your folder's ID
      }).then(response => {
        const files = response.result.files;
        console.log('Files in the folder:', files);
      });
    });
  });
}, []); */