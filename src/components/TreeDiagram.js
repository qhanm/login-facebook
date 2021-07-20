import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
    {
        name: 'Top Level',
        attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
        },
        children: [
            {
                name: 'Level 2: A',
                attributes: {
                    keyA: 'val A',
                    keyB: 'val B',
                    keyC: 'val C',
                },
            },
            {
                name: 'Level 2: B',
            },
        ],
    },
];

class TreeDiagram extends React.Component {
    state = {
        data: undefined,
    };

    componentDidMount() {

    }
    render() {
        return (
            <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
                <Tree data={myTreeData} pathFunc="step" orientation="vertical" />
            </div>
        );
    }
}

export default TreeDiagram;