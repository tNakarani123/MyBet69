import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FreeChargeComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_101_5132)">
                <Path
                    d="M37.67 18.804c-.097 10.517-8.467 18.686-19.036 18.583C8.412 37.287.273 28.768.352 18.297.43 8.175 9.022-.034 19.409.075c10.098.091 18.355 8.57 18.26 18.73z"
                    fill="#DF714D"
                />
                <Path
                    d="M20.007 14.33c.437-1.163.531-2.396 1.187-2.885.854-.637 2.154-.677 3.456-1.023l.486-2.33c-3.79-1.196-7.009.404-8.03 3.89-.607 2.072-.607 2.072-2.754 2.519-.1.82-.203 1.658-.322 2.6h2.582l-3.402 6.847 2.43.134-2.23 4.44 7.29-6.924-.107-.264h-2.685c1.576-1.519 2.846-2.858 4.219-4.07.91-.796 1.108-1.746 1.163-2.925l-3.283-.009z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_101_5132">
                    <Path
                        fill="#fff"
                        transform="translate(.352 .074)"
                        d="M0 0H37.3178V37.3148H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default FreeChargeComponent
