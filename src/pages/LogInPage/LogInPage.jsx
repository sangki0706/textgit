
import { useState } from 'react'
import Page from '../../components/Page/Page'
import { useNavigate } from 'react-router-dom';

function LogInPage(props) {
    const { logIn } = props;
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassWord] = useState("");

    const handleClickLogIn = () => {
        logIn()
        navigate("/");
    }


    return (
        <Page>
            <input type="text" value={id} onClick={(e) => setId(e.target.value)} />
            <input type="password" value={password} onClick={(e) => setPassWord(e.target.value)}/>
            <button onClick={handleClickLogIn}>로그인</button>
        </Page>
    )
}

export default LogInPage

