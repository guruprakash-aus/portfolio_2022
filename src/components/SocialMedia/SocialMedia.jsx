import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/guru_prakash' target='_blank' rel='noopener noreferrer'>
        <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/GuruPrakash/' target='_blank' rel='noopener noreferrer'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/guruprakash/' target='_blank' rel='noopener noreferrer'>
        <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
