import React, { useState, useEffect } from 'react';
import './ResetPass.css';
import axios from './axios';
import HeaderHR from './HR/Header';
import HeaderCI from './CI/Header';
import HeaderCC from './CC/Header';

function ResetPass() {
    const [oldpass, setoldpass] = useState("");
    const [newpass, setnewpass] = useState("");
    const [newpasscheck, setnewpasscheck] = useState("");

    const [isHR, setisHR] = useState(false);
    const [isCI, setisCI] = useState(false);
    const [isCC, setisCC] = useState(false);

    const header = () => {
        if(localStorage.getItem("type") === "HR"){
            setisHR(true);
        }
        else if(localStorage.getItem("type") === "CI"){
            setisCI(true);
        }
        else if(localStorage.getItem("type") === "CC"){
            setisCC(true);
        }
    };

    useEffect(() => {
        header();
    }, [isHR, isCI, isCC])



    function validateForm() {
        return oldpass.length > 0 && newpass.length > 0 && newpasscheck > 0;
    }


    async function handleUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/resetPassword/' + localStorage.getItem("id"), {
                // body: {
                "oldPassword": oldpass,
                "newPassword": newpass,
                "newPasswordCheck": newpasscheck
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("Reset Successful");
                // console.log(localStorage.getItem("token"));
            }).catch(err => {
                // console.log(err);
                alert(err.response.data.msg);
            });
        }
        catch (err) {
            alert("DB Server not connected");
        }

        setoldpass("");
        setnewpass("");
        setnewpasscheck("");
    }


    return (
        <div className="location">
            {isHR && <HeaderHR />}
            {isCI && <HeaderCI />}
            {isCC && <HeaderCC />}
            <div className="location__update__container">
                <div className="location__update">
                    <h1>Reset Password</h1>
                    <form className="location__form" onSubmit={handleUpdateSubmit}>
                        <p> Old password </p>
                        <input placeholder="Enter old password..." type="password" value={oldpass} onChange={(e) => setoldpass(e.target.value)}></input>
                        <p> New password </p>
                        <input placeholder="Enter new password..." type="password" value={newpass} onChange={(e) => setnewpass(e.target.value)}></input>
                        <p> Re-enter new password </p>
                        <input placeholder="Enter new password..." type="password" value={newpasscheck} onChange={(e) => setnewpasscheck(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> RESET </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPass
