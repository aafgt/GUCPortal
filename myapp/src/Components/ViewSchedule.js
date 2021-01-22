import React, { useState, useEffect } from 'react';
import './ViewSchedule.css';
import axios from './axios';
import HeaderHR from './HR/Header';
import HeaderCI from './CI/Header';

function ViewSchedule() {
    const [member, setmember] = useState(null);


    const [isHR, setisHR] = useState(false);
    const [isCI, setisCI] = useState(false);

    const header = () => {
        if (localStorage.getItem("type") === "HR") {
            setisHR(true);
        }
        else if (localStorage.getItem("type") === "CI") {
            setisCI(true);
        }
    };



    useEffect(() => {
        async function fetchAPI() {
            try {
                await axios.get('/viewSchedule/' + localStorage.getItem("id"), {
                    headers: {
                        "x-auth-token": localStorage.getItem("token")
                    },
                    body: {

                    }
                }).then(res => {
                    setmember(res.data);
                    // console.log(res);
                }).catch(err => {
                    alert(err.response.data.msg);
                });
            }
            catch (err) {
                alert("DB Server not connected");
            }
        }

        header();
        fetchAPI();
    }, [isHR, isCI])

    return (
        <div className="ViewProfile">
            {isHR && <HeaderHR />}
            {isCI && <HeaderCI />}
            <h1>Your Schedule</h1><br /><br />
            {/* {member &&
            <div className="ViewProfileContainer">
                <h1>ID:</h1>{' '}<p>{member.id}</p><br />
                <h1>Name:</h1>{' '}<p>{member.name}</p><br />
                <h1>Email:</h1>{' '}<p>{member.email}</p><br />
                <h1>Alternative Email:</h1>{' '}<p>{member.alternativeEmail}</p><br />
                <h1>Office Location:</h1>{' '}<p>{member.officeLocation}</p><br />
                <h1>dayOff:</h1>{' '}<p>{member.dayOff}</p><br />
                <h1>Leave Balance:</h1>{' '}<p>{member.leaveBalance}</p><br />
                <h1>Salary:</h1>{' '}<p>{member.salary}</p><br />
                <h1>Type:</h1>{' '}<p>{member.type}</p><br />
                <h1>Attendance:</h1>{' '}<p>{member.attendance}</p>
            </div>
        } */}
            {member &&
                <div className="ViewProfileContainer">
                    <p>{member}</p>
                </div>
            }
        </div>
    )
}

export default ViewSchedule
