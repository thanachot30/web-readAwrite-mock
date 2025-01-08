
import icon from '../assets/robot_human.png'

type Props = {
    _width: number,
    _height: number
}
const Icon_robotHuman = (props: Props) => {
    return (
        <img src={icon} alt="Icon" style={{ width: `${props._width}px`, height: `${props._height}px` }} />
    )
}

export default Icon_robotHuman