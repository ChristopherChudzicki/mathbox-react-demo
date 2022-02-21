import React, { useState, useEffect, useRef } from 'react';
import { Mathbox } from 'mathbox-react'
import 'mathbox/build/mathbox.css'
import './App.css';

function App() {
  const container = useRef<HTMLDivElement>(null);
  const [, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])
  return (
    <div ref={container} className="App">
      {container.current && <Mathbox element={container.current} />}
    </div>
  );
}

export default App;
