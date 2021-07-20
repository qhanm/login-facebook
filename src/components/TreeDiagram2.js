import React, {Component} from 'react';
import { Tree } from 'react-organizational-chart';
import styled from 'styled-components';
import CustomTreeNode from "./CustomTreeNode";
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from "@material-ui/core/Button";
import TreeInfoComponent from "./TreeInfoComponent";
import {deleteTreeAction, showTreeAction, toggleAction} from "../redux/actions/TreeDiagramAction";
import { connect } from "react-redux";


const StyledNode = styled.div`
`;

// https://stackoverflow.com/questions/20503559/how-to-manage-state-in-a-tree-component-in-reactjs

class TreeDiagram2 extends Component {

    state = {
        right: false,
        treeData: this.props.treeData
    }


    toggleDrawer = (event, open) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            ...this.state, right: open
        })
    };

    handDleClickAdd = (treeParentId) => {
        this.props.handleToggle(true, treeParentId);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.treeData !== prevState.treeData){
            return {
                ...prevState,
                treeData: nextProps.treeData,
            }
        }
        else return null;
    }

    render() {
        const { treeData } = this.state;
        const temp = [...treeData];
        const parent = treeData.find(tree => tree.parent === 0);

        return (
            <div className="container mt-5">
                <TreeInfoComponent />
                <Tree
                    lineWidth={'3px'}
                    lineColor={'blue'}
                    lineBorderRadius={'5px'}
                    lineHeight={'20px'}
                    nodePadding={'5px'}
                    label={<StyledNode>
                        <img alt={"avatar"} className="rounded-circle" width={70} src={ parent.avatar } />
                        <p style={{ margin: 0 }}><strong>{ parent.name }</strong></p>
                        <span>{ parent.level }</span>
                        <p>
                            <button className="btn btn-sm btn-primary" onClick={() => { this.props.handleToggle(true, parent.id) }}>
                                <i className="fas fa-plus-circle" />
                            </button>
                            <button className="btn btn-sm btn-info" onClick={() => {
                                this.props.handleShowTree(parent)
                            }}>
                                <i className="fas fa-edit" />
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => {
                                this.props.handleDeleteTree(parent.id);
                            }}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </p>
                    </StyledNode>}
                >
                    { treeData.filter(tree => tree.parent === parent.id).map((tree, index) => {
                        return (
                            <CustomTreeNode
                                key={ index }
                                treeData={temp}
                                treeItem={ tree }
                                handleToggle={this.props.handleToggle}
                                handleShowTree={this.props.handleShowTree}
                                handleDeleteTree={this.props.handleDeleteTree}
                            />
                        )
                    }) }
                </Tree>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggle: (status, treeParentId) => {
            dispatch(toggleAction(status, treeParentId))
        },
        handleShowTree: (treeItem) => {
            dispatch(showTreeAction(treeItem));
        },
        handleDeleteTree: (treeId) => {
            dispatch(deleteTreeAction(treeId))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        treeData: state.TreeDiagramReducer.treeData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeDiagram2);