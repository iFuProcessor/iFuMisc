import RectWithText from '../templates/RectWithText';
import Arrow from '../templates/Arrow';
import ArrowHeadDef from '../templates/ArrowHeadDef';
import BidirectionalArrow from '../templates/BidirectionalArrow';
import Circle from '../templates/Circle';
import Rectangle from '../templates/Rectangle';

const Example = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2880" height="1800">
            <ArrowHeadDef />

            <RectWithText
                id="rect-1" text="矩形1"
                x={ 100 } y={ 100 }
                t_x={ 35 } t_y={ 20 }
                width={ 200 } height={ 200 }
                color={ [248, 206, 204] }
            />

            <RectWithText
                id="rect-2" text="矩形2"
                x={ 300 } y={ 300 }
                t_x={ 165 } t_y={ 20 }
                width={ 200 } height={ 200 }
                color={ [213, 232, 212] }
            />

            <Rectangle
                id="rect-3"
                x={ 700 } y={ 300 }
                rx={ 20 } ry={ 20 }
                width={ 200 } height={ 200 }
                color={ [248, 206, 204] }
            />
            <Rectangle
                id="rect-4"
                x={ 800 } y={ 400 }
                rx={ 20 } ry={ 20 }
                width={ 200 } height={ 200 }
                color={ [225, 213, 231] }
            />

            <Circle id="circle-1" x={ 200 } y={ 200 } r={ 10 } color={ [218, 232, 252] } />
            <Circle id="circle-2" x={ 400 } y={ 400 } r={ 10 } color={ [218, 232, 252] } />

            <BidirectionalArrow
                points={ [[215, 215], [385, 385]] }
                color={ [255, 181, 112] }
            />
            <Arrow
                points={ [[300, 200], [400, 200], [400, 280]] }
                color={ [255, 181, 112] }
            />
            <Arrow
                points={ [[300, 400], [200, 400], [200, 320]] }
                color={ [255, 181, 112] }
            />
        </svg>
    );
}

export default Example;
