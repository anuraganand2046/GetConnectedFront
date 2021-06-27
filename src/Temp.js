import {useEffect} from 'react';
const Temp=()=>{
    useEffect(()=>{
        fetch('http://localhost:8080/auth/signup')
    .then(res=>{
        return res.json();
    })
    .then((resData)=>{
        setState(resData);
    })
    .catch(err=>{
        next();
    });
    }, [])
}
export default Temp;