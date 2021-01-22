import React, { useState, useEffect } from 'react';
import './ViewStaffAttendance.css';
import axios from '../axios';
import Header from './Header';

function ViewStaffAttendance() {
    const [email, setemail] = useState("");
    const [attendance, setattendance] = useState(null);

    useEffect(() => {
        async function fetchAPI() {
            try {
                await axios.get('/viewStaffAttendance/' + localStorage.getItem("id"), {
                    headers: {
                        "x-auth-token": localStorage.getItem("token")
                    },
                    body: {
                        "email": email
                    }
                }).then(res => {
                    setattendance(res.data);
                    // console.log(res);
                }).catch(err => {
                    alert(err.response.data.msg);
                });
            }
            catch (err) {
                alert("DB Server not connected");
            }
        }

        fetchAPI();
    }, [email])


    function validateForm() {
        return email.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();


    }

    return (
        <div className="ViewStaffAttendance">
            <Header />
            <h1>Staff Attendance</h1><br /><br />
            <div className="ViewStaffAttendanceContainer">
                <form className="Form" onSubmit={handleSubmit}>
                    <p> Email </p>
                    <input placeholder="Enter email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                    <br />
                    <button type="submit" disabled={!validateForm()}> VIEW </button>
                </form>

                {attendance &&
                    <div>
                        <h1>Email:</h1>{' '}<p>{email}</p><br />
                        <h1>Attendance:</h1>{' '}<p>{attendance}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ViewStaffAttendance
