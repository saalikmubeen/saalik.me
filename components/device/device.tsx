import * as rdd from 'react-device-detect'

export default function Device(props: any) {
  return <div className="device-layout-component">{props.children(rdd)}</div>
}
