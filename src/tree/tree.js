import React,{useState} from "react";
const Tree = ({ data = [] }) => {
    return (
      <div >
        <ul >
          {data.map((tree) => (
            <TreeNode node={tree} />
          ))}
        </ul>
      </div>
    );
  };
  
  const TreeNode = ({ node }) => {
    const [childVisible, setChildVisiblity] = useState(false);
  
    const hasChild = node.children ? true : false;
  
    return (
      <li >
        <div onClick={(e) => setChildVisiblity((v) => !v)}>
          {hasChild && (<div></div>)}
          <div >
            <i> </i>
            {node.label}
          </div>
        </div>
  
        {hasChild && childVisible && (
          <div >
            <ul >
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
    );
  };
  
  export default Tree;