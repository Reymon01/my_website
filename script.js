/* Google Font CDN Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  scroll-behavior: smooth;

}

/* Custom Scroll Bar CSS */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #6e93f7;
    border-radius: 12px;
    transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
    background: #00ADB5;
}
/* navbar styling */
nav{
  position: fixed;
  width: 100%;
  padding: 20px 0;
  z-index: 998;
  transition: all 0.3s ease;
  font-family: "Sen", sans-serif;
}
nav.sticky{
  background: #00ADB5;
  padding: 13px 0;
}
nav .navbar{
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
nav .navbar .logo a{
  font-weight: 500;
  font-size: 35px;
  color: #00ADB5;
}
nav.sticky .navbar .logo a{
  color: #fff;
}
nav .navbar .menu{
  display: flex;
  position: relative;
}
nav .navbar .menu li{
  list-style: none;
  margin: 0 8px;
}
.navbar .menu a{
  font-size: 18px;
  font-weight: 500;
  color: #0E2431;
  padding: 6px 0;
  transition: all 0.4s ease;
}
.navbar .menu a:hover{
  color: #00ADB5;
}
nav.sticky .menu a{
  color: #FFF;
}
nav.sticky .menu a:hover{
  color: #0E2431;
}
.navbar .media-icons a{
  color: #00ADB5;
  font-size: 18px;
  margin: 0 6px;
}
nav.sticky .media-icons a{
  color: #FFF;
}

/* Side Navigation Menu Button CSS */
nav .menu-btn,
.navbar .menu .cancel-btn{
  position: absolute;
  color: #fff;
  right: 30px;
  top: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;
}
nav .menu-btn{
  color: #00ADB5;
}
nav.sticky .menu-btn{
  color: #FFF;
}
.navbar .menu .menu-btn{
  color: #fff;
}

/* home section styling */
.home{
  height: 100vh;
  width: 100%;
  background: url("background.png") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: "Sen", sans-serif;
}
.home .home-content{
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home .text-one{
  font-size: 25px;
  color: #0E2431;
}
.home .text-two{
  color: #0E2431;
  font-size: 75px;
  font-weight: 600;
  margin-left: -3px;
}
.home .text-three{
  font-size: 40px;
  margin: 5px 0;
  color: #00ADB5;
}
.home .text-four{
  font-size: 23px;
  margin: 5px 0;
  color: #0E2431;
}
.home .button{
  margin: 14px 0;
}
.home .button button{
  outline: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 25px;
  font-weight: 400;
  background: #00ADB5;
  color: #fff;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.4s ease;
}
.home .button button:hover{
  border-color: #00ADB5;
  background-color: #fff;
  color: #00ADB5;
}

section{
  padding-top: 40px;
}
section .content{
  width: 80%;
  margin: 40px auto;
  font-family: 'Poppins', sans-serif;
}
.about .about-details{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section .title{
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
section .title span{
  color: #0E2431;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;
}
section .title span::before,
section .title span::after{
  content: '';
  position: absolute;
  height: 3px;
  width: 100%;
  background: #00ADB5;
  left: 0;
  bottom: 0;
}
section .title span::after{
  bottom: -7px;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
}
.about .about-details .left{
  width: 45%;
}
.about .left img{
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 12px;
}
.about-details .right{
  width: 55%;
}
section  .topic{
  color: #0E2431;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
}
.about-details .right p{
  text-align: justify;
  color: #0E2431;
}
section .button{
  margin: 16px 0;
}
section .button button{
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 25px;
  font-weight: 400;
  background: #00ADB5;
  color: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.4s ease;
}
section .button button:hover{
  border-color: #00ADB5;
  background-color: #fff;
  color: #00ADB5;
}

 /* My Skills CSS */
 .skills{
   background: #F0F8FF;
 }
 .skills .content{
   padding: 40px 0;
 }
 .skills .skills-details{
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .skills-details .text{
   width: 50%;
 }
 .skills-details p{
   color: #0E2431;
   text-align: justify;
 }
.skills .skills-details .experience{
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.skills-details .experience .num{
  color: #0E2431;
  font-size: 80px;
}
.skills-details .experience .exp{
  color: #0E2431;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  margin: 0 6px;
}
.skills-details .boxes{
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skills-details .box{
  width: calc(100% / 2 - 20px);
  margin: 20px 0;
}
.skills-details .boxes .topic{
  font-size: 20px;
  color: #00ADB5;
}
.skills-details .boxes .per{
  font-size: 60px;
  color: #00ADB5;
}

/* My Services CSS */
.services .boxes{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.services .boxes .box{
  margin: 20px 0;
  width: calc(100% / 3 - 20px);
  text-align: center;
  border-radius: 12px;
  padding: 30px 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  cursor: default;
  transition: all 0.4s ease;
}
.services .boxes .box:hover{
  background: #00ADB5;
  color: #fff;
}
.services .boxes .box .icon{
  height: 50px;
  width: 50px;
  background: #00ADB5;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  margin: 0 auto 10px auto;
  transition: all 0.4s ease;
}
.boxes .box:hover .icon{
  background-color: #fff;
  color: #00ADB5;
}
.services .boxes .box:hover .topic,
.services .boxes .box:hover p{
  color: #0E2431;
  transition: all 0.4s ease;
}
.services .boxes .box:hover .topic,
.services .boxes .box:hover p{
  color: #fff;
}
/* Contact Me CSS */
.contact{
  background: #F0F8FF;
}
.contact .content{
  margin: 0 auto;
  padding: 30px 0;
}
.contact .text{
  width: 80%;
  text-align: center;
  margin: auto;
}

/* Footer CSS */
footer{
  background: #00ADB5;
  padding: 15px 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
footer .text span{
  font-size: 17px;
  font-weight: 400;
  color: #fff;
}
footer .text span a{
  font-weight: 500;
  color: #FFF;
}
footer .text span a:hover{
  text-decoration: underline;
}
/* Scroll TO Top Button CSS */
.scroll-button a{
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  background: #00ADB5;
  padding: 7px 12px;;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15);
  display: none;
}

/* Responsive Media Query */
@media (max-width: 1190px) {
  section .content{
    width: 85%;
  }
}
@media (max-width: 1000px) {
  .about .about-details{
    justify-content: center;
    flex-direction: column;
  }
  .about .about-details .left{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .about-details .right{
    width: 90%;
    margin: 40px 0;
  }
  .services .boxes .box{
    margin: 20px 0;
    width: calc(100% / 2 - 20px);
  }
}
@media (max-width: 900px) {
  .about .left img{
    height: 350px;
    width: 350px;
  }
}

@media (max-width: 750px) {
  nav .navbar{
    width: 90%;
  }
  nav .navbar .menu{
    position: fixed;
    left: -100%;
    top: 0;
    background: #0E2431;
    height: 100vh;
    max-width: 400px;
    width: 100%;
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
  .navbar.active .menu{
    left: 0;
  }
  nav .navbar .menu a{
    font-size: 23px;
    display: block;
    color: #fff;
    margin: 10px 0;
  }
  nav.sticky .menu a:hover{
    color: #00ADB5;
  }
  nav .navbar .media-icons{
    display: none;
  }
  nav .menu-btn,
  .navbar .menu .cancel-btn{
    display: block;
  }
  .home .text-two{
    font-size: 65px;
  }
  .home .text-three{
    font-size: 35px;
  }
  .skills .skills-details{
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .skills-details .text{
    width: 100%;
    margin-bottom: 50px;
  }
  .skills-details .boxes{
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .services .boxes .box{
    margin: 20px 0;
    width: 100%;
  }
  .contact .text{
    width: 100%;
}
}

@media (max-width: 500px){
  .home .text-two{
    font-size: 55px;
  }
  .home .text-three{
    font-size: 33px;
  }
  .skills-details .boxes .per{
    font-size: 50px;
    color: #00ADB5;
  }
}

/* custom cursor */
.custom-cursor {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  pointer-events: none; /* Prevent cursor from blocking interactions */
  transform: translate(-50%, -50%); /* To center the div */
  z-index: 9999;
  transition: transform 0.5s ease-out; /* Slight animation smoothing */
}
