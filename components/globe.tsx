import {
  useState,
  useRef,
  useEffect,
  FunctionComponent,
  MutableRefObject
} from 'react'
import { GlobeMethods, GlobeProps } from 'react-globe.gl'

let Globe: FunctionComponent<
  GlobeProps & { ref?: MutableRefObject<GlobeMethods | undefined> } & {
    controls: any
  }
>
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default

import countryLists from '@data/countries.json'
import { FeatureCollection } from 'geojson'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, [])
  return windowSize
}

const GlobeWrapper = () => {
  const [imageUrl] = useState('/CFCFCF.png')
  const globeRef = useRef<GlobeMethods & { controls: any }>()
  const [countries, setCountries] = useState<FeatureCollection>()
  const { lived, visited } = countryLists
  const [mounted, setMounted] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    // load data
    fetch('/countries.geojson')
      .then((res) => res.json())
      .then(setCountries)
    setMounted(true)
  }, [])

  if (mounted)
    return (
      <Globe
        ref={globeRef}
        width={(size.width > 720 && 720) || size.width - 32}
        height={(size.width > 720 && 720) || size.height / 2}
        backgroundColor={'rgba(0,0,0,0)'}
        globeImageUrl={imageUrl}
        polygonsData={countries?.features.filter(
          // remove antarctica
          ({ properties }) => properties?.ISO_A2 !== 'AQ'
        )}
        polygonAltitude={() => 0.01}
        polygonCapColor={({ properties }: any) => {
          return (
            (lived.includes(properties?.ISO_A2) && 'blue') ||
            (visited.includes(properties?.ISO_A2) && 'green') ||
            'grey'
          )
        }}
        polygonSideColor={() => 'rgba(0, 0, 0, 0.2)'}
        polygonStrokeColor={() => '#111'}
        polygonLabel={({ properties }: any) => `
          <b>${properties?.ADMIN} (${properties?.ISO_A2})</b>
          `}
        rendererConfig={{ preserveDrawingBuffer: true }}
        controls={
          globeRef &&
          globeRef.current &&
          (globeRef.current.controls().autoRotate = true) &&
          (globeRef.current.controls().autoRotateSpeed = 0.5) &&
          (globeRef.current.controls().enableZoom = false) &&
          (globeRef.current.controls().enableDamping = true) &&
          (globeRef.current.controls().dampingFactor = 100)
        }
      />
    )
  return <></>
}

export default GlobeWrapper
