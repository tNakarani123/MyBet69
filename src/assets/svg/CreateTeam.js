import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CreateTeamComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.834 15.417c0 .655.157 1.3.458 1.881a.274.274 0 01-.236.41h-6.64c-2.098 0-3.208-1.1-3.208-3.19 0-2.337 1.32-5.06 5.042-5.06h3.667a4.807 4.807 0 013.882 1.614.275.275 0 01-.146.428 4.113 4.113 0 00-2.82 3.917zM7.092 7.625a3.667 3.667 0 100-7.333 3.667 3.667 0 000 7.333zm9.158 7.104h-1.146v-1.145a.688.688 0 10-1.375 0v1.146h-1.145a.687.687 0 100 1.375h1.145v1.145a.688.688 0 001.375 0v-1.145h1.146a.687.687 0 100-1.376z"
                fill="#fff"
            />
        </Svg>
    )
}

export default CreateTeamComponent
