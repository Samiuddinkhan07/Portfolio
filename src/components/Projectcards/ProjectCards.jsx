import React from 'react'

const ProjectCards = ({title,description,icon}) => {
  return (
    <div className="card-project">
      <img src={icon} alt={description} width="200px" />
      <div className="card-body"> 
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCards