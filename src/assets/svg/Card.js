import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CardComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#clip0_92_37928)"
                stroke="#000"
                strokeWidth={0.8}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M23.285 22.535h3.187a.52.52 0 00.52-.52V5.892a.52.52 0 00-.52-.52H7.317M5.497 5.372H1.663a.52.52 0 00-.52.52v16.123c0 .287.233.52.52.52h19.802" />
                <Path d="M7.514 16.99h1.614c.41 0 .743.332.743.743v2.658c0 .086-.07.156-.156.156h-6.24a.156.156 0 01-.156-.156v-2.658c0-.41.332-.743.743-.743h1.614M9.84 12.531v-2.24a.37.37 0 01.074-.219c.44-.59.302-1.443-.211-1.956-.455-.454-1.121-.647-1.763-.644-.859.004-1.798.36-2.332 1.057a.707.707 0 01-.562.278H4.73c-.719 0-1.301.583-1.301 1.302v2.383" />
                <Path d="M7.514 15.581v1.556a.287.287 0 01-.126.236l-.633.429a.284.284 0 01-.32 0l-.633-.428a.287.287 0 01-.126-.237V15.58M8.57 12.447h.97c.323 0 .586.262.586.587v.313a.587.587 0 01-.587.587h-.97M4.62 12.447h-.97a.587.587 0 00-.586.587v.313c0 .324.262.587.586.587h.97" />
                <Path d="M8.57 11.087v2.796a1.894 1.894 0 01-1.895 1.894h-.161a1.894 1.894 0 01-1.894-1.894v-2.018c0-.593.376-1.099.903-1.29.801.27 2.013.477 2.853.346a.168.168 0 01.194.166zM13.665 7.413v1.565a.26.26 0 00.26.26h10.648a.26.26 0 00.26-.26V7.413a.26.26 0 00-.26-.26H13.925a.26.26 0 00-.26.26zM13.665 11.813h5.916M13.665 13.828h5.916M22.375 15.63a2.458 2.458 0 100 4.917 2.458 2.458 0 000-4.917zM22.375 20.547v-1.454M24.658 17.176l-1.59.73M21.68 17.906l-1.589-.73" />
                <Path d="M22.375 17.502a.796.796 0 100 1.592.796.796 0 000-1.593z" />
            </G>
            <Defs>
                <ClipPath id="clip0_92_37928">
                    <Path
                        fill="#fff"
                        transform="translate(.753 .637)"
                        d="M0 0H26.6292V26.6292H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default CardComponent
