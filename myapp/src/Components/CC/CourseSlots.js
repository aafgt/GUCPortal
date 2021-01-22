import React, { useState } from 'react';
import './CourseSlots.css';
import Header from './Header';
import axios from '../axios';

function CourseSlots() {
    const [code, setcode] = useState("");
    const [oldSlots, setoldSlots] = useState([]);
    const [newSlots, setnewSlots] = useState([]);

    function validateForm() {
        return locName.length > 0 && locType.length > 0 && maxCapacity > 0;
      }

      function validateDelForm() {
        return locName.length > 0;
      }
    

      async function handleAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/addCourseSlots/' + localStorage.getItem("id"), {
                // body: {
                    "code": code,
                    "slots": newSlots
                // }
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res);
                alert("Slots Added Successfully");
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
        setnewSlots([]);
    }

    async function handleUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/updateLocation/' + localStorage.getItem("id"), {
                // body: {
                    "name": locName,
                    "maxCapacity": maxCapacity,
                    "type": locType
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

        setlocName("");
        setmaxCapacity(0);
        setlocType("");
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
            await axios.delete('/deleteLocation/' + localStorage.getItem("id"), {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                },
                data: {
                    "name": locName
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

        setlocName("");
    }

    return (
        <div className="location">
        <Header/>
        <div className="location__add__container">
            <div className="location__add">
                <h1>Add Course slots</h1>
                <form className="location__form" onSubmit={handleAddSubmit}>
                    <p> Code </p>
                    <input placeholder="Enter location..." type="text" value={locName} onChange={(e) => setlocName(e.target.value)}></input>
                    <p> Slots </p>
                    <input placeholder="Enter max. capacity..." type="number" value={maxCapacity} onChange={(e) => setmaxCapacity(e.target.value)}></input>
                    <br />
                    <button type="submit" disabled={!validateForm()}> ADD </button>
                </form>
            </div>
        </div>

        <div className="location__update__container">
            <div className="location__update">
            <h1>Update an existing location</h1>
                <form className="location__form" onSubmit={handleUpdateSubmit}>
                    <p> Name </p>
                    <input placeholder="Enter location..." type="text" value={locName} onChange={(e) => setlocName(e.target.value)}></input>
                    <p> Maximum Capacity </p>
                    <input placeholder="Enter max. capacity..." type="number" value={maxCapacity} onChange={(e) => setmaxCapacity(e.target.value)}></input>
                    <p> Location Type </p>
                    <input placeholder="Enter location..." type="text" value={locType} onChange={(e) => setlocType(e.target.value)}></input>
                    <br />
                    <button type="submit" disabled={!validateForm()}> UPDATE </button>
                </form>
            </div>
        </div>

        <div className="location__delete__container">
            <div className="location__delete">
            <h1>Delete an existing location</h1>
                <form className="location__form" onSubmit={handleDeleteSubmit}>
                    <p> Name </p>
                    <input placeholder="Enter location..." type="text" value={locName} onChange={(e) => setlocName(e.target.value)}></input>
                    <br />
                    <button type="submit" disabled={!validateDelForm()}> DELETE </button>
                </form>
            </div>
        </div>

    </div>
    )
}

export default CourseSlots
