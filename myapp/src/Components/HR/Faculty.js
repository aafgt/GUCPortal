import React, { useState } from 'react';
import './Faculty.css';
import Header from './Header';
import axios from '../axios';

function Faculty() {
    const [depName, setdepName] = useState("");
    const [departments, setdepartments] = useState([]);
    const [dep, setdep] = useState("");
    // const [addDepClick, setaddDepClick] = useState(0);
    // const [depAdded, setdepAdded] = useState(0);

    const [oldFacName, setoldFacName] = useState("");
    const [newFacName, setnewFacName] = useState("");


    // async function addDep() {
    //     //event.preventDefault();
    //     setaddDepClick(addDepClick + 1);
    //     console.log(addDepClick);
    //     if (!(addDepClick % 2 === 0)) {
    //         console.log(dep);
    //         await setdepartments([
    //             ...departments,
    //             dep
    //         ]);
    //         await setdep("");
    //         console.log(departments);
    //     }
    //     if (addDepClick % 2 === 0) {
    //         alert("Enter the department again");
    //     }
    // };

    // const addDep = () => {
    //     //event.preventDefault();
    //     setaddDepClick(addDepClick + 1);
    //     console.log(addDepClick);
    //     if (!(addDepClick % 2 === 0)) {
    //         console.log(dep);
    //          setdepartments([
    //             ...departments,
    //             dep
    //         ]);
    //          setdep("");
    //         console.log(departments);
    //     }
    //     if (addDepClick % 2 === 0) {
    //         alert("Enter the department again");
    //     }
    // };

    const addDep = () => {
        // setdepartments(d => [...d,dep]);
        departments.push(dep);
        setdep("");
    };

    // const handleChange = (e) => {
    //     // setdepartments(d => [...d,e.target.value]);
    //     setdep(e.target.value);
    //     console.log(dep);
    // };

    // useEffect(() => {
    //     setdepartments(d => [...d,dep]);
    //     console.log(departments);

    // }, [depAdded])

    async function handleFacAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/addFaculty/' + localStorage.getItem("id"), {
                // body: {
                    "name": depName,
                    "departments": departments
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

        setdepName("");
        setdepartments([]);
    }

    async function handleFacUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/updateFaculty/' + localStorage.getItem("id"), {
                // body: {
                    "oldName": oldFacName,
                    "newName": newFacName
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

        setoldFacName("");
        setnewFacName("");
    }

    async function handleFacDeleteSubmit(event) {
        event.preventDefault();

        try {
            await axios.delete('/deleteFaculty/' + localStorage.getItem("id"), {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                },
                data: {
                    "name": oldFacName
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

        setoldFacName("");
    }

    function validateAddForm() {
        return depName.length > 0;
    }
    function validateUpdateForm() {
        return oldFacName.length > 0 && newFacName.length > 0;
    }
    function validateDeleteForm() {
        return oldFacName.length > 0;
    }

    function validateSubForm() {
        return dep.length > 0;
    }


    const [afacN, setafacN] = useState("");
    const [adepN, setadepN] = useState("");

    const [uOdepN, setuOdepN] = useState("");
    const [uNdepN, setuNdepN] = useState("");

    function validateDepAddForm() {
        return afacN.length > 0 && adepN.length > 0;
    }
    function validateDepUpdateForm() {
        return uOdepN.length > 0 && uNdepN.length > 0;
    }

    async function handleDepAddSubmit(event) {
        event.preventDefault();

        try {
            await axios.post('/addDepartment/' + localStorage.getItem("id"), {
                // body: {
                    "name": afacN,
                    "department": adepN
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

        setafacN("");
        setadepN("");
    }

    async function handleDepUpdateSubmit(event) {
        event.preventDefault();

        try {
            await axios.put('/updateDepartment/' + localStorage.getItem("id"), {
                // body: {
                    "oldDepartment": uOdepN,
                    "newDepartment": uNdepN
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

        setuOdepN("");
        setuNdepN("");
    }

    async function handleDepDeleteSubmit(event) {
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
            await axios.delete('/deleteDepartment/' + localStorage.getItem("id"), {
                headers: {
                    "x-auth-token": localStorage.getItem("token")
                },
                data: {
                    "name": afacN,
                    "department": adepN
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

        setafacN("");
        setadepN("");
    }

    return (
        <div className="faculty">
            <Header />

            <div className="faculty__add__container">
                <div className="faculty__add">
                    <h1>Add new faculty</h1>
                    <form className="faculty__form" onSubmit={handleFacAddSubmit}>
                        <p> Faculty Name </p>
                        <input placeholder="Enter fac. name..." type="text" value={depName} onChange={(e) => setdepName(e.target.value)}></input>
                        <p> Departments </p>
                        <input placeholder="Enter a department..." type="text" value={dep} onChange={(e) => setdep(e.target.value)}></input>
                        {/* <button onClick={addDep} disabled={!validateSubForm()}> ADD Department </button> */}
                        <br />
                        <p>After adding all departments, click here.</p>
                        <button type="submit" disabled={!validateAddForm()}> ADD </button>
                    </form>
                    <button onClick={addDep} disabled={!validateSubForm()}> ADD Department </button>

                </div>
            </div>

            <div className="faculty__update__container">
                <div className="faculty__update">
                    <h1>Update an existing faculty</h1>
                    <form className="faculty__form" onSubmit={handleFacUpdateSubmit}>
                        <p> Old Name </p>
                        <input placeholder="Enter old fac. name..." type="text" value={oldFacName} onChange={(e) => setoldFacName(e.target.value)}></input>
                        <p> New Name </p>
                        <input placeholder="Enter new fac. name..." type="text" value={newFacName} onChange={(e) => setnewFacName(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateUpdateForm()}> UPDATE </button>
                    </form>
                </div>
            </div>

            <div className="faculty__delete__container">
                <div className="faculty__delete">
                    <h1>Delete an existing faculty</h1>
                    <form className="faculty__form" onSubmit={handleFacDeleteSubmit}>
                        <p> Name </p>
                        <input placeholder="Enter old fac. name..." type="text" value={oldFacName} onChange={(e) => setoldFacName(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateDeleteForm()}> DELETE </button>
                    </form>
                </div>
            </div>



            <div className="faculty__add__container">
                <div className="faculty__add">
                    <h1>Add new department</h1>
                    <form className="faculty__form" onSubmit={handleDepAddSubmit}>
                        <p> Faculty Name </p>
                        <input placeholder="Enter fac. name..." type="text" value={afacN} onChange={(e) => setafacN(e.target.value)}></input>
                        <p> Department Name </p>
                        <input placeholder="Enter a department..." type="text" value={adepN} onChange={(e) => setadepN(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateDepAddForm()}> ADD </button>
                    </form>
                </div>
            </div>

            <div className="faculty__update__container">
                <div className="faculty__update">
                    <h1>Update an existing department</h1>
                    <form className="faculty__form" onSubmit={handleDepUpdateSubmit}>
                        <p> Old Department </p>
                        <input placeholder="Enter old dep. name..." type="text" value={uOdepN} onChange={(e) => setuOdepN(e.target.value)}></input>
                        <p> New Department </p>
                        <input placeholder="Enter new dep. name..." type="text" value={uNdepN} onChange={(e) => setuNdepN(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateDepUpdateForm()}> UPDATE </button>
                    </form>
                </div>
            </div>

            <div className="faculty__delete__container">
                <div className="faculty__delete">
                    <h1>Delete an existing department</h1>
                    <form className="faculty__form" onSubmit={handleDepDeleteSubmit}>
                        <p> Faculty Name </p>
                        <input placeholder="Enter fac. name..." type="text" value={afacN} onChange={(e) => setafacN(e.target.value)}></input>
                        <p> Department Name </p>
                        <input placeholder="Enter a department..." type="text" value={adepN} onChange={(e) => setadepN(e.target.value)}></input>
                        <br />
                        <button type="submit" disabled={!validateDepAddForm()}> DELETE </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Faculty
