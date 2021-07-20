import {
    ADD_TREE_DATA,
    DELETE_TREE_DATA,
    SHOW_TREE_DATA,
    TOGGLE_STATUS,
    UPDATE_TREE_DATA
} from "../types/TreeDiagramType";

export const toggleAction = (status, treeParentId) => {
    return {
        status,
        treeParentId,
        type: TOGGLE_STATUS,
    }
}

export const addTreeAction = (treeParentId, treeItem) => {
    return {
        type: ADD_TREE_DATA,
        treeParentId,
        treeItem
    }
}

export const showTreeAction = (treeItem) => {
    return {
        type: SHOW_TREE_DATA,
        treeItem
    }
}

export const updateTreeAction = (treeItem) => {
    return {
        type: UPDATE_TREE_DATA,
        treeItem
    }
}

export const deleteTreeAction = (treeId) => {
    return {
        type: DELETE_TREE_DATA,
        treeId
    }
}