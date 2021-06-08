import * as React from "react"
import { SamplePageChildProps, SamplePageChildState } from './types/index'

// State(画面上にてこのコンポーネントが持つ状態)が必要な時はclassにて定義
class SamplePageChildComponent extends React.Component<SamplePageChildProps, SamplePageChildState> {
    constructor(props: SamplePageChildProps) {
        super(props);
        this.state = { title: props.title }
    }

    render() {
      return (
        <>
        <div>
          <div>{this.props.title}</div>
          <div>{this.props.isComponent ? "true" : "false"}</div>
          {this.props.rows.map((source, index) => {
            <p>{source.index} / {index}</p>
          })}
        </div>
        </>
      )
    }
}

export default SamplePageChildComponent
