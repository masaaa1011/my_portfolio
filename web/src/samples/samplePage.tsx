import * as React from "react"
import { CreateSamplePageChildRow, SamplePageChildState } from './types/index'
import SamplePageChildComponent from './samplePageChildComponent'
import SamplePageChildFC from './samplePageChildFC'
import { Range } from '../util/commonFunctions'

const childRows = Range(1, 5).map(m => CreateSamplePageChildRow(m));

const SamplePage: React.FC = () => (
  <>
  <div>sample page</div>
    <SamplePageChildComponent title="component props" isComponent={true} rows={childRows}></SamplePageChildComponent>
    <SamplePageChildFC title="fc porps" isComponent={false} rows={childRows}></SamplePageChildFC>
  </>
)

export default SamplePage
