import React from "react";

interface PageBlockProps {
    emojiPos: number[],
    pageBlockTitle: string,
}

interface PageBlockContainerProps {
    blockTitle: string,
    pageBlocks: {
        emojiPos: number[],
        pageBlockTitle: string,
    }[],
}

const svgStyle = {
    width: "12px",
    height: "12px",
    display: "block",
    fill: "rgba(255, 255, 255, 0.283)",
    transition: "transform 200ms ease-out 0s",
    transform: "rotateZ(-90deg)",
    opacity: "1",
    flexShrink: "0",
    flexGrow: "0",
}

const svgExpandStyle = {
    flexGrow: "0",
    flexShrink: "0",
    width: "12px",
    height: "12px",
    fill: "rgba(255, 255, 255, 0.445)",
    display: "block",
    marginLeft: "5px",
}

const pathSVG = `M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 
    8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 
    3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 
    3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 
    5.78808 8.80274 6.02734 8.80274Z`

export const PageBlock: React.FC<PageBlockProps> = (
    {emojiPos, pageBlockTitle}
) => {
    const emojiBackground = 'url("https://www.notion.so/images/emoji/twitter-emoji-spritesheet-64.d3a69865.png") ' + emojiPos[0] + '% ' + emojiPos[1] + '%  / 6000% 6000%'

    if (pageBlockTitle == "EPN") {
        return (
            <>
                <div style={{width: "10px"}}/>
                <a className={"page-block-container"} rel="noopener noreferrer">
                    <div className={"emoji-container"} style={{background: emojiBackground}}>
                        <img
                            className="notion-emoji"
                            alt={pageBlockTitle}
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                    <div className={"text-container font-semibold"}>
                        {pageBlockTitle}
                    </div>
                    <svg viewBox="-1 -1 9 11" style={svgExpandStyle} className="expand">
                        <path id="path0_stroke"
                              d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"></path>
                    </svg>
                </a>
            </>
        )
    }

    return (
        <>
            <a className={"page-block-container"} rel="noopener noreferrer">
                <div className={"svg-container"}>
                    <svg viewBox="0 0 12 12" style={svgStyle} className="chevronDownRoundedThick">
                        <path
                            d={pathSVG}></path>
                    </svg>
                </div>
                <div className={"emoji-container"} style={{background: emojiBackground}}>
                    <img
                        className="notion-emoji"
                        alt={pageBlockTitle}
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className={"text-container"}>
                    {pageBlockTitle}
                </div>
            </a>
        </>
    )
}

export const PageBlockContainer: React.FC<PageBlockContainerProps> = (
    {blockTitle, pageBlocks}
) => {
    return (
        <div className={"bookmarks-container"}>
            <div className={"bookmarks-header"}>
                <span style={{fontSize: "12px", color: "rgba(255, 255, 255, 0.283)"}} className={"font-bold"}>
                    {blockTitle}
                </span>
            </div>
            {pageBlocks.map((item) => (
                <PageBlock emojiPos={item.emojiPos} pageBlockTitle={item.pageBlockTitle}/>
            ))}
        </div>
    )
}

