import React, { useState } from 'react';
import './AssignMemberCourseSlot.css';
import Header from './Header';
import axios from '../axios';

function AssignMemberCourseSlot() {
    const [code, setcode] = useState("");
    const [email, setemail] = useState("");
    const [type, settype] = useState("");
    const [day, setday] = useState("");
    const [slot_no, setslot_no] = useState("");

    function validateForm() {
        return code.length > 0 && email.length > 0 && type.length > 0 && day.length > 0 && slot_no.length > 0;
      }

      async function handleAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/assignMemberCourseSlot/' + localStorage.getItem("id"), {
                // body: {
                    "code": code,
                    "email": email,
                    "type": type,
                    "day": day,
                    "slot_no": slot_no
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("Assigned Successfully");
                // console.log(localStorage.getItem("token"));
            }).catch(err => {
                // console.log(err);
                alert(err.response.data.msg);
            });
        }
        catch (err) {
            alert("DB Server not connected");
        }

        setcode("");
        setemail("");
        settype("");
        setday("");
        setslot_no("");
    }

    return (
        <div className="location">
            <Header />
            <div className="location__add__container">
                <div className="location__add">
                    <h1>Add new course</h1>
                    <form className="location__form" onSubmit={handleAddSubmit}>
                        <p> Code </p>
                        <input placeholder="Enter code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <p> Email </p>
                        <input placeholder="Enter member email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <p> Type </p>
                        <input placeholder="Enter slot type..." type="text" value={type} onChange={(e) => settype(e.target.value)}></input>
                        <p> Day </p>
                        <input placeholder="Enter day..." type="text" value={day} onChange={(e) => setday(e.target.value)}></input>
                        <p> Slot Number </p>
                        <input placeholder="Enter slot number..." type="text" value={slot_no} onChange={(e) => setslot_no(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> ASSIGN </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AssignMemberCourseSlot
