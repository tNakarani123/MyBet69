import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LinkedComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.929 9.867H5.357c-.96 0-1.74.781-1.74 1.741v4.643c0 .96.78 1.741 1.74 1.741H23.93c.96 0 1.74-.781 1.74-1.74v-4.644c0-.96-.78-1.74-1.74-1.74zm.58 6.384a.58.58 0 01-.58.58H5.357a.58.58 0 01-.58-.58v-4.643a.58.58 0 01.58-.58H23.93a.58.58 0 01.58.58v4.643zm-8.125-2.321a.58.58 0 11-1.161 0 .58.58 0 011.161 0zm-2.321 0a.58.58 0 11-1.162 0 .58.58 0 011.162 0zm-2.322 0a.58.58 0 11-1.16 0 .58.58 0 011.16 0zm-2.321 0a.58.58 0 11-1.161 0 .58.58 0 011.16 0zm9.286 0a.58.58 0 11-1.161 0 .58.58 0 011.16 0zm2.32 0a.58.58 0 11-1.16 0 .58.58 0 011.16 0zm0 5.803h1.162v3.482c0 1.6-1.303 2.902-2.902 2.902H10a2.905 2.905 0 01-2.902-2.902v-3.482H8.26v3.482c0 .96.781 1.741 1.741 1.741h9.286c.96 0 1.74-.78 1.74-1.74v-3.483zM8.26 8.126H7.1V4.644c0-1.6 1.302-2.902 2.901-2.902h9.286c1.6 0 2.902 1.303 2.902 2.902v3.482h-1.161V4.644c0-.96-.781-1.741-1.741-1.741H10c-.96 0-1.74.781-1.74 1.741v3.482z"
                fill="#000"
            />
        </Svg>
    )
}

export default LinkedComponent
