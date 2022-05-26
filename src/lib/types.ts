export type PointType = "DEV" | "DESIGN"

export type FreelanceItem = {
  title: string;
  subtitle?: string;
  text?: string | string[];
  additionalContent?: JSX.Element
  type: PointType;
  year: number;
  yearEnd?: number;

}

export type FreelanceChapter = {
  timeframe: string;
  events: FreelanceItem[]
}

export type IDetailItem = {
  title: string;
  desc: string;
}
