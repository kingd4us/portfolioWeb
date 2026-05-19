import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './App.tsx'
// @ts-ignore: CSS side-effect import handled by bundler
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)