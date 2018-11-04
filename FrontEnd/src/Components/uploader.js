import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Upload, Icon, message } from 'antd';
import { uploadSuccess } from '../actions/actionCreator';


const Dragger = Upload.Dragger;

class Uploader extends Component {
  onUploadFileChange = (info) => {
    const status = info.file.status;
    if (status !== 'uploading') {
    }
    if (status === 'done') {
      console.log(info.file.response);
      this.props.uploadSuccess(info.file.response)

      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  render() {

    const props = {
      name: 'csv',
      multiple: false,
      action: 'http://localhost:8080/api/csv',
      onChange: (info) => this.onUploadFileChange(info)
    };

    return (
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click or drag CSV file from /stubs folder to this area to upload</p>
        <p className="ant-upload-hint">Support for a single upload. Specific CSV Format only</p>
      </Dragger>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {

  };
};

const mapDispatchToProps = {
  uploadSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(Uploader);