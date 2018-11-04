import {UploadSuccess} from './actionTypes';

const uploadSuccess = (result) => ({
    type: UploadSuccess,
    payload: result
});

export { uploadSuccess };