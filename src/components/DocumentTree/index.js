import React, { useState } from 'react';
import './index.css';

const DocumentTree = ({treeData = []}) => {
    return (
        <div>
            {treeData.map((singleTree, index) => { 
               return <Tree key={`tree-${index}`} node= {singleTree}/>          
            })}
        </div>
    )
}

const Tree = ({node}) => {
    const [childVisible, setChildVisible] = useState(false);
    const hasChildren = (node && node.children && node.children.length > 0) ? true : false;
    const onParentFolderClick = () => {
        setChildVisible((prevVal) => {
            return !prevVal;
        })  
    }
   
    
    return (
        <ul>
         <li> 
          <div className="tree-container">     
          <div className={ (childVisible) ? "icon-down": (hasChildren) ? "icon" : ""} onClick={onParentFolderClick}>{node && node.title}</div>
          {hasChildren && childVisible && 
            <DocumentTree treeData={node.children}/>
          }
          </div>
          </li>
        </ul>
    )
}

export default DocumentTree
