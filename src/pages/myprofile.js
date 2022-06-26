import React from 'react';
import './users.css';

const Myprofile = () => {
  return (
    <div className="page-container overflow-auto-x">
        <div className="profile-view">
                <div className="img-title">
                    <a className="edit-user-btn"><img src="./img/edit1.png" alt="" className="edit-right" /></a>
            
                   <div className="user-img">
                        <img src="./img/profile-img.png" alt="" className="profile-img" />
                    </div>
                    <h1>Lorean 
                        Ipsum</h1>
                    </div>
                    <div className="profile-items">
                        <span><strong>First Name:</strong>Loreta</span>
                        <span><strong>Last Name:</strong> Ipsum</span>
                        <span><strong>Email:</strong> loremipsum@gmail.com</span>
                        <span><strong>Role:</strong> Developer</span>
                        <span><strong>Bank Account:</strong> 5555 4444 3333 2222</span>
                        <span><strong>Status:</strong> Active</span>
                    </div>
                    <div className="btn-options">
                    <button type="button" className="insert-hours-btn">Insert hours</button>
                    <b>This month: 120:16:45</b>
                    <button type="button" className="log-out-btn">Log out</button>
                    </div>
            </div>
            
        {/* TABLE CONTAINER */}
        <div className="profile-table-container">
            <table className='table-profile'>
                <tr>                        
                    <th className='th-profile'>Client</th>
                    <th className='th-profile'>Task</th>
                    <th className='th-profile'>Month</th>
                    <th className='th-profile'>Time</th>
                    <th className="opt th-profile"></th>
                </tr>
                <tr>
                    <td>Lorem Ipsum very long client name</td>
                    <td>Work on lorem ipsuming the pdf on the hmtl channel</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>               
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>               
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>                
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>               
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>               
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>                
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>                
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>                
                </tr>
                <tr>
                    <td>Lorem Ipsum</td>
                    <td>IT Convergence</td>
                    <td>17.11.2021</td>
                    <td>00:45:00</td>
                    <td>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </td>               
                </tr>
                </table>
            </div>
    </div>
  )
}

export default Myprofile;