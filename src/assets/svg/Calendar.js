import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M21.188 1.875h-1.125V0h-1.875v1.875H5.813V0H3.938v1.875H2.812A2.816 2.816 0 000 4.688v16.5A2.816 2.816 0 002.813 24h18.375A2.816 2.816 0 0024 21.187v-16.5a2.816 2.816 0 00-2.813-2.812zm.937 19.313c0 .516-.42.937-.938.937H2.813a.939.939 0 01-.937-.938V8.813h20.25v12.376zm0-14.25H1.875v-2.25c0-.517.42-.938.938-.938h1.124v1.875h1.876V3.75h12.375v1.875h1.875V3.75h1.125c.516 0 .937.42.937.938v2.25z"
                fill="#000"
            />
            <Path
                d="M5.438 10.781H3.563v1.875h1.874v-1.875zM9.188 10.781H7.312v1.875h1.875v-1.875zM12.938 10.781h-1.876v1.875h1.876v-1.875zM16.688 10.781h-1.875v1.875h1.874v-1.875zM20.438 10.781h-1.875v1.875h1.875v-1.875zM5.438 14.531H3.563v1.875h1.874v-1.875zM9.188 14.531H7.312v1.875h1.875v-1.875zM12.938 14.531h-1.876v1.875h1.876v-1.875zM16.688 14.531h-1.875v1.875h1.874v-1.875zM5.438 18.281H3.563v1.875h1.874v-1.875zM9.188 18.281H7.312v1.875h1.875v-1.875zM12.938 18.281h-1.876v1.875h1.876v-1.875zM16.688 18.281h-1.875v1.875h1.874v-1.875zM20.438 14.531h-1.875v1.875h1.875v-1.875z"
                fill="#000"
            />
        </Svg>
    )
}

export default CalendarComponent
