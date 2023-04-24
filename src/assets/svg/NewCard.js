import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NewCardComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M26.719 4.688H3.28A3.285 3.285 0 000 7.967v14.063a3.285 3.285 0 003.281 3.282H26.72A3.285 3.285 0 0030 22.03V7.97a3.285 3.285 0 00-3.281-3.282zM3.28 6.563H26.72c.775 0 1.406.63 1.406 1.406v1.875H1.875V7.969c0-.776.63-1.407 1.406-1.407zM26.72 23.438H3.28c-.775 0-1.406-.631-1.406-1.407V11.72h26.25V22.03c0 .776-.63 1.407-1.406 1.407z"
                fill="#000"
            />
            <Path
                d="M6.563 20.625h-.938a.938.938 0 01-.938-.938v-.937c0-.518.42-.938.938-.938h.938c.517 0 .937.42.937.938v.938c0 .517-.42.937-.938.937z"
                fill="#000"
            />
        </Svg>
    )
}

export default NewCardComponent