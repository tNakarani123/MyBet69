import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function NotificationComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_8_2394)">
                <Path
                    d="M7.896 4.25l-1.49-1.49c-2.5 1.907-4.145 4.844-4.291 8.178h2.083A8.797 8.797 0 017.896 4.25zm12.906 6.688h2.084a10.926 10.926 0 00-4.292-8.178l-1.48 1.49a8.849 8.849 0 013.688 6.688zm-2.052.52c0-3.198-1.708-5.875-4.687-6.583v-.708A1.56 1.56 0 0012.5 2.604a1.56 1.56 0 00-1.562 1.563v.708c-2.99.708-4.688 3.375-4.688 6.583v5.209L4.167 18.75v1.042h16.666V18.75l-2.083-2.083v-5.209zM12.5 22.917c.146 0 .281-.01.417-.042a2.113 2.113 0 001.5-1.23c.104-.25.156-.52.156-.812h-4.167a2.098 2.098 0 002.094 2.084z"
                    fill="#797979"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_8_2394">
                    <Path fill="#fff" d="M0 0H25V25H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default NotificationComponent
