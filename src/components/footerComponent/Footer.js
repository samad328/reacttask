import React from 'react'

import '../footerComponent/footer.scss';
function Footer() {
  return (
   <>
    <footer class="footer">
        <div class="container">
            <div class="row">
            <div class="form">
     <div className='left-message'>
     <textarea rows="5" cols="33">
   
  </textarea>
     </div>

     <div className='right-message'>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
    </div>
                
                <div class="footer-col">
                    <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-youtube"></i></a>
                        </div>
                    
                </div>
            </div>
        </div>
        <div className='coded-by'>
        <p>Coded by @Abdul Samad</p>
        <p>@2023</p>
    </div>
    </footer>

    
   
   </>
  )
}

export default Footer