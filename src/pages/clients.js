import React, {useState, useEffect} from 'react';
import './users.css';

const Clients = () => {

const [podaci, setPodaci] = useState([]);

useEffect(() => {
    fetch("http://localhost:8001/clients")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        setPodaci(data)
        console.log(data)
    })
}, []);

  return (
    <div className='clients-section'>
        <div className="table-container overflow-auto-x">
                <tr>
                    <div class="search-add">
                        <img src="./img/search-icon.png" alt="" className="search-icon" />
                        <input type="text" placeholder="Search" className="search-field" /> 
                        <input type="button" value="Add User" className="add-client-btn" />
                    </div>                    
                </tr>
            <table>
                <tr>                        
                    <th>Avatar</th>
                    <th>Client name</th>
                    <th className="opt">Options</th>
                </tr>
                
                {podaci && podaci.map((podatak) => {
                        return (
                            <tr key={podatak.id}>
                                <td><img src={podatak.avatar} alt=''/></td>
                                <td>{podatak.client_name}</td>
                                <td>
                                <div className="options">
                                <img src="./img/clock.png" alt="" /> 
                                <img src="./img/edit1.png" alt="" /> 
                                <img src="./img/eye-reveal.png" alt="" />
                                <img src="./img/eye-hidden.png" alt="" />
                                <img src="./img/delete1.png" alt="" />
                                <img src="./img/price.png" alt="" />
                                </div>
                                </td>
                            </tr>
                        )
                    })}
                </table>                  
        </div>

    </div>
  )
}

export default Clients;