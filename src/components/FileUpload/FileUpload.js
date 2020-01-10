import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import {colors} from "@material-ui/core";
import clsx from "clsx";
import {uploadFile} from "../../utils/axios";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    dropZone: {
        border: `1px dashed ${theme.palette.divider}`,
        padding: theme.spacing(2),
        background: colors.grey[120],
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: colors.grey[60],
            opacity: 0.5,
            cursor: 'pointer'
        }
    },
    image: {
        width: 100, height: 100
    },
    dragActive: {
        backgroundColor: colors.grey[60],
        opacity: 0.5
    },
}));
const FileUpload = ({jsonKey = "data", onUploadProgress,accept, success, error, ...rest}) => {
    const classes = useStyles();
    const handleDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(file => {
            if (accept){
                accept(file);
            }
            uploadFile({uri: "/rest/upload/img", file, onUploadProgress}).then(res => {
                console.log(res);
                if (success){
                    success(res);
                }
            }).catch();
        });
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop: handleDrop
    });
    return <Grid className={clsx({
        [classes.dropZone]: true,
        [classes.dragActive]: isDragActive
    })}
                 {...getRootProps()} {...rest}>
        <input {...getInputProps()} />
        <img
            alt="Select file"
            className={classes.image}
            src="/images/undraw_add_file2_gvbb.svg"
        />
    </Grid>
};
FileUpload.propTypes = {
    onUploadProgress: PropTypes.func,
    success:PropTypes.func,
    error:PropTypes.func,
};
export default FileUpload;
