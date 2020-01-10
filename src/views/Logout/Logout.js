import {useSession} from "../../auth";
import useRouter from "../../utils/useRouter";
import React, {useEffect} from "react";

const Logout = () => {
    const {history} = useRouter();
    const {logout} = useSession();
    useEffect(() => {
        logout();
        history.push('/auth/login');
    }, []);
    return <div>退出中</div>
};
export default Logout;
