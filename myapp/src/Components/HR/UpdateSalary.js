import React, { useState } from 'react';
import './UpdateSalary.css';
import Header from './Header';
import axios from '../axios';

function UpdateSalary() {
    const [email, setemail] = useState("");
    const [salary, setsalary] = useState(0);

    async function handleUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/updateSalary/' + localStorage.getItem("id"), {
                // body: {
                    "email": email,
                    "salary": salary
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("Updated Successfully");
                // console.log(localStorage.getItem("token"));
            }).catch(err => {
                // console.log(err);
                alert(err.response.data.msg);
            });
        }
        catch (err) {
            alert("DB Server not connected");
        }

        setemail("");
        setsalary("");
    }

      function validateForm() {
        return email.length > 0 && salary > 0;
      }

    return (
        <div className="updateSalary">
        <Header/>
            <div className="updateSalary__container">
                <div className="faculty__update">
                    <h1>Update a Salary</h1>
                    <form className="updateSalary__form" onSubmit={handleUpdateSubmit}>
                        <p> Email </p>
                        <input placeholder="Enter member's email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <p> Salary </p>
                        <input placeholder="Enter salary..." type="number" value={salary} onChange={(e) => setsalary(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> UPDATE </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateSalary
