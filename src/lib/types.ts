export type PointType = "DEV" | "DESIGN"

export type FreelanceItem = {
  id:string;
  title: string;
  subtitle?: string;
  text: string[];
  details?: IDetailItem[]
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

export type ValidLanguage = "EN-US" | "DE" | "ES"
