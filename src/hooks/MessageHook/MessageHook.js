import {useSnackbar} from "notistack";

function useMessageHook() {
    const {enqueueSnackbar} = useSnackbar();

    function success(info) {
        enqueueSnackbar(info, {variant: 'success'});
    }

    function msg(info) {
        enqueueSnackbar(info, {variant: 'info'});
    }
    // eslint-disable-next-line  no-unused-vars
    function error(info) {
        enqueueSnackbar(info, {variant: 'error'});
    }

    function warn(info) {
        enqueueSnackbar(info, {variant: 'warning'});
    }

    return {msg, success, warn}
}

export default useMessageHook;
