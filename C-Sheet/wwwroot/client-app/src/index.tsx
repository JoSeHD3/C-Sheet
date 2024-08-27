import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/output.css';

const initialData = (window as any).__INITIAL_DATA__;

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App initialItems={initialData} />);
}
