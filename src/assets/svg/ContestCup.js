import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ContestCupComponent(props) {
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
                d="M29.121 2.165h-3.85c.014-.426.022-.855.022-1.286A.879.879 0 0024.414 0H5.586a.879.879 0 00-.88.879c0 .43.009.86.023 1.286H.879a.879.879 0 00-.879.88c0 3.937 1.03 7.653 2.898 10.461 1.847 2.777 4.308 4.37 6.966 4.524a9.02 9.02 0 001.903 1.599v3.906h-1.474a3.236 3.236 0 00-3.232 3.233v1.474h-.063a.879.879 0 000 1.758h16.004a.879.879 0 100-1.758h-.063v-1.474a3.236 3.236 0 00-3.232-3.233h-1.474V19.63a9.018 9.018 0 001.903-1.598c2.658-.155 5.119-1.748 6.966-4.525C28.971 10.698 30 6.982 30 3.044a.879.879 0 00-.879-.879zM4.361 12.533c-1.54-2.317-2.447-5.347-2.585-8.61h3.05c.318 4.011 1.26 7.72 2.731 10.663.235.468.48.911.734 1.328-1.462-.552-2.815-1.706-3.93-3.381zm16.82 14.235v1.474H8.819v-1.474c0-.813.662-1.475 1.475-1.475h9.414c.813 0 1.475.662 1.475 1.475zm-4.706-3.233h-2.95v-3.142c.483.127.976.193 1.475.193.5 0 .992-.066 1.475-.193v3.142zm.544-5.233a.87.87 0 00-.114.057 4.25 4.25 0 01-1.905.47 4.254 4.254 0 01-2.02-.528c-.689-.364-1.355-.915-1.986-1.638a.884.884 0 00-.112-.13c-.626-.744-1.215-1.658-1.753-2.734-1.615-3.23-2.548-7.477-2.654-12.041h17.05c-.106 4.564-1.04 8.811-2.654 12.041-.538 1.076-1.127 1.99-1.753 2.733a.864.864 0 00-.112.132c-.63.723-1.298 1.273-1.987 1.637zm8.62-5.77c-1.115 1.676-2.468 2.83-3.93 3.382.263-.432.508-.875.734-1.328 1.471-2.944 2.413-6.652 2.73-10.663h3.05c-.137 3.263-1.043 6.293-2.584 8.61z"
                fill="#5556CA"
            />
        </Svg>
    )
}

export default ContestCupComponent