import React, { useState } from 'react';
import './StaffMembers.css';
import Header from './Header';
import axios from '../axios';

function StaffMembers() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [salary, setsalary] = useState(0);
    const [type, settype] = useState("");
    const [officeLoc, setofficeLoc] = useState("");
    const [dep, setdep] = useState("");


    function validateAddForm() {
        return name.length > 0 && email.length > 0 && salary > 0 && type.length > 0 && officeLoc.length > 0 && dep.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/addMember/' + localStorage.getItem("id"), {
                // body: {
                    "name": name,
                    "email": email,
                    "salary": salary,
                    "type": type,
                    "officeLocation": officeLoc,
                    "department": dep
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("Added Successfully");
                // console.log(localStorage.getItem("token"));
            }).catch(err => {
                // console.log(err);
                alert(err.response.data.msg);
            });
        }
        catch (err) {
            alert("DB Server not connected");
        }

        setname("");
        setemail("");
        setsalary(0);
        settype("");
        setofficeLoc("");
        setdep("");
    }

    function getStyle() {
        return { display: type === "HR" ? 'none' : '' }
    }

    return (
        <div className="staffMembers">
        <Header/>
            <div className="member__add__container">
                <div className="member__add">
                    <h1>Add new member</h1>
                    <form className="member__form" onSubmit={handleSubmit}>
                        <p> Name </p>
                        <input placeholder="Enter name..." type="text" value={name} onChange={(e) => setname(e.target.value)}></input>
                        <p> Email </p>
                        <input placeholder="Enter email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <p> Salary </p>
                        <input placeholder="Enter salary..." type="text" value={salary} onChange={(e) => setsalary(e.target.value)}></input>
                        <p> Type </p>
                        <input placeholder="Enter type..." type="text" value={type} onChange={(e) => settype(e.target.value)}></input>
                        <p> Office Location </p>
                        <input placeholder="Enter office loc..." type="text" value={officeLoc} onChange={(e) => setofficeLoc(e.target.value)}></input>
                        {/* <div classname="member__form" style={getStyle()}> */}
                            <p style={getStyle()}> Department </p>
                            <input style={getStyle()} placeholder="Enter department..." type="text" value={dep} onChange={(e) => setdep(e.target.value)}></input>
                        {/* </div> */}
                        <br />
                        <button type="submit" disabled={!validateAddForm()}> ADD </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StaffMembers
