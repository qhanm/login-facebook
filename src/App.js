import Facebook from "./components/Facebook";
import Google from "./components/Google";
import React from "react";
// import SearchAddress from "./components/SearchAddress";
import TreeDiagram from "./components/TreeDiagram";
import TreeDiagram2 from "./components/TreeDiagram2";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import TreeDiagram3 from "./components/TreeDiagram3";
import SortableTreeComponent from "./components/SortableTreeComponent";
import TestUploadFile from "./components/TestUploadFile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Route exact path="/tree-diagram2" component={ TreeDiagram2 } />
                <Route exact path="/tree-diagram3" component={ TreeDiagram3 } />
                <Route exact path="/tree-diagram" component={ TreeDiagram } />
                <Route exact path="/login-facebook" component={ Facebook } />
                <Route exact path="/login-google" component={ Google } />
                <Route exact path="/sortable-tree" component={ SortableTreeComponent } />
                <Route exact path="/test-upload-file" component={ TestUploadFile } />
            </BrowserRouter>
        </>
    );
}

export default App;
