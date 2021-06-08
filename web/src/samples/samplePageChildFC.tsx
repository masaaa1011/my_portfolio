import * as React from "react"
import { SamplePageChildProps } from './types/index'


const SamplePageChildFC: React.FC<SamplePageChildProps> = (props) => (
  <>
    <div>{props.title}</div>
    <div>{props.isComponent ? "true" : "false"}</div>
  </>
)

export default SamplePageChildFC
