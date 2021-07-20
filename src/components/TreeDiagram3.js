import React, {Component} from 'react';
import './TreeDiagram.css';
import CustomTreeNode3 from "./CustomTreeNode3";

const treeData = {
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
                            id: 10,
                            name: 'Neva Price',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                        {
                            id: 10,
                            name: 'Neva Price',
                            level: 'Manager',
                            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                            children: [],
                        },
                        {
                            id: 10,
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

class TreeDiagram3 extends Component {
    render() {
        return (
            <div>
                <ul className="tree">
                    <li>
                        <span>
                            <img alt={"avatar"} src={treeData.avatar} width={50}/> <br/>
                            <strong>{ treeData.name }</strong> <br/>
                            <p>{ treeData.level }</p>
                        </span>
                        <ul>
                        {
                            treeData.children.length > 0 ? treeData.children.map((tree, index) => {
                                return (
                                    <CustomTreeNode3 key={index} treeData={tree} />
                                )
                            }) : null
                        }
                        </ul>
                        {/*<ul>*/}
                        {/*    <li>*/}
                        {/*        <span>About us</span>*/}
                        {/*        <ul>*/}
                        {/*            <li>*/}
                        {/*                <span>Our history</span>*/}
                        {/*            </li>*/}
                        {/*            <li><span>Our board</span></li>*/}
                        {/*        </ul>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <span>Contact</span>*/}
                        {/*        <ul>*/}
                        {/*            <li>*/}
                        {/*                <span>Our history</span>*/}
                        {/*            </li>*/}
                        {/*            <li><span>Our board</span></li>*/}
                        {/*        </ul>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </li>
                </ul>
            </div>
        );
    }
}

export default TreeDiagram3;