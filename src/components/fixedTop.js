import * as React from "react"
import { Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function FixedTop({ data }) {
    const imageBg = getImage(data.imgback)
    const imageTop = getImage(data.imghover)

    return (
        <div className="position-relative heigth-35vh">
            <div className="position-fixed fixed-topbar">
                <GatsbyImage image={imageBg}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt={data.imgbackalt}
                    className="img-bg-top"
                />
                <GatsbyImage image={imageTop}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt={data.imghoveralt}
                    className="img-hover-top"
                />
            </div>

        </div>

    );
}

export default FixedTop;