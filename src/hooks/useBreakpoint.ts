import { throttle } from 'lodash'
import { useEffect, useState } from 'react'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg'

// This function returns the current breakpoint based on the window width in pixels
const getBreakpointByPixels = (width: number): Breakpoint => {
  if (width < 320) {
    return 'xs'
  } else if (width >= 320 && width < 720) {
    return 'sm'
  } else if (width >= 720 && width < 1024) {
    return 'md'
  } else if (width >= 1024) {
    return 'lg'
  } else return 'lg'
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => getBreakpointByPixels(window.innerWidth))

  useEffect(() => {
    // This function is throttled to prevent performance issues
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getBreakpointByPixels(window.innerWidth))
    }, 200)
    // Add event listener to dom to listen for resize events
    window.addEventListener('resize', calcInnerWidth)
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return breakpoint
}
