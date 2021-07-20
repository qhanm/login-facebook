import React, {Component, Fragment} from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import CustomTreeNode from "./CustomTreeNode";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from "@material-ui/core/Button";
import TreeInfoComponent from "./TreeInfoComponent";
import {toggleAction} from "../redux/actions/TreeDiagramAction";
import { connect } from "react-redux";

const StyledNode = styled.div`
`;

// https://stackoverflow.com/questions/20503559/how-to-manage-state-in-a-tree-component-in-reactjs
const treeData1 = {
    id: 1,
    name: 'Mandy McMillan',
    level: 'CEO',
    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    children: [
        {
            id: 2,
            name: 'Elma Owen',
            level: 'Vile President',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            children: [],
        },
        {
            id: 3,
            name: 'Aaron Silas',
            level: 'Vile President',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            children: [
                {
                    id: 5,
                    name: 'Malinda Levy',
                    level: 'Director',
                    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    children: [],
                },
                {
                    id: 6,
                    name: 'Dominic Spurgeon',
                    level: 'Director',
                    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    children: [],
                },
                {
                    id: 7,
                    name: 'Wilda Harrell',
                    level: 'Director',
                    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    children: [],
                },
                {
                    id: 8,
                    name: 'Beverly Floyd',
                    level: 'Director',
                    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    children: [
                        {
                            id: 9,
                            name: 'Israel Fite',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                        {
                            id: 10,
                            name: 'Elliot Gaytan',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                        {
                            id: 11,
                            name: 'Neva Price',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                        {
                            id: 12,
                            name: 'Neva Price',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                        {
                            id: 13,
                            name: 'Neva Price',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            name: 'Earl McLear',
            level: 'Vile President',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            children: [],
        }
    ],
}

const anchor = 'right';
class TreeDiagram2_bk extends Component {

    state = {
        right: false,
        treeData: this.props.treeData
    }

    renderTreeNode = (treeNode) => {

    }
    renderTree = (data) => {
        let arrData = [];

        for(let index =0 ; index < data.length; index++)
        {
            if(data[index].children.length > 0){
                this.renderTree(data[index].children)
            }
        }

    }

    toggleDrawer = (event, open) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            ...this.state, [anchor]: open
        })
    };

    handDleClickAdd = (treeParentId) => {
        this.props.handleToggle(true, treeParentId);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.treeData !== prevState.treeData){
            return {
                right: nextProps.right,
                treeData: nextProps.treeData,
            }
        }
        else return null;
    }

    render() {
        const { treeData } = this.state
        return (
            <div className="container mt-5">
                <TreeInfoComponent />
                {/*<React.Fragment key={anchor}>*/}
                {/*    <Button onClick={(event) => { this.toggleDrawer(event, true) }}>{anchor}</Button>*/}
                {/*    <SwipeableDrawer*/}
                {/*        anchor={anchor}*/}
                {/*        open={ this.state.right }*/}
                {/*        onClose={(event) => { this.toggleDrawer(event, false) }}*/}
                {/*        onOpen={(event) => { this.toggleDrawer(event, true) }}*/}
                {/*    >*/}
                {/*        <div*/}
                {/*            role="presentation"*/}
                {/*            onClick={(event) => { this.toggleDrawer(event, false) }}*/}
                {/*            onKeyDown={(event) => { this.toggleDrawer(event, false) }}*/}
                {/*        >*/}
                {/*            fasfasfasfafafafafafa*/}
                {/*        </div>*/}
                {/*    </SwipeableDrawer>*/}
                {/*</React.Fragment>*/}
                <Tree
                    lineWidth={'2px'}
                    lineColor={'green'}
                    lineBorderRadius={'10px'}
                    lineHeight={'30px'}
                    nodePadding={'5px'}
                    label={<StyledNode>
                        <img alt={"avatar"} width={60} src={ treeData.avatar } />
                        <p style={{ margin: 0 }}><strong>{ treeData.name }</strong></p>
                        <span>{ treeData.level }</span>
                        <p>
                            <button onClick={() => { this.handDleClickAdd(treeData.id) }}>Add</button>
                            <button>Edit</button>
                        </p>
                    </StyledNode>}
                >
                    { treeData.children.map((tree, index) => {
                        return (
                            <CustomTreeNode key={ index } treeData={ tree } />
                        )

                    }) }
                    {/*<TreeNode label={<StyledNode>Child 1</StyledNode>}>*/}
                    {/*    <TreeNode label={<StyledNode>Grand Child</StyledNode>} />*/}
                    {/*</TreeNode>*/}
                    {/*<TreeNode label={<StyledNode>Child 2</StyledNode>}>*/}
                    {/*    <TreeNode label={<StyledNode>Grand Child</StyledNode>}>*/}
                    {/*        <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />*/}
                    {/*        <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />*/}
                    {/*    </TreeNode>*/}
                    {/*</TreeNode>*/}
                    {/*<TreeNode label={<StyledNode>Child 3</StyledNode>}>*/}
                    {/*    <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />*/}
                    {/*    <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />*/}
                    {/*</TreeNode>*/}
                </Tree>
            </div>
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

const mapStateToProps = (state) => {
    return {
        treeData: state.TreeDiagramReducer.treeData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeDiagram2);