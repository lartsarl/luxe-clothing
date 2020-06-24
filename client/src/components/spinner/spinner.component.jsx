import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles'

const spinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    ) : (<WrappedComponent {...otherProps}></WrappedComponent>)
}

export default spinner;