import React from "react"
import ContentLoader from "react-content-loader"

const TodosLoading = (props) => (
<ContentLoader 
    speed={2}
    width={400}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="2" rx="3" ry="3" width="100%" height="100" /> 
  </ContentLoader>
)

export { TodosLoading }