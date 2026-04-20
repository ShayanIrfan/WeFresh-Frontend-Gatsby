import * as React from "react";
import './style.scss';
import Fill1 from '../../../assets/svgs/Fill1.svg';
import Fill2 from '../../../assets/svgs/Fill2.svg';
import Fill3 from '../../../assets/svgs/Fill3.svg';
import Fill4 from '../../../assets/svgs/Fill4.svg';
import Fill5 from '../../../assets/svgs/Fill5.svg';

function BgFill() {
    return (
        <div className='bgFill'>
            <div className='fill1'>
                <Fill1 />
            </div>
            <div className='fill2'>
                <Fill2 />
            </div>
            <div className='fill3'>
                <Fill3 />
            </div>
            <div className='fill4'>
                <Fill4 />
            </div>
            <div className='fill5'>
                <Fill5 />
            </div>
        </div>
    )
}

export default BgFill;