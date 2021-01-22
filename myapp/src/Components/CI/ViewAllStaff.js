import React, { useState, useEffect } from 'react';
import './ViewAllStaff.css';
import axios from '../axios';
import HeaderHOD from '../HOD/Header';
import HeaderCI from './Header';

function ViewAllStaff() {
    const [member, setmember] = useState(null);


    const [isHOD, setisHOD] = useState(false);
    const [isCI, setisCI] = useState(false);

    const header = () => {
        if(localStorage.getItem("type") === "HOD"){
            setisHOD(true);
        }
        else if(localStorage.getItem("type") === "CI"){
            setisCI(true);
        }
    };

    useEffect(() => {
        async function fetchAPI() {
            try {
                await axios.get('/viewAllStaff/' + localStorage.getItem("id"), {
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
        fetchAPI();
    }, [isHOD, isCI])

    return (
        <div className="ViewProfile">
            {isHOD && <HeaderHOD />}
            {isCI && <HeaderCI />}
            <h1>Staff in your department</h1><br /><br />
            {/* {member &&
                <div className="ViewProfileContainer">
                    <h1>Name:</h1>{' '}<p>{member.name}</p><br />
                    <h1>Email:</h1>{' '}<p>{member.email}</p><br />
                    <h1>Alternative Email:</h1>{' '}<p>{member.alternativeEmail}</p><br />
                    <h1>Office Location:</h1>{' '}<p>{member.officeLocation}</p><br />
                    <h1>dayOff:</h1>{' '}<p>{member.dayOff}</p><br />
                    <h1>SignINs:</h1>{' '}<p>{member.signINs}</p><br />
                    <h1>SignOUTs:</h1>{' '}<p>{member.signOUTs}</p><br />
                    <h1>Type:</h1>{' '}<p>{member.type}</p><br />
                    <h1>Attendance:</h1>{' '}<p>{member.attendance}</p>
                    <h1>Leave Balance:</h1>{' '}<p>{member.leaveBalance}</p><br />
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

export default ViewAllStaff
