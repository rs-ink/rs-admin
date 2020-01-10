import GridList from "@material-ui/core/GridList";
import React, {useCallback, useEffect, useState} from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import {FilesDropZone} from "../../../../components";
import GridListTile from "@material-ui/core/GridListTile";
import {useDropzone} from "react-dropzone";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));
const ImageList = ({images=[],onChange})=>{
    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const handleDrop = useCallback(acceptedFiles => {
        setFiles(files => [...files].concat(acceptedFiles));
    }, []);

    const handleRemoveAll = () => {
        setFiles([]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop
    });
    return<GridList cellHeight={160} classes={classes.gridList}>
        <GridListTile title={"上传"}>
            <img
                alt="Select file"
                className={classes.image}
                src="/images/undraw_add_file2_gvbb.svg"
            />
        </GridListTile>
        {
            images.map((src,index)=>(
                <GridListTile key={index}>
                    <img  src={src} alt={index} />
                </GridListTile >
            ))
        }
        </GridList>
};
export default ImageList;
