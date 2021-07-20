import React, {Component} from 'react';
// css
// https://codepen.io/ross-angus/pen/jwxMjL
class CustomTreeNode3 extends Component {
    render() {

        const { treeData } = this.props;

        return (
            <li>
                <span>
                    <img alt={"avatar"} src={treeData.avatar} width={50}/> <br/>
                    <strong>{ treeData.name }</strong> <br/>
                    <p>{ treeData.level }</p>
                </span>
                { treeData.children.length > 0 ? <ul>
                    {
                        treeData.children.map((tree, index) => {
                            return(
                                <CustomTreeNode3 key={index} treeData={tree}/>
                            )
                        })
                    }
                </ul> : null }
            </li>
        );
    }
}

export default CustomTreeNode3;