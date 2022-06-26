import React from 'react';

// const OpenAddUser = (e) => {
//     e.preventDefault();
//     console.log("clicked")
//   };

const Adduser = () => {
  return (
    <div className='new-user'>
    
    <form action="" class="new-user-info">
                    <h1>New User</h1>
                   <div class="add-img">
                        <img src="./img/add-image.png" alt=""  />
                    </div>
                    <input type="text" placeholder="Name:" />
                    <input type="text" placeholder="Last name:" />
                    <input type="text" placeholder="Email:" />
                    <input type="text" placeholder="Phone:" />
                    <input type="text" placeholder="Street:" />
                    <input type="text" placeholder="City:" />
                    <input type="text" placeholder="PTT:" />
                    <input type="text" placeholder="Country:" />
                    <input type="text" placeholder="Password:" />
                    <input type="text" placeholder="Role:" />
                    <input type="text" placeholder="Tekuci Racun:" />
                    <div class="btn-options">
                    <button type="button" class="new-cancel-btn">Cancel</button>
                    <button class="confirm-adduser-btn">Add User</button>
                    </div>
                </form>
  </div>
  )
}

export default Adduser;