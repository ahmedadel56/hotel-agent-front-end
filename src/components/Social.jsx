import React from 'react';
import { IoLogoTwitter } from 'react-icons/io';
import { FaVimeoV, FaPinterestP } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialGooglePlus } from 'react-icons/ti';

const Social = () => (
  <ul className="icons">
    <li key={1} className="social-icons">
      <button
        type="button"
        className="twitter social-button"
        label="Twitter profile"
      >
        <a
          href="https://twitter.com/jorgeriosr16"
          aria-label="Twitter account"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoTwitter />
        </a>
      </button>
    </li>
    <li key={2} className="social-icons">
      <button
        type="button"
        className="facebook social-button"
        label="facebook profile"
      >
        <a
          href="https://www.linkedin.com/in/jorgeriosr/"
          aria-label="Facebook account"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GrFacebookOption />
        </a>
      </button>
    </li>
    <li key={3} className="social-icons">
      <button
        type="button"
        className="google social-button"
        label="google profile"
      >
        <a
          href="https://angel.co/u/jorge-rios-7"
          aria-label="Google account"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TiSocialGooglePlus />
        </a>
      </button>
    </li>
    <li key={4} className="social-icons">
      <button
        type="button"
        className="vimeo social-button"
        label="Vimeo profile"
      >
        <a
          href="https://github.com/Alexr16"
          aria-label="Vimeo account"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaVimeoV />
        </a>
      </button>
    </li>
    <li key={5} className="social-icons">
      <button
        type="button"
        className="pinterest social-button"
        label="Pinterest profile"
      >
        <a
          href="https://medium.com/@jorge19960316"
          aria-label="Pinterest account"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaPinterestP />
        </a>
      </button>
    </li>
  </ul>
);

export default Social;
