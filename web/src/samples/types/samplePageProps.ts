type SamplePropsHeader = {
    title: string
    histories: SamplePropsDetail[]
}

type SamplePropsDetail = {
    title: string
    Revision: number
}

export type {SamplePropsHeader, SamplePropsDetail}