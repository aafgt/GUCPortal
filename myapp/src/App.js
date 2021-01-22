import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './Components/Login';
import HomeHR from './Components/HR/Home';
import Location from './Components/HR/Location';
import Faculty from './Components/HR/Faculty';
import StaffMembers from './Components/HR/StaffMembers';
import UpdateSalary from './Components/HR/UpdateSalary';

import HomeCI from './Components/CI/Home';
import CourseCoverage from './Components/CI/CourseCoverage';
import SlotsAssignment from './Components/CI/SlotsAssignment';
import ViewProfile from './Components/ViewProfile';
import ViewStaffAttendance from './Components/HR/ViewStaffAttendance';
import Courses from './Components/HR/Courses';
import Logout from './Components/Logout';
import ResetPass from './Components/ResetPass';
import ViewAllStaff from './Components/CI/ViewAllStaff';
import ViewAllStaffCourse from './Components/CI/ViewAllStaffCourse';
import AssignMemberCourseSlot from './Components/CI/AssignMemberCourseSlot';
import AssignCC from './Components/CI/AssignCC';
import RemoveMemberCourse from './Components/CI/RemoveMemberCourse';
import ViewSchedule from './Components/ViewSchedule';

import HomeCC from './Components/CC/Home';

import HomeHOD from './Components/HOD/Home';
import AssignCI from './Components/HOD/AssignCI';



function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Login}></Route>

      <Route path="/home/HR" component={HomeHR}></Route>
      <Route path="/location" component={Location}></Route>
      <Route path="/faculty" component={Faculty}></Route>
      <Route path="/courses" component={Courses}></Route>
      <Route path="/staffmembers" component={StaffMembers}></Route>
      <Route path="/updateSalary" component={UpdateSalary}></Route>
      <Route path="/viewStaffAttendance" component={ViewStaffAttendance}></Route>

      <Route path="/home/CI" component={HomeCI}></Route>
      <Route path="/courseCoverage" component={CourseCoverage}></Route>
      <Route path="/slotsAssignment" component={SlotsAssignment}></Route>
      <Route path="/viewAllStaff" component={ViewAllStaff}></Route>
      <Route path="/viewAllStaffCourse" component={ViewAllStaffCourse}></Route>
      <Route path="/assignMemberCourseSlot" component={AssignMemberCourseSlot}></Route>
      <Route path="/removeMemberCourse" component={RemoveMemberCourse}></Route>
      <Route path="/assignCC" component={AssignCC}></Route>


      <Route path="/home/CC" component={HomeCC}></Route>

      <Route path="/home/HOD" component={HomeHOD}></Route>
      <Route path="/assignCI" component={AssignCI}></Route>




      <Route path="/schedule" component={ViewSchedule}></Route>



      

      <Route path="/viewProfile" component={ViewProfile}></Route>
      <Route path="/resetPassword" component={ResetPass}></Route>


      <Route path="/logout" component={Logout}></Route>
    </Router>
    </div>
  );
}

export default App;


// "proxy": "http://localhost:1000/", //add in package