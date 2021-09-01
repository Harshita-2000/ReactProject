import React, { useState } from 'react'
import './App.css';

const App = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const jsonData = await fetch("https://reqres.in/api/users?page=1");
        const data = await jsonData.json();
        console.log(data);
        setData(data.data);
    }
    return (
        <>
            <div className="navbar">
                <h1 className="navbar-heading">Harshita Networks</h1>
            </div>
            <div className="card-container">
                {
                    data?(data.map((ele) => {
                        return (
                            <div className="card" key={ele.id}>
                                <div className="card-top">
                                    <img src={ele.avatar} alt="sarwar" className="card-img" />
                                </div>
                                <div className="card-bottom">
                                    <h4>{`${ele.first_name} ${ele.last_name}`}</h4>
                                    <p>{ele.email}</p>
                                </div>
                            </div>
                        )
                    }
                    )):(<button className="navbar-btn" onClick={fetchData}>Get Users</button>)
                }
            </div>
        </>
    )
}

export default App;
