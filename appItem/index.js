// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props

  const {category, imageUrl, appName, appId} = eachApp

  return (
    <li className="AppListItem">
      <img src={imageUrl} alt={appName} className="appImgPic" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
