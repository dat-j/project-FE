import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled from "styled-components";

type InputOTP = {
  num1: string,
  num2: string,
  num3: string,
  num4: string
}

const OTP = "2401"
const Form = () => {
    const [inputValue, setInputValue] = useState<InputOTP>({num1:"",num2:"",num3:"",num4:""})
    const router = useRouter()
    const inputRef = useRef<any>([])
    const [index, setIndex] = useState(0)



    const handleSumbitOTP = () => {
        if(`${inputValue.num1}${inputValue.num2}${inputValue.num3}${inputValue.num4}`===OTP){
            alert("Passed!")
        }
        else{
          alert("OTP fail!")
        }
    }

    const handleInputKey = (e: any) => {
        if(e.target.value && index <3){
            inputRef.current[index + 1].focus()
            setIndex(index+1)
            return
        }
        if(e.key === 'Backspace' && index > 0){
            inputRef.current[index - 1].focus()
            setIndex(index-1)
            return
        }
    }
    // console.log("=========================")
    // console.log(inputRef.current)
    // console.log(inputValue)
    // console.log("=========================")
  return (
    <StyledWrapper>
      <form className="otp-Form">
        <span className="mainHeading">Enter OTP</span>
        <p className="otpSubheading">
          We have sent a verification code to your mobile number
        </p>
        <div className="inputContainer">
          <input
            required
            maxLength={1}
            type="text"
            className="otp-input"
            id="otp-input1"
            onInputCapture={()=>console.log('aaa')}
            onChange={(e)=>{
              
              setInputValue({...inputValue,num1:e.target.value.trim()})
            }}
          />
          <input
            required
            maxLength={1}
            type="text"
            className="otp-input"
            id="otp-input2"
            //onInput={handleInputKey}
            onChange={(e)=>setInputValue({...inputValue,num2:e.target.value.trim()})}
          />
          <input
            required
            maxLength={1}
            type="text"
            className="otp-input"
            id="otp-input3"
            //onInput={handleInputKey}
            onChange={(e)=>setInputValue({...inputValue,num3:e.target.value.trim()})}
          />
          <input
            required
            maxLength={1}
            type="text"
            className="otp-input"
            id="otp-input4"
            //onInput={handleInputKey}
            onChange={(e)=>setInputValue({...inputValue,num4:e.target.value.trim()})}
          />
        </div>
        <button className="verifyButton" type="submit" onClick={()=>handleSumbitOTP()}>
          Verify
        </button>
        <button className="exitBtn">&times;</button>
        <p className="resendNote">
          Didn&apos;t receive the code?{" "}
          <button className="resendBtn">Resend Code</button>
        </p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  .otp-Form {
    width: 460px;
    height: 600px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    gap: 20px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.082);
    border-radius: 15px;
  }

  .mainHeading {
    font-size: 2.2em;
    color: rgb(15, 15, 15);
    font-weight: 700;
  }

  .otpSubheading {
    font-size: 1.1em;
    color: black;
    line-height: 18px;
    text-align: center;
  }

  .inputContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .otp-input {
    background-color: rgb(228, 228, 228);
    width: 60px;
    height: 60px;
    text-align: center;
    border: none;
    border-radius: 7px;
    caret-color: rgb(127, 129, 255);
    color: rgb(44, 44, 44);
    outline: none;
    font-weight: 600;
  }

  .otp-input:focus,
  .otp-input:valid {
    background-color: rgba(127, 129, 255, 0.199);
    transition-duration: 0.3s;
  }

  .verifyButton {
    width: 100%;
    height: 60px;
    border: none;
    background-color: rgb(127, 129, 255);
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: 0.2s;
  }

  .verifyButton:hover {
    background-color: rgb(144, 145, 255);
    transition-duration: 0.2s;
  }

  .exitBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.171);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    color: black;
    font-size: 1.1em;
    cursor: pointer;
  }

  .resendNote {
    font-size: 0.7em;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .resendBtn {
    background-color: transparent;
    border: none;
    color: rgb(127, 129, 255);
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 700;
  }
`;

export default Form;
