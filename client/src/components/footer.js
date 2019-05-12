import React from 'react'

export default class Footer extends React.Component {
  render(){
    return(
      <div class="footer">
        <br/>
        <div class="row">
          <div class="col-lg-4 col-md-4"></div>
          <p class="copyright footer-logo">
            <i class="fa fa-copyright"></i> Homraj Khadka 
            <i class="fa fa-heart text-info"></i>&nbsp; by
            <a href="hom.kdka@gmail.com">
              <strong>E-mail</strong>
            </a>
          </p>
          <div class="col-lg-3 col-md-3">
          </div>
          <div class="col-lg-3 col-md-3"></div>
          <div class="col-lg-3 col-md-3">
          </div>
        </div>
      </div>
    )
  }
}