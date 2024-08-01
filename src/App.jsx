// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './Pages/LoginForm';
// import DashBoard from './Pages/DashBoard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/dashboard" element={<DashBoard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/LoginForm';
import DashBoard from './Pages/DashBoard';
import AuthProvider from "./provider/authProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
// import UpdateProfile from './Pages/UpdateProfile';
// import SubmitDocument from './Pages/SubmitDocument';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
            {/* <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/submit-document" element={<SubmitDocument />} /> */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

