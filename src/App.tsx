import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Dashboard} />
    </Router>
  );
};

export default App;
