
'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import CodeArea from './components/CodeArea';
import GeneratedCode from './components/GeneratedCode';
import GenerateButton from './components/GenerateButton';
const { defaultTests } = require('./default-tests');

// Main component
export default function Home() {
  // State variables
  const [code, setCode] = useState(defaultTests);
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to generate code from tests
  const handleGenerate = async () => {
    // Start loading state
    setLoading(true);

    try {
      // Send POST request to server
      const response = await fetch('http://localhost:8080/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tests: code,
        }),
      });

      // If response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the data from the response
      const data = await response.json();

      // Set the generated code
      setGeneratedCode(data.code);
    } catch (error) {
      console.error('An error occurred:', error);
    }

    // End loading state
    setLoading(false);
  };

  // Render the component
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>Test to Code</h1>
      <br />
      <p style={{ textAlign: 'center' }}>This is an AI powered web application that converts python unit tests into code iteratively.</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CodeArea value={code} onChange={(newValue) => setCode(newValue)} />
        <div style={{ fontSize: '2em', margin: '0 80px' }}>→</div>
        <GeneratedCode value={generatedCode} />
      </div>
      <GenerateButton state={loading} handleClick={handleGenerate} />
    </div>
  )
}
