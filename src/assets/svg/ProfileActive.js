import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function ProfileActiveComponent(props) {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Ellipse cx={30.5} cy={52.1538} rx={2.5} ry={2.30769} fill="#fff" />
            <Path
                d="M30.305 30.633a5.322 5.322 0 01-5.316-5.317A5.322 5.322 0 0130.305 20a5.322 5.322 0 015.317 5.316 5.323 5.323 0 01-5.317 5.317zm0-8.92a3.608 3.608 0 00-3.603 3.603 3.608 3.608 0 003.603 3.604 3.608 3.608 0 003.604-3.604 3.608 3.608 0 00-3.604-3.603zM33.629 42.212h-6.644a5.322 5.322 0 01-5.316-5.316 5.322 5.322 0 015.316-5.316h6.644a5.322 5.322 0 015.316 5.316 5.322 5.322 0 01-5.316 5.316zm-6.644-8.92a3.608 3.608 0 00-3.604 3.604 3.608 3.608 0 003.604 3.603h6.644a3.608 3.608 0 003.604-3.603 3.608 3.608 0 00-3.604-3.603h-6.644z"
                fill="#fff"
            />
        </Svg>
    )
}

export default ProfileActiveComponent
