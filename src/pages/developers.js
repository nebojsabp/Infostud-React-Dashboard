import React, {useState, useEffect} from 'react';
import './users.css';




const Developers = () => {

const [podaci, setPodaci] = useState([]);

useEffect(() => {
    fetch("http://localhost:8001/users")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        setPodaci(data)
        console.log(data)
    })
}, []);


  return (
<div className='devs-section'>
<div className="table-container overflow-auto-x">
                <div className="search-add">
                    <img src="/img/search-icon.png" alt="" className="search-icon" />
                    <input type="text" placeholder="Search" className="search-field" /> 
                </div>
            <table>
                <tr>                        
                    <th>Avatar</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th className="opt">Options</th>
                </tr>
                {podaci && podaci
                .filter((podatak) => podatak.role == "Developer")
                .map((podatak) => {
                        return (
                            <tr key={podatak.id}>
                                <td><img src={podatak.avatar.image_path}
                                         alt={podatak.avatar.image_alt}/>
                                </td>
                                <td>{podatak.first_name}</td>
                                <td>{podatak.last_name}</td>
                                <td>
                                <div className="options">
                                <a className="edit-user-btn"><img src="/img/edit1.png" alt="" /></a>
                                <a id="myBtn"><img src="/img/eye.png" alt="" className="eye-pad" /></a> 
                                </div>
                                </td>
                            </tr>
                        )
                    }
                )
                }
                
                {/* {podaci && podaci.map((podatak) => {
                        return (
                            <tr key={podatak.id}>
                                <td><img src={podatak.avatar.image_path}
                                         alt={podatak.avatar.image_alt}/>
                                </td>
                                <td>{podatak.first_name}</td>
                                <td>{podatak.last_name}</td>
                                <td>
                                <div className="options">
                                <a className="edit-user-btn"><img src="/img/edit1.png" alt="" /></a>
                                <a id="myBtn"><img src="/img/eye.png" alt="" className="eye-pad" /></a> 
                                </div>
                                </td>
                            </tr>
                        )
                    })} */}
                
                </table>                  
        </div>  


</div>
  )
}

export default Developers;