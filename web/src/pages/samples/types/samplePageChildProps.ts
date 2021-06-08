import SamplePageChildFC from "../samplePageChildFC"

type SamplePageChildProps = {
    title: string
    isComponent: boolean
    rows: SamplePageChildRow[]
}

type SamplePageChildRow = {
  index: number

}

export function CreateSamplePageChildRow (index: number): SamplePageChildRow {
  let res: SamplePageChildRow = { index }
  return res;
}

export type {SamplePageChildProps, SamplePageChildRow}

