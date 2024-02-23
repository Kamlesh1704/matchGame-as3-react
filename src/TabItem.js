import './TabItem.css'

const TabItem = props => {
  const {tabDetails, onclickingTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeClass = isActive ? 'active' : 'buttonn'
  const tabbutton = () => {
    onclickingTab(tabId)
  }
  return (
    <li className="lii">
      <button className={`${activeClass}`} onClick={tabbutton} type="button">
        <p className="para">{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
