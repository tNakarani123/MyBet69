import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function NotLinkedComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_92_37775)" fill="#000">
                <Path d="M25.67 24.373H3.616a2.905 2.905 0 01-2.902-2.902V6.382c0-1.6 1.303-2.902 2.902-2.902H25.67c1.6 0 2.901 1.303 2.901 2.902v15.09c0 1.599-1.302 2.901-2.901 2.901zM3.616 4.641c-.96 0-1.74.781-1.74 1.741v15.09c0 .96.78 1.74 1.74 1.74H25.67c.96 0 1.74-.78 1.74-1.74V6.381c0-.96-.78-1.74-1.74-1.74H3.616z" />
                <Path d="M9.42 13.929a2.906 2.906 0 01-2.902-2.902c0-1.6 1.302-2.902 2.902-2.902s2.902 1.302 2.902 2.902-1.303 2.902-2.902 2.902zm0-4.643c-.96 0-1.741.78-1.741 1.74s.78 1.742 1.74 1.742 1.742-.781 1.742-1.741c0-.96-.781-1.741-1.741-1.741zm4.643 10.446a.58.58 0 01-.58-.58v-1.16c0-.96-.782-1.742-1.742-1.742H7.098c-.96 0-1.74.781-1.74 1.741v1.16a.58.58 0 01-1.161 0v-1.16c0-1.6 1.302-2.902 2.901-2.902h4.643c1.6 0 2.902 1.303 2.902 2.902v1.16a.58.58 0 01-.58.581zm10.446-9.286h-6.964a.58.58 0 110-1.16h6.964a.58.58 0 110 1.16zm0 4.643h-6.964a.58.58 0 010-1.16h6.964a.58.58 0 110 1.16zm0 4.643h-6.964a.58.58 0 110-1.16h6.964a.58.58 0 010 1.16z" />
            </G>
            <Defs>
                <ClipPath id="clip0_92_37775">
                    <Path
                        fill="#fff"
                        transform="translate(.714)"
                        d="M0 0H27.8571V27.8571H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default NotLinkedComponent
