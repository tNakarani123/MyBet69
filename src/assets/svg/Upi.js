import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function UpiComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 65 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_92_36547)">
                <Path
                    d="M49.546 18.272h-3.407L50.874.898h3.412l-4.74 17.374zM47.775 1.446c-.233-.334-.597-.5-1.091-.5H27.93l-.924 3.406h17.052l-.995 3.636H26.012l-2.83 10.37h3.413L28.49 11.4h15.336c.493-.003.97-.178 1.352-.495.403-.305.696-.738.832-1.23l1.895-6.957c.15-.527.102-.945-.13-1.272zM21.19 17.184c-.091.334-.288.63-.56.84-.272.21-.605.325-.947.327H2.098a1.211 1.211 0 01-1.072-.496 1.374 1.374 0 01-.149-1.23L5.166.954h3.413L4.747 14.966h13.648L22.227.953h3.412l-4.448 16.23z"
                    fill="#71716F"
                />
                <Path d="M60.178.93l4.313 8.706-9.07 8.706L60.177.93z" fill="#078142" />
                <Path
                    d="M57.147.93l4.313 8.706-9.078 8.706L57.147.93z"
                    fill="#EA7726"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_92_36547">
                    <Path
                        fill="#fff"
                        transform="translate(.775 .898)"
                        d="M0 0H63.7905V17.5111H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default UpiComponent
