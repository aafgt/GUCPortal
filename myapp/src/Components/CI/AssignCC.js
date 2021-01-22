import React, { useState } from 'react';
import './AssignCC.css';
import Header from './Header';
import axios from '../axios';

function AssignCC() {
    const [code, setcode] = useState("");
    const [email, setemail] = useState("");

    function validateForm() {
        return code.length > 0 && email.length > 0;
      }

      async function handleAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/assignCC/' + localStorage.getItem("id"), {
                // body: {
                    "code": code,
                    "email": email
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("CC Assigned Successfully");
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
    }

    return (
        <div className="location">
            <Header />
            <div className="location__add__container">
                <div className="location__add">
                    <h1>Assign CC</h1>
                    <form className="location__form" onSubmit={handleAddSubmit}>
                        <p> Code </p>
                        <input placeholder="Enter course code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <p> Email </p>
                        <input placeholder="Enter member email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> ASSIGN CC </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AssignCC
