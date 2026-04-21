import * as React from "react";
import './style.scss';
import Close from '../../../assets/svgs/Close.svg';

type MobileNavProps = {
  showNav: boolean,
  navEnablerDisablerFunc: () => void,
  list: { content: string }[],
  image: {
    url: string,
    title: string
  },
  signUpBtnTxt: string
}

function MobileNav({ showNav, navEnablerDisablerFunc, list, image, signUpBtnTxt }: MobileNavProps) {

  const signUp = () => {
    navEnablerDisablerFunc();
    // navigate
  }

  return (
    <div className={"mobile-nav" + (showNav ? " navOn" : "")}>
      <div className='flex-space-between first-container'>
        <div>
          <img src={image.url} alt={image.title} />
        </div>
        <div>
          <button onClick={navEnablerDisablerFunc}><Close /></button>
        </div>
      </div>
      <div>
        <ul>
          {list.map((v, i) => <li key={i} onClick={navEnablerDisablerFunc}>{v.content}</li>)}
        </ul>
      </div>
      <div className='btn-div'>
        <button onClick={signUp}>{signUpBtnTxt}</button>
      </div>
    </div>
  );
}

export default MobileNav;