import './ProjectItem.css'

const ProjectItem = props => {
  const {projectDetails, clickingthumb} = props
  const {imageUrl, thumbnailUrl} = projectDetails
  const onclickthumb = () => {
    clickingthumb(imageUrl)
  }
  return (
    <li className="li">
      <button className="but" onClick={onclickthumb} type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbimg" />
      </button>
    </li>
  )
}
export default ProjectItem
