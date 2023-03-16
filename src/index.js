import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './MyApp';
import { recordPerformanceMetrics } from './metrics';

const rootElement = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootElement);

appRoot.render(
<React.StrictMode>
<MyApp />
</React.StrictMode>
);

recordPerformanceMetrics();
