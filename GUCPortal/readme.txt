Notes:-
    +First manually add an hr member in the database
    Functionality: Manually add an hr member in the database
    Route: /addFirstHRMember
    Request type: POST

1. To launch the server run index.js file.
2. The server is listening to port 1000.
3.


Staff Functionalities

Functionality: login
Route: /login
Request type: POST
Request body: { "email":"h@guc.edu.eg", "password":"123456" }
Response: the user. example of a user: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTVmMWJkMzgyZTAwMzU5NGI1NTljZCIsImlhdCI6MTYwODkwNTIxM30.Y9zafzdwCWtKfYlwaB2_uBqJTixFB6D1xGWy1MVezuk","user": {"id": "hr-1","email": "h@guc.edu.eg","name": "H", type: "HR"}}

Functionality: logout
Route: /logout/:id
Request type: POST
Parameters: id is the ID of the member logging out
Example of how to call the route: /logout/hr-1
Response: the message. example of a message: {"msg": "logged out successfully"}

Functionality: view profile.
Route: /viewProfile/:id
Request type: GET
Parameters: id is the ID of the member who is viewing his profile
Example of how to call the route: /viewProfile/hr-1
Response: the member. example of a member: {"password": "$2a$10$7hw1rHbjBPMPyhpQ0LV2Cu3ZKQussLkeVU.OxEt4hynlR/v7mQlsG","officeLocation": "","dayOff": ["Friday","Saturday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 1,"_id": "5fe5f1bd382e003594b559cd","id": "hr-1","name": "H","email": "h@guc.edu.eg","alternativeEmail": "h@guc.edu.eg","salary": 10,"type": "HR","attendance": [],"__v": 0}

/* UPDATE PROFILE FUNCTION HERE */

Functionality: reset a password
Route: /resetPassword/:id
Request type: PUT
Parameters: id is the ID of the member who is updating his password
Example of how to call the route: /resetPassword/hr-1
Request body: { "oldPassword":"123456", "newPassword":"123456789", "newPasswordCheck":"123456789" }
Response: the member. example of a member: {"password": "$2a$10$iELk87XyViuvIkxbMHewfey0BfwN9pEegN5r.Tk8Yy4zs/AX0h4He","officeLocation": "","dayOff": ["Friday","Saturday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 1,"_id": "5fe5f1bd382e003594b559cd","id": "hr-1","name": "H","email": "h@guc.edu.eg","alternativeEmail": "h@guc.edu.eg","salary": 10,"type": "HR","attendance": [],"__v": 0}

Functionality: sign in
Route: /signIn/:id
Request type: PUT
Parameters: id is the ID of the member who is signing in
Example of how to call the route: /signIn/hr-1
Response: the member. example of a member: {"password": "$2a$10$iELk87XyViuvIkxbMHewfey0BfwN9pEegN5r.Tk8Yy4zs/AX0h4He","officeLocation": "","dayOff": ["Friday","Saturday"],"signINs": ["2020-12-25T14:11:23.606Z"],"signOUTs": [],"leaveBalance": 0,"loggedIn": 1,"_id": "5fe5f1bd382e003594b559cd","id": "hr-1","name": "H","email": "h@guc.edu.eg","alternativeEmail": "h@guc.edu.eg","salary": 10,"type": "HR","attendance": [],"__v": 0}

Functionality: sign out
Route: /signOut/:id
Request type: PUT
Parameters: id is the ID of the member who is signing out
Example of how to call the route: /signOut/hr-1
Response: the member. example of a member: {"password": "$2a$10$iELk87XyViuvIkxbMHewfey0BfwN9pEegN5r.Tk8Yy4zs/AX0h4He","officeLocation": "","dayOff": ["Friday","Saturday"],"signINs": ["2020-12-25T14:11:23.606Z"],"signOUTs": ["2020-12-25T14:12:09.669Z"],"leaveBalance": 0,"loggedIn": 1,"_id": "5fe5f1bd382e003594b559cd","id": "hr-1","name": "H","email": "h@guc.edu.eg","alternativeEmail": "h@guc.edu.eg","salary": 10,"type": "HR","attendance": ["_id": "5fe5f339382e003594b559ce","date": "2020-12-25T14:12:09.669Z","attended": true}],"__v": 0}

Functionality: view all attendance
Route: /viewAllAttendance/:id
Request type: GET
Parameters: id is the ID of the member who is viewing his attendance
Example of how to call the route: /viewAllAttendance/hr-1
Response: the attendance. example of an attendance: [{"_id": "5fe5f339382e003594b559ce","date": "2020-12-25T14:12:09.669Z","attended": true}]

Functionality: view missing days
Route: /viewMissingDays/:id
Request type: GET
Parameters: id is the ID of the member who is viewing his missing days
Example of how to call the route: /viewMissingDays/ac-1
Response: the days. example of a day: []


HR Functionalities

Functionality: add a location
Route: /addLocation/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is adding a location
Example of how to call the route: /addLocation/hr-1
Request body: { "name":"C1.111", "maxCapacity":5, "type":"Office" }
Response: the location. example of a location: { "currentCapacity": 0, "_id": "5fe5f3fe382e003594b559d0", "id": 1, "name": "C1.111", "maxCapacity": 5, "type": "Office", "__v": 0 }

Functionality: update a location               
Route: /updateLocation/:HRid
Request type: PUT
Parameters: HRid is the ID of the hr member who is updating a location
Example of how to call the route: /updateLocation/hr-1
Request body: { "name":"C1.111", "maxCapacity":25, "type":"Lab" }
Response: the location. example of a location: { "currentCapacity": 0, "_id": "5fe5f42e382e003594b559d1", "id": 1, "name": "C1.111", "maxCapacity": 25, "type": "Lab", "__v": 0 }

Functionality: delete a location
Route: /deleteLocation/:HRid
Request type: DELETE
Parameters: HRid is the ID of the hr member who is deleting a location
Example of how to call the route: /deleteLocation/hr-1
Request body: { "name":"C3.104" }
Response: the location. example of a location: { "currentCapacity": 0, "_id": "5fe5f42e382e003594b559d1", "id": 1, "name": "C1.111", "maxCapacity": 25, "type": "Lab", "__v": 0 }

Functionality: add a faculty
Route: /addFaculty/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is adding a faculty
Example of how to call the route: /addFaculty/hr-1
Request body: { "name":"MET", "departments":["CS","DMET"] }
Response: the faculty. example of a faculty: {"_id": "5fe5f4a6382e003594b559d2","id": 1,"name": "MET","departments": [{"HOD": "","_id": "5fe5f4a6382e003594b559d3","depName": "CS"},{"HOD": "","_id": "5fe5f4a6382e003594b559d4","depName": "DMET"}],"__v": 0}

Functionality: update faculty
Route: /updateFaculty/:HRid
Request type: PUT
Parameters: HRid is the ID of the hr member who is updating a faculty
Example of how to call the route: /updateFaculty/hr-1
Request body: { "oldName":"MET", "newName":"MT" }
Response: the message. example of a message: {"msg": "Updated successfully"}

Functionality: delete a faculty
Route: /deleteFaculty/:HRid
Request type: DELETE
Parameters: HRid is the ID of the hr member who is deleting a faculty
Example of how to call the route: /deleteFaculty/hr-1
Request body: { "name":"MET" }
Response: the faculty. example of a faculty: {"_id": "5fe5f4a6382e003594b559d2","id": 1,"name": "ET","departments": [{"HOD": "","_id": "5fe5f4a6382e003594b559d3","depName": "CS"},{"HOD": "","_id": "5fe5f4a6382e003594b559d4","depName": "DMET"}],"__v": 0}

Functionality: add a department
Route: /addDepartment/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is adding a department
Example of how to call the route: /addDepartment/hr-1
Request body: { "name":"MET", "department":"CE" }
Response: the faculty. example of a faculty: {"_id": "5fe5f69435d8a418e018d6ec","id": 1,"name": "MET","departments": [{"HOD": "","_id": "5fe5f69435d8a418e018d6ed","depName": "CS"},{"HOD": "","_id": "5fe5f69435d8a418e018d6ee","depName": "DMET"},{"HOD": "","_id": "5fe5f6aa35d8a418e018d6ef","depName": "CE"}],"__v": 0}

Functionality: update department
Route: /updateDepartment/:HRid
Request type: PUT
Parameters: HRid is the ID of the hr member who is updating a department
Example of how to call the route: /updateDepartment/hr-1
Request body: { "oldDepartment":"CS", "newDepartment":"CSEN" }
Response: the message. example of a message: {"msg": "Updated successfully"}

Functionality: delete a department
Route: /deleteDepartment/:HRid
Request type: DELETE
Parameters: HRid is the ID of the hr member who is deleting a department
Example of how to call the route: /deleteDepartment/hr-1
Request body: { "name":"MET", "department":"CE" }
Response: the faculty. example of a faculty: {"_id": "5fe5f69435d8a418e018d6ec","id": 1,"name": "MET","departments": [{"HOD": "","_id": "5fe5f6dc35d8a418e018d6f3","depName": "CSEN"},{"HOD": "","_id": "5fe5f69435d8a418e018d6ee","depName": "DMET"}],"__v": 0}

Functionality: add a course
Route: /addCourse/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is adding a course
Example of how to call the route: /addCourse/hr-1
Request body: { "code":"CSEN704", "name":"ACL", "teaching_slots":[{"type":"LAB","day":"Thursday","slot_no":"1","timing":"8:15-9:45","location":"C7.204"},{"type":"LAB","day":"Thursday","slot_no":"2","timing":"10:00-11:30","location":"C7.204"}], "faculty":"MET", "department":"CSEN" }
Response: the course. example of a course: {"instructors": [],"TAs": [],"CC": "","_id": "5fe5f969f63c5d1424c444f5","id": 1,"code": "CSEN704","name": "ACL","teaching_slots": [{"assigned": "","_id": "5fe5f969f63c5d1424c444f6","type": "LAB","day": "Thursday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe5f969f63c5d1424c444f7","type": "LAB","day": "Thursday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: update a course
Route: /updateCourse/:HRid
Request type: PUT
Parameters: HRid is the ID of the hr member who is updating a course
Example of how to call the route: /updateCourse/hr-1
Request body: { "code":"CSEN704", "name":"Advanced Computer Lab", "teaching_slots":[{"type":"LAB","day":"Thursday","slot_no":"1","timing":"8:15-9:45","location":"C7.204"},{"type":"LAB","day":"Thursday","slot_no":"2","timing":"10:00-11:30","location":"C7.204"}], "faculty":"MET", "department":"CSEN" }
Response: the course. example of a course: {"instructors": [],"TAs": [],"CC": "","_id": "5fe5fc6c81e2d81130763cd9","id": 1,"code": "CSEN704","name": "Advanced Computer Lab","teaching_slots": [{"assigned": "","_id": "5fe5fc6c81e2d81130763cda","type": "LAB","day": "Thursday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe5fc6c81e2d81130763cdb","type": "LAB","day": "Thursday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}


Functionality: delete a course
Route: /deleteCourse/:HRid
Request type: DELETE
Parameters: HRid is the ID of the hr member who is deleting a course
Example of how to call the route: /deleteCourse/hr-1
Request body: { "code":"CSEN704" }
Response: the course. example of a course: {"instructors": [],"TAs": [],"CC": "","_id": "5fe5fc6c81e2d81130763cd9","id": 1,"code": "CSEN704","name": "Advanced Computer Lab","teaching_slots": [{"assigned": "","_id": "5fe5fc6c81e2d81130763cda","type": "LAB","day": "Thursday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe5fc6c81e2d81130763cdb","type": "LAB","day": "Thursday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: add a member
Route: /addMember/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is adding a member
Example of how to call the route: /addMember/hr-1
Request body: { "name":"AA", "email":"aa@guc.edu.eg", "salary":100, "type":"HOD", "officeLocation":"C1.111", "department":"CSEN" }
Response: the member. example of a member: {"password": "$2a$10$jTIt3JSeXGcpKt5KK9QMa.6NZfH0runjkmHmVaQljUvRZcEp5Xxym","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe5fd6f81e2d81130763cdd","id": "ac-1","name": "AA","email": "aa@guc.edu.eg","alternativeEmail": "aa@guc.edu.eg","salary": 100,"type": "HOD","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0}
Request body: { "name":"H2", "email":"h2@guc.edu.eg", "salary":10, "type":"HR", "officeLocation":"C1.111" }
Response: the member. example of a member: {"password": "$2a$10$dYVlhNuU8P.41p14Yt4HUuy1AGT8/t4pmRwvkF63gE38uGM/j3T06","officeLocation": "C1.111","dayOff": ["Friday","Saturday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe5fda481e2d81130763d0a","id": "hr-2","name": "H2","email": "h2@guc.edu.eg","alternativeEmail": "h2@guc.edu.eg","salary": 10,"type": "HR","attendance": [],"__v": 0}

Functionality: update a member
Route: /updateMember/:HRid
Request type: PUT
Parameters: HRid is the ID of the hr member who is updating a member
Example of how to call the route: /updateMember/hr-1
Request body: { "email":"d@guc.edu.eg", "alternativeEmail":"dd@guc.edu.eg", "password":"123456", "salary":12, "type":"TA", "officeLocation":"C1.111", "dayOff":[] }
Response: the member. example of a member: {"password": "$2a$10$jTIt3JSeXGcpKt5KK9QMa.6NZfH0runjkmHmVaQljUvRZcEp5Xxym","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe606d1a7cbb433d4b6870d","id": "ac-4","name": "d","email": "d@guc.edu.eg","alternativeEmail": "dd@guc.edu.eg","salary": 12,"type": "TA","officeLocation": "C1.111","department": "DMET","attendance": [],"__v": 0}

Functionality: delete a member
Route: /deleteMember/:HRid
Request type: DELETE
Parameters: HRid is the ID of the hr member who is deleting a member
Example of how to call the route: /deleteMember/hr-1
Request body: { "email":"d@guc.edu.eg" }
Response: the member. example of a member: {"password": "$2a$10$dYVlhNuU8P.41p14Yt4HUuy1AGT8/t4pmRwvkF63gE38uGM/j3T06","officeLocation": "C1.111","dayOff": ["Friday","Saturday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe5fda481e2d81130763d0a","id": "hr-2","name": "H2","email": "h2@guc.edu.eg","alternativeEmail": "h2@guc.edu.eg","salary": 10,"type": "HR","attendance": [],"__v": 0}

Functionality: manually add a missing sign in
Route: /addSignIn/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is manually adding a missing sign in
Example of how to call the route: /addSignIn/hr-1
Request body: { "email":"aa@guc.edu.eg", "date":"2020-12-24T13:49:32.706Z" }
Response: the member. example of a member: {"password": "$2a$10$jTIt3JSeXGcpKt5KK9QMa.6NZfH0runjkmHmVaQljUvRZcEp5Xxym","dayOff": ["Friday"],"signINs": ["2020-12-24T16:49:32.706Z"],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe5fd6f81e2d81130763cdd","id": "ac-1","name": "AA","email": "aa@guc.edu.eg","alternativeEmail": "aa@guc.edu.eg","salary": 100,"type": "HOD","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0}

Functionality: manually add a missing sign out
Route: /addSignOut/:HRid
Request type: POST
Parameters: HRid is the ID of the hr member who is manually adding a missing sign out
Example of how to call the route: /addSignOut/hr-1
Request body: { "email":"aa@guc.edu.eg", "date":"2020-12-24T18:49:32.706Z" }
Response: the member. example of a member: {"password": "$2a$10$jTIt3JSeXGcpKt5KK9QMa.6NZfH0runjkmHmVaQljUvRZcEp5Xxym","dayOff": ["Friday"],"signINs": ["2020-12-24T16:49:32.706Z"],"signOUTs": ["2020-12-24T18:49:32.706Z"],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe5fd6f81e2d81130763cdd","id": "ac-1","name": "AA","email": "aa@guc.edu.eg","alternativeEmail": "aa@guc.edu.eg","salary": 100,"type": "HOD","officeLocation": "C1.111","department": "CSEN","attendance": [{"_id": "5fe6025fd2857c16305e0f94","date": "2020-12-24T18:49:32.706Z","attended": true}],"__v": 0}

Functionality: view staff attendance
Route: /viewStaffAttendance/:HRid
Request type: GET
Parameters: HRid is the ID of the hr member who is viewing the attendance
Example of how to call the route: /viewStaffAttendance/hr-1
Request body: { "email":"aa@guc.edu.eg" }
Response: the attendance. example of an attendance: [{"_id": "5fe6025fd2857c16305e0f94","date": "2020-12-24T18:49:32.706Z","attended": true}]


Functionality: update salary
Route: /updateSalary/:HRid
Request type: PUT
Parameters: HRid is the ID of the hr member who is updating a salary
Example of how to call the route: /updateSalary/hr-1
Request body: { "email":"ddd@guc.edu.eg", "salary":1 }
Response: the member. example of a member: {"password": "$2a$10$jTIt3JSeXGcpKt5KK9QMa.6NZfH0runjkmHmVaQljUvRZcEp5Xxym","dayOff": ["Friday"],"signINs": ["2020-12-24T16:49:32.706Z"],"signOUTs": ["2020-12-24T18:49:32.706Z"],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe5fd6f81e2d81130763cdd","id": "ac-1","name": "AA","email": "aa@guc.edu.eg","alternativeEmail": "aa@guc.edu.eg","salary": 1,"type": "HOD","officeLocation": "C1.111","department": "CSEN","attendance": [{"_id": "5fe6025fd2857c16305e0f94","date": "2020-12-24T18:49:32.706Z","attended": true}],"__v": 0}

HOD Functionalities 

Functionality: assign a CI to a course
Route: /assignCI/:HODid
Request type: POST
Parameters: HODid is the ID of the HOD who is assigning the CI
Example of how to call the route: /assignCI/ac-1
Request body: { "code":"CSEN704", "email":"b@guc.edu.eg" }
Response: the course. example of a course: {"instructors": ["b@guc.edu.eg"],"TAs": [],"CC": "","_id": "5fe604dad2857c16305e0ff1","id": 1,"code": "CSEN704","name": "ACL","teaching_slots": [{"assigned": "","_id": "5fe604dad2857c16305e0ff2","type": "LAB","day": "Thursday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe604dad2857c16305e0ff3","type": "LAB","day": "Thursday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: delete a CI to a course
Route: /deleteCI/:HODid
Request type: DELETE
Parameters: HODid is the ID of the HOD who is deleting the CI
Example of how to call the route: /deleteCI/ac-1
Request body: { "code":"CSEN704", "email":"b@guc.edu.eg" }
Response: the course. example of a course: {"instructors": [],"TAs": [],"CC": "","_id": "5fe604dad2857c16305e0ff1","id": 1,"code": "CSEN704","name": "ACL","teaching_slots": [{"assigned": "","_id": "5fe604dad2857c16305e0ff2","type": "LAB","day": "Thursday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe604dad2857c16305e0ff3","type": "LAB","day": "Thursday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: update a CI to a course
Route: /updateCI/:HODid
Request type: PUT
Parameters: HODid is the ID of the HOD who is updating the CI
Example of how to call the route: /updateCI/ac-1
Request body: { "oldCode":"CSEN704", "newCode":"CSEN701", "email":"b@guc.edu.eg" }
Response: the course. example of a course: {"instructors": ["b@guc.edu.eg"],"TAs": [],"CC": "","_id": "5fe60794a7cbb433d4b6873a","id": 2,"code": "CSEN701","name": "ES","teaching_slots": [{"assigned": "","_id": "5fe60794a7cbb433d4b6873b","type": "LAB","day": "Monday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe60794a7cbb433d4b6873c","type": "LAB","day": "Monday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: view all the staff in his/her department along with their profiles
Route: /viewAllStaff/:HODCIid
Request type: GET
Parameters: HODCIid is the ID of the HOD or CI who is viewing the staff
Example of how to call the route: /viewAllStaff/ac-1
Response: array of members. example of members: [{"password": "$2a$10$eOb.Tl1TunYHsx3t8luxGOslDLT0I/cEtL9SZ1BX3hgmnFxhIhc0C","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe603bfd2857c16305e0f97","id": "ac-2","name": "b","email": "b@guc.edu.eg","alternativeEmail": "b@guc.edu.eg","salary": 100,"type": "CI","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0},{"password": "$2a$10$SmwReu.8Ya2Wonuf4l2eb.gMDCp.fSSnE7UN1MBqU2sCbRh1XM.zm","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe603e5d2857c16305e0fc4","id": "ac-3","name": "c","email": "c@guc.edu.eg","alternativeEmail": "c@guc.edu.eg","salary": 100,"type": "TA","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0},{"password": "$2a$10$ysNjqZtSmhbqUbZ2Sbyn0usBTs3clLzUUNLa0zQlcbeoyyrx8k/E6","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe606d1a7cbb433d4b6870d","id": "ac-4","name": "d","email": "d@guc.edu.eg","alternativeEmail": "d@guc.edu.eg","salary": 100,"type": "CI","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0}]

Functionality: view all the staff per course along with their profiles
Route: /viewAllStaffCourse/:HODCIid
Request type: GET
Parameters: HODCIid is the ID of the HOD or CI who is viewing the staff
Example of how to call the route: /viewAllStaffCourse/ac-1
Request body: { "code":"CSEN701" }
Response: array of members. example of members: [{"password": "$2a$10$eOb.Tl1TunYHsx3t8luxGOslDLT0I/cEtL9SZ1BX3hgmnFxhIhc0C","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe603bfd2857c16305e0f97","id": "ac-2","name": "b","email": "b@guc.edu.eg","alternativeEmail": "b@guc.edu.eg","salary": 100,"type": "CI","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0}]

Functionality: view the day off of all the staff in his/her department.
Route: /viewAllStaffDayOff/:HODid
Request type: GET
Parameters: HODid is the ID of the HOD who is viewing the staff
Example of how to call the route: /viewAllStaffDayOff/ac-1
Response: array of members. example of members: [{"name": "AA","email": "aa@guc.edu.eg","dayOff": ["Friday"]},{"name": "b","email": "b@guc.edu.eg","dayOff": ["Friday"]},{"name": "c","email": "c@guc.edu.eg","dayOff": ["Friday"]},{"name": "d","email": "d@guc.edu.eg","dayOff": ["Friday"]}]

Functionality: view the day off of a staff in his/her department.
Route: /viewStaffDayOff/:HODid
Request type: GET
Parameters: HODid is the ID of the HOD who is viewing the staff
Example of how to call the route: /viewStaffDayOff/ac-1
Request body: { "email":"c@guc.edu.eg" }
Response: the member dayOff. example of a member dayOff: {"name": "c","email": "c@guc.edu.eg","dayOff": ["Friday"]}

Functionality: view the coverage of each course in his/her department
Route: /viewAllCourseCoverage/:HODid
Request type: GET
Parameters: HODid is the ID of the HOD who is viewing all course's coverage
Example of how to call the route: /viewAllCourseCoverage/ac-1
Response: the message. example of a message: [{"CSEN704": "course coverage is 100%"},{"CSEN701": "course coverage is 0%"}]

Functionality: view teaching assignments (which staff members teach which slots) of course offered by his department
Route: /viewTeachingAssignments/:HODid
Request type: GET
Parameters: HODid is the ID of the HOD who is viewing the teaching assignments
Example of how to call the route: /viewTeachingAssignments/ac-1
Request body: { "code":"CSEN704" }
Response: the teaching slots. example of teaching slots: [{ "assigned": "c@guc.edu.eg", "_id": "5fe0ce3bac08652148dfc471", "type": "LAB", "day": "Thursday", "slot_no": 1, "timing": "8:15-9:45", "location": "C7.204" }, { "assigned": "c@guc.edu.eg", "_id": "5fe0ce3bac08652148dfc472", "type": "LAB", "day": "Thursday", "slot_no": 2, "timing": "10:00-11:30", "location": "C7.204" }]


Course Instructor Functionalities

Functionality: view the coverage of course(s) he/she is assigned to
Route: /viewCourseCoverage/:CIid
Request type: GET
Parameters: CIid is the ID of the CI who is viewing the course's coverage
Example of how to call the route: /viewCourseCoverage/ac-2
Request body: { "code":"CSEN704" }
Response: the message. example of a message: {"msg": "course coverage is 100%"}

Functionality: view the slots' assignment of course(s) he/she is assigned to
Route: /viewSlotsAssignment/:CIid
Request type: GET
Parameters: CIid is the ID of the CI who is viewing the slots' assignment
Example of how to call the route: /viewSlotsAssignment/ac-2
Request body: { "code":"CSEN704" }
Response: the teaching slots. example of teaching slots: [{ "assigned": "c@guc.edu.eg", "_id": "5fe0ce3bac08652148dfc471", "type": "LAB", "day": "Thursday", "slot_no": 1, "timing": "8:15-9:45", "location": "C7.204" }, { "assigned": "c@guc.edu.eg", "_id": "5fe0ce3bac08652148dfc472", "type": "LAB", "day": "Thursday", "slot_no": 2, "timing": "10:00-11:30", "location": "C7.204" }]

Functionality: view all the staff in his/her department along with their profiles
Route: /viewAllStaff/:HODCIid
Request type: GET
Parameters: HODCIid is the ID of the HOD or CI who is viewing the staff
Example of how to call the route: /viewAllStaff/ac-1
Response: array of members. example of members: [{"password": "$2a$10$eOb.Tl1TunYHsx3t8luxGOslDLT0I/cEtL9SZ1BX3hgmnFxhIhc0C","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe603bfd2857c16305e0f97","id": "ac-2","name": "b","email": "b@guc.edu.eg","alternativeEmail": "b@guc.edu.eg","salary": 100,"type": "CI","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0},{"password": "$2a$10$SmwReu.8Ya2Wonuf4l2eb.gMDCp.fSSnE7UN1MBqU2sCbRh1XM.zm","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe603e5d2857c16305e0fc4","id": "ac-3","name": "c","email": "c@guc.edu.eg","alternativeEmail": "c@guc.edu.eg","salary": 100,"type": "TA","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0},{"password": "$2a$10$ysNjqZtSmhbqUbZ2Sbyn0usBTs3clLzUUNLa0zQlcbeoyyrx8k/E6","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe606d1a7cbb433d4b6870d","id": "ac-4","name": "d","email": "d@guc.edu.eg","alternativeEmail": "d@guc.edu.eg","salary": 100,"type": "CI","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0}]

Functionality: view all the staff per course along with their profiles
Route: /viewAllStaffCourse/:HODCIid
Request type: GET
Parameters: HODCIid is the ID of the HOD or CI who is viewing the staff
Example of how to call the route: /viewAllStaffCourse/ac-1
Request body: { "code":"CSEN701" }
Response: array of members. example of members: [{"password": "$2a$10$eOb.Tl1TunYHsx3t8luxGOslDLT0I/cEtL9SZ1BX3hgmnFxhIhc0C","dayOff": ["Friday"],"signINs": [],"signOUTs": [],"leaveBalance": 0,"loggedIn": 0,"_id": "5fe603bfd2857c16305e0f97","id": "ac-2","name": "b","email": "b@guc.edu.eg","alternativeEmail": "b@guc.edu.eg","salary": 100,"type": "CI","officeLocation": "C1.111","department": "CSEN","attendance": [],"__v": 0}]

Functionality: assign a TA to a course
Route: /assignTA/:CIid
Request type: POST
Parameters: CIid is the ID of the CI who is assigning
Example of how to call the route: /assignTA/ac-2
Request body: { "code":"CSEN704", "email":"c@guc.edu.eg" }
Response: the course. example of a course: {"instructors": ["b@guc.edu.eg"],"TAs": ["c@guc.edu.eg"],"CC": "","_id": "5fe60794a7cbb433d4b6873a","id": 2,"code": "CSEN701","name": "ES","teaching_slots": [{"assigned": "","_id": "5fe60794a7cbb433d4b6873b","type": "LAB","day": "Monday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe60794a7cbb433d4b6873c","type": "LAB","day": "Monday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: assign an academic member to an unassigned slots in course(s) he/she is assigned to
Route: /assignMemberCourseSlot/:CIid
Request type: POST
Parameters: CIid is the ID of the CI who is assigning
Example of how to call the route: /assignMemberCourseSlot/ac-2
Request body: { "code":"CSEN701", "email":"c@guc.edu.eg", "type":"LAB", "day":"Monday", "slot_no":1 }
Response: the message. example of a message: {"msg": "Assigned successfully"}

Functionality: assign an academic member to an unassigned slots in course(s) he/she is assigned to
Route: /updateMemberCourseSlot/:CIid
Request type: PUT
Parameters: CIid is the ID of the CI who is updating
Example of how to call the route: /updateMemberCourseSlot/ac-2
Request body: { "code":"CSEN701", "email":"c@guc.edu.eg", "type":"LAB", "day":"Monday", "slot_no":"2" }
Response: the message. example of a message: {"msg": "Assigned successfully"}

Functionality: remove an assigned academic member in course(s) he/she is assigned to
Route: /removeMemberCourse/:CIid
Request type: DELETE
Parameters: CIid is the ID of the CI who is removing a member
Example of how to call the route: /removeMemberCourse/ac-2
Request body: { "code":"CSEN701", "email":"c@guc.edu.eg" }
Response: the course. example of a course: {"instructors": ["b@guc.edu.eg"],"TAs": [],"CC": "","_id": "5fe60794a7cbb433d4b6873a","id": 2,"code": "CSEN701","name": "ES","teaching_slots": [{"assigned": "c@guc.edu.eg","_id": "5fe60794a7cbb433d4b6873b","type": "LAB","day": "Monday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe60794a7cbb433d4b6873c","type": "LAB","day": "Monday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}

Functionality: assign an academic member in each of his/her course(s) to be a course coordinator
Route: /assignCC/:CIid
Request type: POST
Parameters: CIid is the ID of the CI who is assigning a member to be a CC
Example of how to call the route: /assignCC/ac-2
Request body: { "code":"CSEN704", "email":"c@guc.edu.eg" }
Response: the course. example of a course: {"instructors": ["b@guc.edu.eg"],"TAs": ["c@guc.edu.eg"],"CC": "c@guc.edu.eg","_id": "5fe60794a7cbb433d4b6873a","id": 2,"code": "CSEN701","name": "ES","teaching_slots": [{"assigned": "c@guc.edu.eg","_id": "5fe60794a7cbb433d4b6873b","type": "LAB","day": "Monday","slot_no": 1,"timing": "8:15-9:45","location": "C7.204"},{"assigned": "","_id": "5fe60794a7cbb433d4b6873c","type": "LAB","day": "Monday","slot_no": 2,"timing": "10:00-11:30","location": "C7.204"}],"faculty": "MET","department": "CSEN","__v": 0}


Course Coordinator Functionalities


Functionality: add course slot(s) in his/her course
Route: /addCourseSlots/:CCid
Request type: POST
Parameters: CCid is the ID of the CC who is adding a slot(s)
Example of how to call the route: /addCourseSlots/ac-3
Request body: { "code":"CSEN704", "slots":[{"type":"LAB","day":"Thursday","slot_no":"4","timing":"1:45-3:15","location":"C7.204"},{"type":"LAB","day":"Sunday","slot_no":"4","timing":"1:45-3:15","location":"C7.204"}] }
Response: the message. example of a message: {"msg": "Added successfully"}

Functionality: delete course slot(s) in his/her course
Route: /deleteCourseSlots/:CCid
Request type: DELETE
Parameters: CCid is the ID of the CC who is deleting a slot(s)
Example of how to call the route: /deleteCourseSlots/ac-3
Request body: { "code":"CSEN704", "slots":[{"type":"LAB","day":"Thursday","slot_no":"4","timing":"1:45-3:15","location":"C7.204"},{"type":"LAB","day":"Sunday","slot_no":"4","timing":"1:45-3:15","location":"C7.204"}] }
Response: the message. example of a message: {"msg": "Deleted successfully"}

Functionality: update course slot(s) in his/her course
Route: /updateCourseSlots/:CCid
Request type: PUT
Parameters: CCid is the ID of the CC who is updating a slot(s)
Example of how to call the route: /updateCourseSlots/ac-3
Request body: { "code":"CSEN704", "oldSlots":[{"type":"LAB","day":"Thursday","slot_no":"1","timing":"8:15-9:45","location":"C7.204"},{"type":"LAB","day":"Thursday","slot_no":"2","timing":"10:00-11:30","location":"C7.204"}], "newSlots":[{"type":"LAB","day":"Thursday","slot_no":"4","timing":"1:45-3:15","location":"C7.204"},{"type":"LAB","day":"Sunday","slot_no":"4","timing":"1:45-3:15","location":"C7.204"}] }
Response: the message. example of a message: {"msg": "Updated successfully"}


Academic Member Functionalities

Functionality: view schedule
Route: /viewSchedule/:ACid
Request type: GET
Parameters: ACid is the ID of the academic member who is viewing his/her schedule
Example of how to call the route: /viewSchedule/ac-8
Response: the schedule. example of a schedule: [{
        "_id": "5fe503727a0a9920603e3948",
        "day": "Sunday",
        "slots": [
            {"_id": "5fe503727a0a9920603e3949","type": "","slot_no": 1,"timing": "8:15-9:45","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e394a","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e394b","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e394c","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e394d","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]},
    {
        "_id": "5fe503727a0a9920603e394e",
        "day": "Monday",
        "slots": [
            {"_id": "5fe503727a0a9920603e394f","type": "LAB","slot_no": 1,"timing": "8:15-9:45","course": "CSEN702","location": "C7.204"},
            {"_id": "5fe503727a0a9920603e3950","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3951","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3952","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3953","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]},
    {
        "_id": "5fe503727a0a9920603e3954",
        "day": "Tuesday",
        "slots": [
            {"_id": "5fe503727a0a9920603e3955","type": "","slot_no": 1,"timing": "8:15-9:45","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3956","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3957","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3958","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3959","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]},
    {
        "_id": "5fe503727a0a9920603e395a",
        "day": "Wednesday",
        "slots": [
            {"_id": "5fe503727a0a9920603e395b","type": "","slot_no": 1,"timing": "8:15-9:45","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e395c","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e395d","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e395e","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e395f","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]},
    {
        "_id": "5fe503727a0a9920603e3960",
        "day": "Thursday",
        "slots": [
            {"_id": "5fe503727a0a9920603e3961","type": "","slot_no": 1,"timing": "8:15-9:45","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3962","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3963","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3964","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3965","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]},
    {
        "_id": "5fe503727a0a9920603e3966",
        "day": "Friday",
        "slots": [
            {"_id": "5fe503727a0a9920603e3967","type": "","slot_no": 1,"timing": "8:15-9:45","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3968","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3969","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e396a","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e396b","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]},
    {
        "_id": "5fe503727a0a9920603e396c",
        "day": "Saturday",
        "slots": [
            {"_id": "5fe503727a0a9920603e396d","type": "","slot_no": 1,"timing": "8:15-9:45","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e396e","type": "","slot_no": 2,"timing": "10:00-11:30","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e396f","type": "","slot_no": 3,"timing": "11:45-1:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3970","type": "","slot_no": 4,"timing": "1:45-3:15","course": "","location": ""},
            {"_id": "5fe503727a0a9920603e3971","type": "","slot_no": 5,"timing": "3:45-5:15","course": "","location": ""}]}]