import Sidebar from "../components/sidebar"
import { IParent } from "../interfaces"
import React from 'react'

export const logo = require('../assets/logo.png')


export const Dashboard: React.FC<IParent> = ({children}) => {
  return (
    <div className="row">
        <div className="col-md-1">
            <Sidebar/>
        </div>
        <div className="col-md-11"> 
            {children}
        </div>
    </div>
  )
}
 