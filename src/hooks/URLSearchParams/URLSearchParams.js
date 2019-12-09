import {useEffect, useState} from "react";
import useRouter from "../../utils/useRouter";
function formatParams(uri) {
    const searchParams = new URLSearchParams(uri);
    let param={};
    for (let p of searchParams.entries()) {
        if (p.length === 2) {
            param[p[0]]=window.decodeURIComponent(p[1]);
        }
    }
    return param
}
export default function useURLSearchParams(initParams={}) {
    const [params,setParams]=useState(initParams);
    const {location,history} = useRouter();
    let  addParams = (param={})=> {
        console.log(param);
        if (param.keyLength > 0){
            const searchParams = new URLSearchParams(location.search);
            for(let p in param){
                searchParams.append(p,window.encodeURIComponent(param[p]));
            }
            setParams(formatParams(searchParams.toString()));
        }
    };
    useEffect(() => {
        setParams(formatParams(location.search));
        // eslint-disable-next-line
    }, [location]);
    return {addParams,...params}
}
