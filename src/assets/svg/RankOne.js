import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RankOneComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.119 2.747c.343.584.721 1.065 1.203 1.375.481.31.997.515 1.512.378-.378-1.547-1.856-2.303-2.715-1.753zM20.453.925c.481.86.584 1.719.447 2.372-.138.653-.55 1.1-1.066 1.203-.343-1.444-.31-3.025.619-3.575zm-2.44 4.194c.137.618.412 1.168.756 1.58.343.413.825.723 1.34.757.069-1.547-1.1-2.612-2.097-2.337zm3.712-.791c.206.894.069 1.719-.275 2.303-.344.584-.825.86-1.34.86.068-1.479.584-2.888 1.615-3.163zm-3.506 3.266c-.035.618.068 1.203.309 1.684.24.481.584.928 1.1 1.066.447-1.479-.378-2.75-1.41-2.75z"
                fill="#000"
            />
            <Path
                d="M22 7.8c-.069.894-.413 1.65-.86 2.097-.48.447-1.03.618-1.512.447C20.041 8.969 20.934 7.8 22 7.8zm-4.262 2.165a3.298 3.298 0 00-.138 1.72c.103.55.344 1.03.79 1.34.791-1.34.344-2.785-.652-3.06z"
                fill="#000"
            />
            <Path
                d="M21.347 11.168c-.275.825-.825 1.479-1.375 1.788-.585.31-1.135.31-1.581.034.756-1.203 1.925-2.13 2.956-1.822zm-4.675.963c-.344.516-.55 1.066-.585 1.616-.034.55.035 1.1.379 1.478 1.168-1.032 1.1-2.578.206-3.094z"
                fill="#000"
            />
            <Path
                d="M19.834 14.228c-.48.722-1.168 1.203-1.821 1.375-.62.172-1.204 0-1.547-.378 1.1-.962 2.44-1.547 3.368-.997zm-4.778-.31a3.644 3.644 0 00-1.03 1.41c-.207.516-.276 1.066-.035 1.547 1.443-.687 1.787-2.2 1.065-2.956zm2.475 2.888c-.687.585-1.478.86-2.13.86-.654 0-1.17-.31-1.41-.756 1.375-.654 2.818-.86 3.54-.104zm-4.537-1.546a4.242 4.242 0 00-1.444 1.1c-.378.446-.619.962-.516 1.478 1.65-.275 2.441-1.65 1.96-2.578z"
                fill="#000"
            />
            <Path
                d="M14.575 18.73c-.825.379-1.719.447-2.406.241-.688-.206-1.1-.619-1.17-1.134 1.617-.24 3.095-.069 3.576.894zM4.88 2.747c-.344.585-.722 1.066-1.203 1.375-.481.31-.997.516-1.512.378.378-1.547 1.856-2.303 2.715-1.753z"
                fill="#000"
            />
            <Path
                d="M1.547.925c-.481.86-.585 1.719-.447 2.372.137.653.55 1.1 1.066 1.203.343-1.444.309-3.025-.62-3.575zm2.44 4.194a3.769 3.769 0 01-.756 1.58c-.344.413-.825.723-1.34.757-.07-1.547 1.1-2.612 2.096-2.337zM.275 4.328C.069 5.222.206 6.047.55 6.63c.344.584.825.86 1.34.86-.068-1.479-.584-2.888-1.615-3.163zM3.78 7.594c.035.618-.069 1.203-.31 1.684-.205.481-.584.928-1.065 1.066-.481-1.479.344-2.75 1.375-2.75z"
                fill="#000"
            />
            <Path
                d="M0 7.8c.069.894.412 1.65.86 2.097.48.447 1.03.618 1.546.447C1.96 8.969 1.066 7.8 0 7.8zm4.263 2.165c.206.585.24 1.17.137 1.72-.103.55-.344 1.03-.79 1.34-.791-1.34-.344-2.785.653-3.06z"
                fill="#000"
            />
            <Path
                d="M.653 11.168c.275.825.825 1.479 1.375 1.788.584.31 1.134.31 1.581.034-.756-1.203-1.925-2.13-2.956-1.822zm4.675.963c.344.516.55 1.066.584 1.616.035.55-.034 1.1-.378 1.478-1.168-1.032-1.1-2.578-.206-3.094zM2.166 14.228c.48.722 1.168 1.203 1.821 1.375.62.172 1.204 0 1.547-.378-1.1-.962-2.44-1.547-3.368-.997zm4.778-.31c.48.413.825.895 1.03 1.41.207.516.276 1.066.035 1.547-1.443-.687-1.787-2.2-1.065-2.956zm-2.475 2.888c.687.585 1.478.86 2.13.86.654 0 1.17-.31 1.41-.756-1.375-.654-2.818-.86-3.54-.104zm4.537-1.546a4.242 4.242 0 011.444 1.1c.378.446.619.962.516 1.478-1.65-.275-2.441-1.65-1.96-2.578z"
                fill="#000"
            />
            <Path
                d="M7.425 18.731c.825.378 1.719.447 2.406.24.688-.205 1.1-.618 1.169-1.134-1.616-.24-3.094-.068-3.575.894zM11 2.094a6 6 0 00-6.016 6.015c0 3.335 2.716 6.016 6.016 6.016s6.016-2.681 6.016-6.016A6 6 0 0011 2.094zm0 10.519a4.533 4.533 0 01-4.537-4.538c0-2.51 2.028-4.503 4.537-4.503 2.51 0 4.537 2.028 4.537 4.503S13.51 12.613 11 12.613z"
                fill="#000"
            />
            <Path d="M10.003 5.875h1.822v4.469h-.962v-3.61h-.86v-.859z" fill="#000" />
        </Svg>
    )
}

export default RankOneComponent
