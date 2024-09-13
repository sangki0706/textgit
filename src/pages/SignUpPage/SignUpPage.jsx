import { useState } from 'react'
import Page from '../../components/Page/Page'
import { useNavigate } from 'react-router-dom';

function SignUpPage(props) {
  const navigate = useNavigate();

  const { signUp } = props;

  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [nickname, setNickName] = useState("");

  const handleClickSignUpButton = () => {
    const newUser = {id, password, nickname};
    signUp(newUser);

    navigate("/");
  }


  return (
    <Page>
      <h1>회원가입</h1>

    <hr />

    <div className='text-black'>

      <input onChange={(e) =>setId(e.target.value)} value={id} type="text" placeholder='ID'/>
      <input onChange={(e) =>setPassWord(e.target.value)} value={password} type="password" placeholder='PW'/>
      <input onChange={(e) =>setNickName(e.target.value)} value={nickname} type="text" placeholder='Nickname'/>

      <button onClick={handleClickSignUpButton} className='text-white border-white' >회원가입하기</button>

    </div>


    </Page>
  )
}

export default SignUpPage