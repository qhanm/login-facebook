import React, {Component} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {addTreeAction, toggleAction, updateTreeAction} from "../redux/actions/TreeDiagramAction";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import _ from 'lodash';
import TestUploadFile from "./TestUploadFile";

class TreeInfoComponent extends Component{
    state = {
        right: this.props.right,
        treeParentId: this.props.treeParentId,
        //name: this.props.currentTree.name,
        //level: this.props.currentTree.level,
        image: !this.props.currentTree.avatar ? this.props.imageDefault : this.props.currentTree.avatar,
        id: this.props.currentTree.id,
        values: {
            name: this.props.currentTree.name,
            level: this.props.currentTree.level,
        },
        errors: {
            name: '',
            level: '',
        }
    }

     toggleDrawer = (event, open) => {

        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.props.handleToggle(open, '')
    };

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.right !== prevState.right){
            return {
                ...prevState,
                right: nextProps.right,
                treeParentId: nextProps.treeParentId,
                name: nextProps.currentTree.name,
                level: nextProps.currentTree.level,
                id: nextProps.currentTree.id,
                values: {
                    name: nextProps.currentTree.name,
                    level: nextProps.currentTree.level,
                },
                errors: {
                    name: '',
                    level: '',
                },
                image: !nextProps.currentTree.avatar ? nextProps.imageDefault : nextProps.currentTree.avatar
            }
        }else if(nextProps.currentTree.id !== prevState.id){
            return {
                ...prevState,
                right: nextProps.right,
                treeParentId: nextProps.treeParentId,
                name: nextProps.currentTree.name,
                level: nextProps.currentTree.level,
                id: nextProps.currentTree.id,
                values: {
                    name: nextProps.currentTree.name,
                    level: nextProps.currentTree.level,
                },
                errors: {
                    name: '',
                    level: '',
                },
                image: !nextProps.currentTree.avatar ? nextProps.imageDefault : nextProps.currentTree.avatar
            }
        }
        else return null;
    }

    handleAddTreeData = (event) => {
        event.preventDefault();

        let { values, errors } = this.state;
        let isError = false;
        for (const property in values)
        {
            let indexElement =  _.findIndex(event.target, function (item) {
                return item.name === property;
            })

            if (indexElement === -1) continue;

            if(values[property] === ''){
                errors[property] = event.target[indexElement].getAttribute('data-name') + ' không được bỏ trống';
                isError = true;
            }else{
                errors[property] = '';
            }
        }

        this.setState({
            errors
        })
        if(isError) return false;

        if(this.state.id){
            this.props.handleUpdateTree({
                    name: this.state.values.name,
                    level: this.state.values.level,
                    id: this.state.id,
                    image: this.state.image,
            })
        }else {
            this.props.handleAddTree(
                this.state.treeParentId,
                {
                    image: this.state.image,
                    name: this.state.values.name,
                    level: this.state.values.level
                },
            )
        }

    }

    handleChangeImage = (source) => {

        this.setState({
            image: source,
        })
    }

    handleOnchangeInput = (event) => {
        const { name, value } = event.target;

        let newValues = { ...this.state.values, [name] : value};
        let newErrors = { ...this.state.errors };

        if(value.trim() === ''){
            newErrors[name] = event.target.getAttribute('data-name') + ' không được bỏ trống';
        }else{
            newErrors[name] = '';
        }

        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors
        })
    }

    render() {
        return (
            <React.Fragment>
                <SwipeableDrawer
                    anchor={'right'}
                    open={this.state.right}
                    onClose={(event) => { this.toggleDrawer(event, false) }}
                    onOpen={(event) => { this.toggleDrawer(event, true) }}
                >
                    <div
                        role="presentation"
                        style={{ minWidth: '400px'}}
                    >
                        <h3 className="text-center mt-4">Thên thành viên</h3>
                        <form onSubmit={this.handleAddTreeData}>
                            <Divider />
                            <Grid className="container " style={{ marginTop: '50px'}}>
                                <TextField style={{width: '100%'}} data-name="Họ tên" name="name" value={this.state.values.name} onChange={(event) => { this.handleOnchangeInput(event) }}  label="Họ tên" />
                                <br/>
                                { this.state.errors.name ? (<p style={{ color: '#f50057' }}>Họ tên không được bỏ trống</p>) : <br/> }
                                <TextField style={{width: '100%'}} data-name="Chức vụ" name="level" value={this.state.values.level} onChange={(event) => { this.handleOnchangeInput(event) }} label="Chức vụ" />
                                <br/>
                                { this.state.errors.level ? (<p style={{ color: '#f50057' }}>Chức vụ không được bỏ trống</p>) : <br/> }
                                <br/>

                                <TestUploadFile handleChangeImage={this.handleChangeImage} imageDefault={this.state.image}/>
                                <br/>
                                <Button className="text-center btn-block" type="submit" variant="contained" color="primary">
                                    Gửi
                                </Button>
                            </Grid>
                        </form>



                    </div>
                </SwipeableDrawer>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        right: state.TreeDiagramReducer.toggle,
        treeParentId: state.TreeDiagramReducer.treeParentId,
        currentTree: state.TreeDiagramReducer.currentTree,
        imageDefault: state.TreeDiagramReducer.avatarDefault,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTree: (treeParentId, treeItem) => {
            dispatch(addTreeAction(treeParentId, treeItem))
        },
        handleToggle: (status, treeParentId) => {
            dispatch(toggleAction(status, treeParentId));
        },
        handleUpdateTree: (treeItem) => {
            dispatch(updateTreeAction(treeItem));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeInfoComponent)