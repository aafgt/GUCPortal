import React, { useState } from 'react';
import './SlotsAssignment.css';
import Header from './Header';
import axios from '../axios';

function SlotsAssignment() {
    const [code, setcode] = useState("");
    const [res, setres] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await axios.get('/viewSlotsAssignment/' + localStorage.getItem("id"), {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                },
                body: {
                    "code": code
                }
            }).then(res => {
                setres(res.data);
                // console.log(res);
            }).catch(err => {
                alert(err.response.data.msg);
            });
        }
        catch (err) {
            alert("DB Server not connected");
        }

        setcode("");
    }

    function validateForm() {
        return code.length > 0;
    }


    return (
        <div className="faculty">
            <Header />
            <div className="faculty__add__container">
                <div className="faculty__add">
                    <h1>View Slots Assignment</h1>
                    <form className="faculty__form" onSubmit={handleSubmit}>
                        <p> Course Code </p>
                        <input placeholder="Enter course code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> VIEW </button>
                    </form>
                </div>
            </div>
            {code &&
                <div className="ViewProfileContainer">
                    <h1>Slots Assignment:</h1>{' '}<p>{res}</p>
                </div>
            }
        </div>
    )
}

export default SlotsAssignment
