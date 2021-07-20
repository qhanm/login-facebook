import React, {Component} from 'react';
import {TreeNode} from "react-organizational-chart";
import styled from 'styled-components';
import { connect } from "react-redux";
import {toggleAction} from "../redux/actions/TreeDiagramAction";

const StyledNode = styled.div`

`;

class CustomTreeNode_bk extends Component {

    render() {

        const { treeData } = this.props;

        return (
            <TreeNode label={
                <StyledNode>
                    <img alt={"avatar"} width={60} src={ treeData.avatar } />
                    <p style={{ margin: 0 }}><strong>{ treeData?.name }</strong></p>
                    <span>{ treeData.level }</span>
                    <p>
                        <button onClick={() => {
                            this.props.handleToggle(true, treeData.id)
                        }}>Add</button>
                        <button>Edit</button>
                    </p>
                </StyledNode>
            }>
                {
                    treeData.children.length > 0 ? treeData.children.map(function(node, index) {
                        return  <CustomTreeNode key={index}  treeData={node} label={<StyledNode>{ 121 }</StyledNode>} />
                    }) : null
                }
            </TreeNode>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggle: (status, treeParentId) => {
            dispatch(toggleAction(status, treeParentId))
        }
    }
}

export default connect(null, mapDispatchToProps)(CustomTreeNode);