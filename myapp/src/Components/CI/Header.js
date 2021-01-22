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
                <a href="/schedule/">View Schedule</a>
                <a href="/courseCoverage">Course Coverage</a>
                <a href="/slotsAssignment">Slots Assignment</a>
                <a href="/viewAllStaff">View All Staff</a>
                <a href="/viewAllStaffCourse">View All Staff/Course</a>
                <a href="/assignMemberCourseSlot">Assign Member Course Slot</a>
                <a href="/removeMemberCourse/">Remove Member Course</a>
                <a href="/assignCC/">Assign CC</a>
                <a href="/schedule/">View Attendance</a>
                <a href="/viewProfile/">View Profile</a>
                <a href="/logout/">Log Out</a>
            </div>
        </div>
    )
}

export default Header
