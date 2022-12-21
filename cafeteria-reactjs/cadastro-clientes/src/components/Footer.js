import React from 'react';
import { CDBFooter, CDBBox, CDBIcon } from 'cdbreact';
import Button from 'react-bootstrap/Button';

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: '#b0e0e6' }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
            <MDBIcon fab className="fa-twitter" />
            </MDBBtn>
            
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
            <MDBIcon fab className="fa-instagram" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
            <MDBIcon fab className="fa-github" />
            </MDBBtn>
          </section>
        </MDBContainer>


        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: 'rgba(40, 81, 122, 1)' }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/" >
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;