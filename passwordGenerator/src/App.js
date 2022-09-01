import { useState } from "react";
import './App.css';

//for toastyfy
import { ToastContainer, toast } from 'react-toastify';
//for toastyfy
import 'react-toastify/dist/ReactToastify.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from "./components/Character";
import { COPY_Fail, COPY_SUCCESS } from "./components/Message";


function App() {

  //USESTATES

  //başlangic pass. degeri 
  const [password, setPassword] = useState("")

  //default 6 karakterli
  const [passwordLength, setPasswordLength] = useState(6)

  //for checkbox control -default false
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  //generate password butonuna tıklandığında
  const handleGeneratePassword = () => {
    //eğer hiçbir checkbox işaretli değilse
    if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols) {
      //toast bas
      notify("To generate password you must select atleast one checkbox", true)
    }
    //diger durumlarda kontrol
    else {
      let characterList = ""

      //sayılar checkbox işaretlendiğinde
      if (includeNumbers) {
        //numberları ekle
        characterList = characterList + numbers
      }
      //buyuk harf
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters
      }

      //kucuk harf
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters
      }
      //semboller
      if (includeSymbols) {
        characterList = characterList + specialCharacters
      }
      //create password e charlisti gönder
      setPassword(createPassword(characterList))
      //toast
      notify("Password is generate success", false)

    }
  }

  //pass olusturma
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    //şifre uzunluğu kadar random math işlemleri
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password

  }



  //toast kısmı tanımları
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }
  //kopyalama
  const copyToClipboard = (password) => {

    navigator.clipboard.writeText(password)
  }

  //şifre kopyalamada mesaj
  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(COPY_Fail, true)
    }
    else {
      copyToClipboard(password)
      notify(COPY_SUCCESS)
    }

  }

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator_header">
            Password Generator
          </h2>
          <div className="generator_password">
            <h3>
              {password}
            </h3>
            <button className="copy__btn">
              <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
            </button>
          </div>
          {/* Forms */}
          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input className="pw" defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number" id="password-stregth" name="password-strength" max="26" min="8" />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} type="checkbox" id="uppercase-letters" name="uppercase-letters" />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers" />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols" />
          </div>
          <button onClick={handleGeneratePassword} className="generator_btn">
            Generate Password
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>

    </div>
  );
}

export default App;
