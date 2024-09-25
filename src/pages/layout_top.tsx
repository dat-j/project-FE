import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";


const LayoutTop = () => {
    const router = useRouter()
  return (
    <div className="z-[999] relative">
        <StyledWrapper>
      <div id="navbody">
        <form action="#">
          <ul className="ul">
            <input
              defaultChecked={true}
              name="rad"
              className="radio"
              id="choose1"
              type="radio"
            />
            <label htmlFor="choose1" onClick={()=>{router.push("/")}}>
              <li className="li">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svg w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  />
                </svg>
              </li>
            </label>
            <input className="radio" name="rad" id="choose2" type="radio" />
            <label htmlFor="choose2">
              <li className="li">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svg w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    strokeWidth={2}
                    strokeLinecap="round"
                    stroke="currentColor"
                  />
                </svg>
              </li>
            </label>
            <input className="radio" name="rad" id="choose3" type="radio" />
            <label htmlFor="choose3" onClick={()=>{router.push("/collection")}}>
              <li className="li">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svg w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  />
                </svg>
              </li>
            </label>
            <input className="radio" name="rad" id="choose4" type="radio" />
            <label htmlFor="choose4" onClick={()=>{router.push("/profile")}}>
              <li className="li">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svg w-6 h-6 text-gray-800 dark:text-white"
                >
                  <path
                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="square"
                    stroke="currentColor"
                  />
                </svg>
              </li>
            </label>
          </ul>
        </form>
      </div>
    </StyledWrapper>
    <div className="h-max w-10 bg-red-500">

    </div>
    </div>
    
  );
};

const StyledWrapper = styled.div`
    position: fixed;
    margin-top: 8px;
    display: flex;
    width: 100%;
    justify-content: center;
  #navbody {
    width: 300px;
    height: 60px;
    background-color: rgb(255, 255, 255);
    border-radius: 40px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.041);
    align-items: center;
    justify-content: center;
    display: flex;
    border-color: darkslategrey;
    border-width: 1px;
  }

  .ul {
    list-style: none;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .ul .li {
    display: inline-block;
  }

  .radio {
    display: none;
  }

  .svg {
    width: 70px;
    height: 70px;
    opacity: 80%;
    cursor: pointer;
    padding: 13px 20px;
    transition: 0.2s;
  }

  .ul .li .svg:hover {
    transition: 0.1s;
    color: rgb(235, 40, 176);
    position: relative;
    margin-top: -4px;
    opacity: 100%;
  }

  .radio:checked + label .li .svg {
    color: rgb(235, 40, 176);
    fill-rule: evenodd;
  }
`;

export default LayoutTop;
