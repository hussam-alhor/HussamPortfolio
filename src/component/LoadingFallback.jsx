import React from 'react'
import { PropagateLoader } from 'react-spinners'

const LoadingFallback = ({ height = "100vh" }) => (
  <div 
    style={{ 
      height, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}
  >
    <PropagateLoader
                color={"white"}
                loading={true}
                // cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
  </div>
)

export default LoadingFallback