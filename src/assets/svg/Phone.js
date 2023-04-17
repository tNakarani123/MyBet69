import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PhoneComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_86_4192)">
                <Path
                    d="M24.037 19.074l-3.175-.362a2.488 2.488 0 00-2.05.712l-2.3 2.3a18.807 18.807 0 01-8.237-8.237l2.312-2.313c.538-.537.8-1.287.713-2.05l-.363-3.15A2.502 2.502 0 008.45 3.762H6.287c-1.412 0-2.587 1.175-2.5 2.587.663 10.675 9.2 19.2 19.863 19.863 1.412.087 2.587-1.088 2.587-2.5v-2.163a2.477 2.477 0 00-2.2-2.475z"
                    fill="#323232"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_86_4192">
                    <Path fill="#fff" d="M0 0H30V30H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default PhoneComponent
