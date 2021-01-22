import React from 'react';
import './Header.css';

function Header() {
    return (
        <div class="header">
            <a href="#default" class="logo">GUCPortal</a>
            <a href="/home">Sign In</a>
            <a href="/home">Sign Out</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="/location">Locations</a>
                <a href="/faculty">Faculties</a>
                <a href="/courses">Courses</a>
                <a href="/staffmembers">Staff Members</a>
                <a href="/updateSalary">Update Salary</a>
                <a href="/viewProfile/">View Profile</a>
                <a href="/schedule/">View Attendance</a>
                <a href="/viewStaffAttendance/">View Staff Attendance</a>
                <a href="/resetPassword/">Reset Password</a>
                <a href="/logout/">Log Out</a>
            </div>
        </div>
    )
}

export default Header


/*
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <h3>Schedule</h3>
            <h3>View Profile</h3>
            <h3>Log out</h3>
        </div>
    )
}

export default Header
*/
