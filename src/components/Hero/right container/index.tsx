import * as React from "react";
import './style.scss';
import Fill5 from '../../../assets/svgs/Fill5.svg';

type RightContainerProps = {
    image: {
        url: string,
        title: string
    }
}

function RightContainer({ image }: RightContainerProps) {

    return (
        <div className="right-container">
            <img src={image.url} alt={image.title} />
            <div>
                <Fill5 />
            </div>
        </div>
    );
}

export default RightContainer;