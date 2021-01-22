import React, { useState } from 'react';
import './Courses.css';
import Header from './Header';
import axios from '../axios';

function Courses() {
    const [code, setcode] = useState("");
    const [name, setname] = useState("");
    const [teaching_slots, setteaching_slots] = useState([]);
    const [faculty, setfaculty] = useState("");
    const [dep, setdep] = useState("");

    const [tSlotType, settSlotType] = useState("");
    const [tSlotDay, settSlotDay] = useState("");
    const [tSlotSlotN, settSlotSlotN] = useState("");
    const [tSlotTiming, settSlotTiming] = useState("");
    const [tSlotLoc, settSlotLoc] = useState("");

    const addDep = () => {
        const s = {"type":tSlotType, "day":tSlotDay, "slot_no":tSlotSlotN, "timing":tSlotTiming, "location":tSlotLoc};
        teaching_slots.push(s);
        settSlotType("");
        settSlotDay("");
        settSlotSlotN("");
        settSlotTiming("");
        settSlotLoc("");
    };

    function validateSubForm() {
        return tSlotType.length > 0 && tSlotDay.length > 0 && tSlotSlotN.length > 0 && tSlotTiming.length > 0 && tSlotLoc.length > 0;
    }

    function validateForm() {
        return code.length > 0 && name.length > 0 && faculty.length > 0 && dep.length > 0;
      }

      function validateDelForm() {
        return code.length > 0;
      }

      async function handleAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/addCourse/' + localStorage.getItem("id"), {
                // body: {
                    "code": code,
                    "name": name,
                    "teaching_slots": teaching_slots,
                    "faculty": faculty,
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

        setcode("");
        setname("");
        setteaching_slots([]);
        setfaculty("");
        setdep("");
    }

    async function handleUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/updateCourse/' + localStorage.getItem("id"), {
                // body: {
                    "code": code,
                    "name": name,
                    "teaching_slots": teaching_slots,
                    "faculty": faculty,
                    "department": dep
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

        setcode("");
        setname("");
        setteaching_slots("");
        setfaculty("");
        setdep("");
    }

    async function handleDeleteSubmit(event) {
        event.preventDefault();

        try {
            await axios.delete('/deleteCourse/' + localStorage.getItem("id"), {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                },
                data: {
                    "code": code
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
                        <p> Name </p>
                        <input placeholder="Enter name..." type="text" value={name} onChange={(e) => setname(e.target.value)}></input>

                        <p> Faculty </p>
                        <input placeholder="Enter faculty..." type="text" value={faculty} onChange={(e) => setfaculty(e.target.value)}></input>
                        <p> Department </p>
                        <input placeholder="Enter faculty..." type="text" value={dep} onChange={(e) => setdep(e.target.value)}></input>

                        <br /><br /><br /><h2>ADD TEACHING SLOT</h2>
                        <p> Slot Type </p>
                        <input placeholder="Enter slot type..." type="text" value={tSlotType} onChange={(e) => settSlotType(e.target.value)}></input>
                        <p> Slot Day </p>
                        <input placeholder="Enter slot day..." type="text" value={tSlotDay} onChange={(e) => settSlotDay(e.target.value)}></input>
                        <p> Slot Number </p>
                        <input placeholder="Enter slot number..." type="number" value={tSlotSlotN} onChange={(e) => settSlotSlotN(e.target.value)}></input>
                        <p> Slot Timing </p>
                        <input placeholder="Enter slot timing..." type="text" value={tSlotTiming} onChange={(e) => settSlotTiming(e.target.value)}></input>
                        <p> Slot Location </p>
                        <input placeholder="Enter slot location..." type="text" value={tSlotLoc} onChange={(e) => settSlotLoc(e.target.value)}></input>
                        <br />
                        <p>After adding all Teaching Slots, click here.</p>
                        <button type="submit" disabled={!validateForm()}> ADD COURSE </button>
                    </form>
                    <button onClick={addDep} disabled={!validateSubForm()}> ADD Teaching Slot </button>
                </div>
            </div>

            <div className="location__update__container">
                <div className="location__update">
                    <h1>Update an existing course</h1>
                    <form className="location__form" onSubmit={handleUpdateSubmit}>
                        <p> Code </p>
                        <input placeholder="Enter code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <p> Name </p>
                        <input placeholder="Enter name..." type="text" value={name} onChange={(e) => setname(e.target.value)}></input>
                        {/* <p> Teaching Slots </p>
                        <input placeholder="Enter teaching slots..." type="text" value={teaching_slots} onChange={(e) => setteaching_slots(e.target.value)}></input> */}
                        <p> Faculty </p>
                        <input placeholder="Enter faculty..." type="text" value={faculty} onChange={(e) => setfaculty(e.target.value)}></input>
                        <p> Department </p>
                        <input placeholder="Enter faculty..." type="text" value={dep} onChange={(e) => setdep(e.target.value)}></input>

                        <br /><br /><br /><h2>ADD TEACHING SLOT (enter old slot then new slot [can enter several slots])</h2>
                        <p> Slot Type </p>
                        <input placeholder="Enter slot type..." type="text" value={tSlotType} onChange={(e) => settSlotType(e.target.value)}></input>
                        <p> Slot Day </p>
                        <input placeholder="Enter slot day..." type="text" value={tSlotDay} onChange={(e) => settSlotDay(e.target.value)}></input>
                        <p> Slot Number </p>
                        <input placeholder="Enter slot number..." type="number" value={tSlotSlotN} onChange={(e) => settSlotSlotN(e.target.value)}></input>
                        <p> Slot Timing </p>
                        <input placeholder="Enter slot timing..." type="text" value={tSlotTiming} onChange={(e) => settSlotTiming(e.target.value)}></input>
                        <p> Slot Location </p>
                        <input placeholder="Enter slot location..." type="text" value={tSlotLoc} onChange={(e) => settSlotLoc(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateForm()}> UPDATE </button>
                    </form>
                    <button onClick={addDep} disabled={!validateSubForm()}> ADD Teaching Slot </button>
                </div>
            </div>

            <div className="location__delete__container">
                <div className="location__delete">
                    <h1>Delete an existing course</h1>
                    <form className="location__form" onSubmit={handleDeleteSubmit}>
                        <p> Code </p>
                        <input placeholder="Enter code..." type="text" value={code} onChange={(e) => setcode(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateDelForm()}> DELETE </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Courses
