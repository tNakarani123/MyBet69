import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PhonePayComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_101_5120)">
                <Path
                    d="M23.5 1.191C13.472-1.177 3.426 5.033 1.06 15.058c-2.366 10.025 3.842 20.074 13.866 22.44 10.025 2.366 20.072-3.839 22.44-13.864C39.736 13.61 33.528 3.56 23.5 1.191z"
                    fill="#5F259F"
                />
                <Path
                    d="M27.678 14.477a1.377 1.377 0 00-1.354-1.34h-2.503l-5.73-6.58a2.126 2.126 0 00-2.19-.626l-1.986.626a.46.46 0 00-.21.728l6.26 5.94h-9.482a.496.496 0 00-.516.474v1.088c.012.744.61 1.342 1.354 1.354h1.461v5.005c0 3.75 1.98 5.94 5.315 5.94 1 .03 1.992-.146 2.918-.522v3.34a1.648 1.648 0 001.625 1.668h1.5a.678.678 0 00.626-.626V16.041h2.39a.495.495 0 00.522-.465v-1.099zm-6.68 8.962a4.974 4.974 0 01-2.087.416c-1.668 0-2.5-.832-2.5-2.709v-5.002h4.586v7.295z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_101_5120">
                    <Path
                        fill="#fff"
                        transform="translate(.556 .688)"
                        d="M0 0H37.3148V37.3148H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default PhonePayComponent
