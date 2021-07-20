import React, {Component} from 'react';
import {TreeNode} from "react-organizational-chart";
import styled from 'styled-components';

const StyledNode = styled.div`

`;

class CustomTreeNode extends Component {


    render() {
        const { treeItem, treeData, handleToggle, handleShowTree, handleDeleteTree } = this.props;

        let nextData = [];
        if(treeData){
            nextData = treeData.filter(tree => tree.parent === treeItem.id);
        }
        return (
            <TreeNode label={
                <StyledNode>
                    <img className="rounded-circle" alt={"avatar"} width={70} src={ treeItem.avatar } />
                    <p style={{ margin: 0 }}><strong>{ treeItem?.name }</strong></p>
                    <span>{ treeItem.level }</span>
                    <p>
                        <button className="btn btn-sm btn-primary" onClick={() => { handleToggle(true, treeItem.id) }}>
                            <i className="fas fa-plus-circle" />
                        </button>
                        <button className="btn btn-sm btn-info" onClick={() => {
                            handleShowTree(treeItem)
                        }}>
                            <i className="fas fa-edit" />
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => {
                            handleDeleteTree(treeItem.id)
                        }}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </p>
                </StyledNode>
            }>
                {
                    nextData.length > 0 ? nextData.map(function(node, index) {
                        return  <CustomTreeNode
                                    handleToggle={handleToggle}
                                    key={index}
                                    treeData={treeData}
                                    treeItem={node}
                                    handleShowTree={handleShowTree}
                                    handleDeleteTree={handleDeleteTree}
                                />
                    }) : null
                }
            </TreeNode>
        );
    }
}

export default CustomTreeNode;