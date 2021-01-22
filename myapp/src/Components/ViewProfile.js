import React, { useState, useEffect } from 'react';
import './ViewProfile.css';
import axios from './axios';
import HeaderHR from './HR/Header';
import HeaderCI from './CI/Header';
import HeaderHOD from './HOD/Header';


function ViewProfile() {
    const [member, setmember] = useState(null);


    const [isHR, setisHR] = useState(false);
    const [isCI, setisCI] = useState(false);
    const [isHOD, setisHOD] = useState(false);

    const header = () => {
        if(localStorage.getItem("type") === "HR"){
            setisHR(true);
        }
        else if(localStorage.getItem("type") === "CI"){
            setisCI(true);
        }
        else if(localStorage.getItem("type") === "HOD"){
            setisHOD(true);
        }
    };

    

    useEffect(() => {
        async function fetchAPI() {
            try {
                await axios.get('/viewProfile/' + localStorage.getItem("id"), {
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

        // const fetchAPI = async () => {
        //     const mem = await axios.post('/viewProfile/:id', {
        //     }).then(res => {
        //       console.log(res);
        //     }).catch(err => {
        //       alert(err.response.data.msg);
        //     });
        //     setmember(mem);
        // }

        header();
        // console.log(isHR);
        // console.log(isCI);
        fetchAPI();
    }, [isHR, isCI])


    return (
        <div className="ViewProfile">
            {isHR && <HeaderHR />}
            {isCI && <HeaderCI />}
            {isHOD && <HeaderHOD />}
            <h1>Profile</h1><br /><br />
            {member &&
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
            }
        </div>
    )
}

export default ViewProfile
