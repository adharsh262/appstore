// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, isTabClicked, isActive} = props
  const {displayText, tabId} = eachTab

  const isButtonClicked = () => {
    isTabClicked(tabId)
  }

  const activeTab = isActive ? 'addStyleToActive-Btn' : ''

  return (
    <li className="TabItem">
      <button
        className={`btnEL ${activeTab}`}
        type="button"
        onClick={isButtonClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
