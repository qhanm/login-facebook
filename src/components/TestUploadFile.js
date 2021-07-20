import React, {Component} from 'react';

class TestUploadFile extends Component {

    state = {
        imageDefault: this.props.imageDefault,
    }

    getBase64(file, cb) {
        try{
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                cb(reader.result)
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }catch (err) {
            console.log(err);
        }
    }

    onChangeFile = (event) => {
        let file = event.target.files[0];
        this.getBase64(file, (result) => {
            this.props.handleChangeImage(result)
        });

    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.imageDefault !== prevState.imageDefault){
            return {
                imageDefault: nextProps.imageDefault
            }
        }
        else return null;
    }

    render() {
        return (
            <div>
                <input
                    type="file"
                    name="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={this.onChangeFile}
                />
                <img className="rounded-circle" width={100} src={ this.state.imageDefault } alt=""/>
                <br/>
                <label className="text-center ml-1 btn text-primary" htmlFor="file-upload">
                    <i className="fas fa-upload" /> Tải ảnh
                </label>
            </div>
        );
    }
}

export default TestUploadFile;