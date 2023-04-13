import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

function ContestCodeComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_49_15427)">
                <G clipPath="url(#clip1_49_15427)" fill="#fff">
                    <Path d="M29.501 12.404a.865.865 0 00.865-.866V6.923a.865.865 0 00-.865-.865H1.231a.865.865 0 00-.865.865v4.615c0 .478.388.866.866.866A2.6 2.6 0 013.828 15a2.6 2.6 0 01-2.596 2.596.865.865 0 00-.866.865v4.616c0 .478.388.865.866.865h28.27a.865.865 0 00.864-.865V18.46a.865.865 0 00-.865-.865A2.6 2.6 0 0126.905 15a2.6 2.6 0 012.596-2.596zm-.865 6.836v2.971H10.463v-2.596a.865.865 0 10-1.731 0v2.596H2.097V19.24A4.335 4.335 0 005.56 15a4.335 4.335 0 00-3.462-4.24V7.788h6.635v2.596a.865.865 0 101.73 0V7.788h18.174v2.972A4.335 4.335 0 0025.174 15c0 2.09 1.49 3.838 3.462 4.24z" />
                    <Path d="M9.597 12.98a.865.865 0 00-.865.866v2.308a.865.865 0 001.73 0v-2.308a.865.865 0 00-.865-.866z" />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_49_15427">
                    <Rect x={0.366455} width={31.5721} height={30} rx={10} fill="#fff" />
                </ClipPath>
                <ClipPath id="clip1_49_15427">
                    <Path fill="#fff" transform="translate(.366)" d="M0 0H30V30H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ContestCodeComponent