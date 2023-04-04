import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function WalletComponent(props) {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                opacity={0.6}
                stroke="#fff"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M23.331 29.339L28.67 24l1.39 1.39" />
                <Path d="M26.144 29.305L31.449 24l5.55 5.55-.005.004M21.486 37.445v3.293c0 .818.663 1.48 1.482 1.48h13.256c.818 0 1.481-.662 1.481-1.48v-2.59" />
                <Path d="M37.705 33.409v-2.59c0-.817-.663-1.48-1.48-1.48H22.966c-.817 0-1.48.663-1.48 1.48v3.293" />
                <Path d="M39.187 33.409h-7.48a2.37 2.37 0 000 4.74h7.48v-4.74z" />
                <Path d="M32.447 35.779a.74.74 0 10-1.481 0 .74.74 0 001.481 0z" />
            </G>
        </Svg>
    )
}

export default WalletComponent
