import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckEmptyComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.458 17.917h-5C1.933 17.917 0 15.983 0 11.458v-5C0 1.933 1.933 0 6.458 0h5c4.525 0 6.459 1.933 6.459 6.458v5c0 4.525-1.934 6.459-6.459 6.459zm-5-16.667c-3.841 0-5.208 1.367-5.208 5.208v5c0 3.842 1.367 5.209 5.208 5.209h5c3.842 0 5.209-1.367 5.209-5.209v-5c0-3.841-1.367-5.208-5.209-5.208h-5z"
                fill="#767676"
            />
        </Svg>
    )
}

export default CheckEmptyComponent
