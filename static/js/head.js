class TheHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="../static/css2/header.css">
        <div class="header-top">
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo">
                    <a href="index.html"><img src="/static/images/sc2.jpeg" alt="#" width=10% /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-10 col-lg-8 col-md-8 col-sm-9">

               <div class="menu-area">
                <div class="limit-box">
                  <nav class="main-menu ">
                    <ul class="menu-area-main">
                      <li> <a href="/">Home</a></li>
                      <li> <a href="#">Why Shortcut</a> </li>
                      <li> <a href="#">Features</a> </li>
                      <li> <a href="#">Profile</a> </li>
                      <li> <a href="/logout">Logout</a> </li>
                     </ul>
                   </nav>
                 </div>
               </div>
              </div>
           </div>
         </div>
       </div>
     </div>
        `
    }
}

customElements.define('the-header' , TheHeader)