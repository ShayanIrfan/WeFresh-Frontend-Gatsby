import * as React from "react";
import './style.scss';

type DesktopNavProps = {
  list: { content: string }[],
}

function DesktopNav({ list }: DesktopNavProps) {
  return (
    <div className="desktop-nav">
      <div>
        <ul className='flex-space-around'>
          {list.map((v, i) => <li key={i}>{v.content}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default DesktopNav;