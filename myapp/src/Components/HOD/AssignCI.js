import React, { useState } from 'react';
import './AssignCI.css';
import Header from './Header';
import axios from '../axios';

function AssignCI() {
    const [code, setcode] = useState("");
    const [email, setemail] = useState("");

    const [newCode, setnewCode] = useState("");

    function validateForm() {
        return code.length > 0 && email.length > 0;
    }
    function validateForm1() {
        return code.length > 0 && email.length > 0 && newCode.length > 0;
    }

    async function handleAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/assignCI/' + localStorage.getItem("id"), {
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
                alert("CI Assigned Successfully");
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

    async function handleUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/updateCI/' + localStorage.getItem("id"), {
                // body: {
                "oldCode": code,
                "newCode": newCode,
                "email": email
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("Updated CI Successfully");
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
        setnewCode("");
        setemail("");
    }

    async function handleDeleteSubmit(event) {
        event.preventDefault();
        // axios.delete(URL, {
        //     headers: {
        //       Authorization: authorizationToken
        //     },
        //     data: {
        //       source: source
        //     }
        //   });
        try {
            await axios.delete('/deleteCI/' + localStorage.getItem("id"), {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                },
                data: {
                    "code": code,
                    "email": email
                }
            }).then(res => {
                // console.log(res);
                alert("Deleted Successfully");
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
        <div className="location2">
            <Header />
            <div className="location__add__container2">
                <div className="location__add2">
                    <h1>Assign CI</h1>
                    <form className="location__form2" onSubmit={handleAddSubmit}>
                        <p> Code </p>
                        <input placeholder="Enter course code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <p> Email </p>
                        <input placeholder="Enter member email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> ASSIGN CI </button>
                    </form>
                </div>
            </div>

            <div className="location__update__container2">
                <div className="location__update2">
                    <h1>Update an existing CI</h1>
                    <form className="location__form2" onSubmit={handleUpdateSubmit}>
                        <p> Old Code </p>
                        <input placeholder="Enter old course code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <p> New Code </p>
                        <input placeholder="Enter new course code..." type="text" value={newCode} onChange={(e) => setnewCode(e.target.value)}></input>
                        <p> Email </p>
                        <input placeholder="Enter member email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm1()}> UPDATE </button>
                    </form>
                </div>
            </div>

            <div className="location__delete__container2">
                <div className="location__delete2">
                    <h1>Delete an existing CI</h1>
                    <form className="location__form2" onSubmit={handleDeleteSubmit}>
                        <p> Code </p>
                        <input placeholder="Enter course code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <p> Email </p>
                        <input placeholder="Enter member email..." type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> DELETE </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AssignCI
