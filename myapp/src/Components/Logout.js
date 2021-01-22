import React, { useEffect } from 'react';
import axios from './axios';
import { useHistory } from 'react-router-dom';

function Logout() {

    const history = useHistory();

    useEffect(() => {
        async function fetchAPI() {
            try {
                await axios.post('/logout/' + localStorage.getItem("id"), {
                    // body: {

                    // }
                }, {
                    headers: {
                        "x-auth-token": localStorage.getItem("token")
                    }
                }).then(res => {
                    // console.log(res);
                    alert(res.data.msg);
                }).catch(err => {
                    // console.log(err);
                    alert(err.response.data.msg);
                });
            }
            catch (err) {
                alert("DB Server not connected");
            }
    
        }

        fetchAPI();
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("type");
        history.push("/");
    }, [history])

    return (
        <div>
            
        </div>
    )
}

export default Logout
