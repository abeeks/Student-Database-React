import StudentsView from './component/student/StudentsView';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddStudent from './component/student/AddStudent';
import EditStudent from './component/student/EditStudent';
import StudentProfile from './component/student/StudentProfile';
import Signin from './component/common/SignIn';

import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    
    <main className="container mt-5">
      <AuthContextProvider>
      <Router>
      <NavBar/>
        <Routes>
          <Route exact 
          path='/' 
          element={<Home/>}></Route>
          <Route path='/signin' element={<Signin />} />
         
          <Route exact 
          path='/view-students' 
          element={<StudentsView/>}></Route>
          <Route
						exact
						path="/add-students"
						element={<AddStudent />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditStudent />}></Route>
					<Route
						exact
						path="/student-profile/:id"
						element={<StudentProfile />}></Route>
        </Routes>
      </Router>
      </AuthContextProvider>
    </main>
  );
}

export default App;
