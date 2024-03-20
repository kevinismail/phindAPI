// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
 const [question, setQuestion] = useState('');
 const [response, setResponse] = useState('');

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post('https://https.api.phind.com/infer/', {
        question: question,
        options: {
          date: "2024-03-20",
          language: "fr",
          detailed: true,
        },
      }, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Origin": "https://www.phind.com",
          // Ajoutez ici votre clé API Phind si nécessaire
        },
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while fetching the response.');
    }
 };

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
 );
}

export default App;
