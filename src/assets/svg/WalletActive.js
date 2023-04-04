import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function WalletActiveComponent(props) {
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
                d="M21.024 25.097L28.12 18l1.848 1.848"
                stroke="#fff"
                strokeWidth={1.2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M24.762 25.053L31.815 18l7.377 7.378-.005.006M18.571 35.873v4.377a1.97 1.97 0 001.97 1.969h17.622a1.969 1.969 0 001.969-1.97v-3.44"
                stroke="#fff"
                strokeWidth={1.2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M40.132 30.507v-3.441a1.969 1.969 0 00-1.97-1.97H20.54a1.969 1.969 0 00-1.969 1.97v4.376"
                stroke="#fff"
                strokeWidth={1.2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M42.1 30.507h-9.943a3.15 3.15 0 000 6.301h9.944v-6.3z"
                stroke="#fff"
                strokeWidth={1.2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M33.142 33.658a.985.985 0 10-1.97 0 .985.985 0 001.97 0z"
                stroke="#fff"
                strokeWidth={1.2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default WalletActiveComponent
