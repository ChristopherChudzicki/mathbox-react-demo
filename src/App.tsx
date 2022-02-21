import React, { useState, useEffect, useRef } from 'react';
import { Mathbox } from 'mathbox-react'
import './App.css';

function App() {
  const container = useRef<HTMLDivElement>(null);
  const [, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])
  return (
    <div className="App">
      <Mathbox element={container}>
      </Mathbox>
    </div>
  );
}

export default App;
