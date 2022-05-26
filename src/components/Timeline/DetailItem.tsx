import { IDetailItem } from "../../lib/types"

const DetailItem = ({
  title, 
  desc
}:IDetailItem) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{desc}</p>
    </li>
  )
}

export default DetailItem


interface Props {
  // using IDetailItem for props
}