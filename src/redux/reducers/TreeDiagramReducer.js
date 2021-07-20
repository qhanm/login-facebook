import {
    ADD_TREE_DATA,
    DELETE_TREE_DATA,
    SHOW_TREE_DATA,
    TOGGLE_STATUS,
    UPDATE_TREE_DATA
} from "../types/TreeDiagramType";

const initialState = {
    toggle: false,
    currentTree: {
        name: '',
        level: '',
        id: '',
    },
    treeParentId: '',
    avatarDefault: 'https://image.flaticon.com/icons/png/512/194/194938.png',
    treeData: [
        {
            id: 1,
            name: 'Mandy McMillan',
            level: 'CEO',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            parent: 0,
        }
    ]
}


const TreeDiagramReducer = (state = initialState, action ) => {
    switch (action.type)
    {
        case TOGGLE_STATUS:
        {
            return {
                ...state,
                toggle: action.status,
                treeParentId: action.treeParentId,
                currentTree: {
                    name:"",
                    level: "",
                    id: '',
                }
            }
        }

        case ADD_TREE_DATA:
        {
            let newTreeData = [...state.treeData] ;

            newTreeData.push({
                id: newTreeData.length + 1,
                parent: action.treeParentId,
                name: action.treeItem.name,
                level: action.treeItem.level,
                // new
                avatar: !action.treeItem.image ? state.avatarDefault : action.treeItem.image
            })

            state.treeData = newTreeData;
            
            return { ...state}
        }

        case SHOW_TREE_DATA:
        {
            state.toggle = true;
            state.currentTree = action.treeItem;
            return {...state};
        }

        case UPDATE_TREE_DATA:
        {
            let newTreeData = [...state.treeData];
            let newCurrentTree = {...state.currentTree};
            let index = newTreeData.findIndex(tree => tree.id === action.treeItem.id);
            if(index !== -1)
            {
                newTreeData[index].name = action.treeItem.name;
                newTreeData[index].level = action.treeItem.level;
                //new
                newTreeData[index].avatar = !action.treeItem.image ? state.avatarDefault : action.treeItem.image;
            }
            newCurrentTree.id = '';
            newCurrentTree.name = '';
            newCurrentTree.level = '';
            return {
                ...state,
                treeData: newTreeData,
                toggle: false,
                currentTree: newCurrentTree
            };
        }

        case DELETE_TREE_DATA:
        {
            if(action.treeId === 1) break;

            let newTreeData = [...state.treeData].filter(tree => tree.id !== action.treeId && tree.parent !== action.treeId);

            return {...state, treeData: newTreeData}
        }
        default: break;
    }
    return { ...state }
}

export default TreeDiagramReducer;