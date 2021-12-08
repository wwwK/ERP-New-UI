import React , {useEffect} from 'react'
import './Navbar.css';
// import { a } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = 307.875;
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <div className="navbar-expand-lg " >
    
      {/* <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Web Solutions
      </NavLink> */}
    
    
      {/* <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button> */}
      <div className="row">
      <div className="col-3 navbar-mainbg" id="navbarSupportedContent">            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

        <div className="userInner">
            <img className="userImagesInner" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"/>
        </div>
        <ul>
          <li className="active">
              <a className="text-link" to="/" exact style={{fontSize: "large"}}>
              <i class="fas fa-home"></i> Home
              </a>
            </li>
            <li className="active">
              <a className="text-link" to="/personal" exact style={{fontSize: "large"}}>
              <i class="fas fa-user"></i> Personal Info
              </a>
            </li>
            <li className="active">
              <a className="text-link" to="/privacy" exact style={{fontSize: "large"}}>
              <i class="fas fa-key"></i> Privacy Settings
              </a>
            </li>
            <li className="active">
              <a className="text-link" to="/account" exact style={{fontSize: "large"}}>
              <i class="fas fa-user-circle"></i> Account Settings
              </a>
            </li>
            <li className="active">
              <a className="text-link" to="/help" exact style={{fontSize: "large"}}>
              <i class="fas fa-hands-helping"></i> Help
              </a>
            </li>
        </ul>
      </div>
      <div className="col-8 navbar-mainbgs" id="navbarSupportedContent">
          <h5>Home</h5>
        <div className="text">
        <div className="col-4 mx-1 mb-3">
            {/* <label htmlFor="name" className="form-group">Name</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="name"/> */}
            <div className="User">
                <img className="images" src="https://themes.pixelstrap.com/friendbook/assets/svg/setting/profile.svg"/>
                <h5>Personal Details</h5>
                <p><span>Provide All Personal Detail Settings.</span></p>
            </div>
            <div className="User">
                <img className="images" src="https://themes.pixelstrap.com/friendbook/assets/svg/setting/privacy.svg"/>
                <h5>Privacy Details</h5>
                <p><span>Provide All Personal Detail Settings.</span></p>
            </div> 
        </div>
        <div className="col-4 mx-1 mb-3">
            {/* <label htmlFor="name" className="form-group">Name</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="name"/> */}
          <div className="User">
              <img className="images" src="https://themes.pixelstrap.com/friendbook/assets/svg/setting/account.svg"/>
              <h5>Account</h5>
              <p><span>Provide All Personal Detail Settings.</span></p>
          </div>
          <div className="User">
              <img className="images" src="https://themes.pixelstrap.com/friendbook/assets/svg/setting/notification.svg"/>
              <h5>Notification</h5>
              <p><span>Provide All Personal Detail Settings.</span></p>
          </div>
        </div>

        <div className="col-4 mx-1 mb-3">
        <div className="User">
              <img className="images" src="https://themes.pixelstrap.com/friendbook/assets/svg/setting/help.svg"/>
              <h5>Help</h5>
              <p><span>Provide All Personal Detail Settings.</span></p>
          </div>
          <div className="User">
                <img className="images" src="https://themes.pixelstrap.com/friendbook/assets/svg/setting/story.svg"/>
                <h5>Story</h5>
                <p><span>Provide All Personal Detail Settings.</span></p>
            </div>
        </div>
                            
        
        </div>
      </div>  
      </div>
  </div>
  )
}
export default Navbar;