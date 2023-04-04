import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EmailComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_8_2156)">
                <Path
                    d="M29.167 5.833H5.833A2.913 2.913 0 002.931 8.75l-.014 17.5a2.925 2.925 0 002.916 2.917h23.334a2.925 2.925 0 002.916-2.917V8.75a2.925 2.925 0 00-2.916-2.917zm-.584 6.198l-10.31 6.446a1.475 1.475 0 01-1.546 0l-10.31-6.446a1.248 1.248 0 01-.584-1.05c0-.977 1.065-1.56 1.896-1.05l9.771 6.11 9.77-6.11c.832-.51 1.897.073 1.897 1.05 0 .423-.219.817-.584 1.05z"
                    fill="#252525"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_8_2156">
                    <Path fill="#fff" d="M0 0H35V35H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default EmailComponent
