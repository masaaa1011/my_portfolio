import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { SamplePageChildProps, SamplePageChildState } from './types/index'

// State(画面上にてこのコンポーネントが持つ状態)が必要な時はclassにて定義
class samplePageComponentChild extends React.Component<SamplePageChildProps, SamplePageChildState> {
    constructor(props: SamplePageChildProps) {
        super(props);

    }
}