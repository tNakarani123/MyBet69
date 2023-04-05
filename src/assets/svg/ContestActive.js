import * as React from "react"
import Svg, { Ellipse, G, Path, Defs, ClipPath } from "react-native-svg"

function ContestActiveComponent(props) {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Ellipse cx={30.5} cy={52.1538} rx={2.5} ry={2.30769} fill="#fff" />
            <G clipPath="url(#clip0_13_1093)">
                <Path
                    d="M41.297 19.732h-3.08c.011-.34.017-.684.017-1.029a.703.703 0 00-.703-.703H22.47a.703.703 0 00-.703.703c0 .345.006.688.017 1.03h-3.08a.703.703 0 00-.703.703c0 3.15.823 6.122 2.318 8.37 1.478 2.22 3.447 3.495 5.573 3.619a7.22 7.22 0 001.523 1.278v3.125h-1.18a2.589 2.589 0 00-2.586 2.586v1.18h-.05a.703.703 0 100 1.406h12.803a.703.703 0 100-1.406h-.05v-1.18a2.589 2.589 0 00-2.585-2.586h-1.18v-3.125a7.218 7.218 0 001.523-1.279c2.126-.123 4.095-1.398 5.573-3.619C41.177 26.558 42 23.586 42 20.435a.703.703 0 00-.703-.703zm-19.808 8.294c-1.233-1.853-1.957-4.277-2.068-6.887h2.44c.254 3.209 1.007 6.175 2.185 8.53.187.375.383.729.587 1.063-1.17-.442-2.252-1.365-3.144-2.706zm13.456 11.388v1.18h-9.89v-1.18c0-.65.529-1.18 1.18-1.18h7.53c.651 0 1.18.53 1.18 1.18zm-3.765-2.586h-2.36v-2.514c.387.102.78.155 1.18.155.4 0 .793-.053 1.18-.155v2.514zm.435-4.187a3.401 3.401 0 01-1.615.421 3.402 3.402 0 01-1.616-.421c-.55-.291-1.084-.732-1.589-1.31a.71.71 0 00-.09-.105c-.5-.594-.971-1.326-1.401-2.186-1.293-2.585-2.039-5.982-2.124-9.633h13.64c-.085 3.65-.832 7.049-2.123 9.633-.43.86-.902 1.591-1.403 2.186a.698.698 0 00-.09.105c-.504.579-1.038 1.019-1.589 1.31zm6.896-4.615c-.892 1.34-1.974 2.264-3.144 2.706.21-.346.406-.701.587-1.063 1.178-2.355 1.93-5.321 2.184-8.53h2.44c-.11 2.61-.834 5.034-2.067 6.887z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_13_1093">
                    <Path fill="#fff" transform="translate(18 18)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ContestActiveComponent