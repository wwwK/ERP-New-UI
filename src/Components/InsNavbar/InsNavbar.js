import React from 'react'
import style from './InsNavbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const InsNavbar = () =>{
    return (        
        <div>
            <div className={`${style.mainnavs} navbar-fixed`}>
                <ul>
                    <li><img className={style.logo} src="https://res.cloudinary.com/sqillionsabhishek/image/upload/c_scale,e_brightness:80,h_100,w_100,x_0/v1638519254/Product_Images/Qviple_yylsr5.jpg"/></li>
                    <li className={style.input}><i className={`fas fa-search ${style.searchIcon}`}></i><input type="text" name="Search" placeholder="Search User"/></li>
                    <li><i className="fas fa-home "></i><p><small>Home</small></p></li>
                    <li><i className="far fa-user-circle "></i><p><small>Finance</small></p></li>
                    <li><i className="fas fa-sms "></i><p><small>Library</small></p></li>
                    <li><i className="fas fa-moon "></i><p><small>Sports/Arts</small></p></li>
                    <li><i className="fas fa-bell "></i><p><small>E-resources</small></p></li>
                    <li><i className="fas fa-bell "></i><p><small>Corridor</small></p></li>

                    <li>
                        <div className="media d-inline-flex">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcULuY9F2Ezt8tDs5L35fj4oq1ezj4ew0hg&usqp=CAU"
                                            className={style.userimg} alt="user"/>
                                        <span className={`${style.availablestats}${style.online}`}></span>
                                    </div>
                                    <div className={style.profile}>
                                        <h4 className={style.userprofile}>Peter Pettigrow</h4>
                                    </div>
                                </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InsNavbar
