import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
    return (
        <h1>Hello New Page</h1>
    )
  }
  
export default IndexPage

export const Head: HeadFC = () => <title>New Home</title>