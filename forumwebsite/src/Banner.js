import React from 'react'
import Banner from 'react-banner'
import Headroom from 'react-headroom'
import 'react-banner/dist/style.css'

export default props => {
    return (
         <Headroom>
            <Banner
                logo="My Logo"
                url={ window.location.pathname }
                items={[
                    { "content": "Example Link", "url": "/example" },
                    { "content": "Another", "url": "/another" }
                ]} />
             </Headroom>
    )
}