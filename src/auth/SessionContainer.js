import {useState} from "react";
import {createContainer} from "unstated-next";
import {useLocalStorage} from "react-use";

const SessionKey = "SessionKey";

function useSessionContainer(initSession = {
    loggedIn: false,
    user: {id: 0, nickName: 'frank', avatar: ''},
    token: '',
    roles: [],
    permissions: []
}) {
    const [value, setValue] = useLocalStorage(SessionKey, null);
    console.log("value::::", value);
    let [session, setSession] = useState(value || initSession);
    let isLogin = () => session.loggedIn;
    let login = (newSession) => {
        let cur = {token: '', roles: [], permissions: [], ...newSession};
        setValue(cur);
        setSession(cur);
        console.log(session);
    };
    let refreshAuth = ({roles, permissions}) => {
        setSession({...(session), roles, permissions});
    };
    return {session, isLogin, login, refreshAuth}
}

export default createContainer(useSessionContainer);
