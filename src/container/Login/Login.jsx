import styled from "styled-components";
import PicLogIn from "../../assets/PicLogin.svg"
import Logo from "../../component/Logo/Logo";
import {Button} from "../../component/Button/Button"
import { ReactComponent as ToggleEyes } from "../../assets/toggleEyes.svg";
import { ReactComponent as Google } from "../../assets/Google.svg";
import { ReactComponent as Github } from "../../assets/Github.svg";
import { ReactComponent as Facebook } from "../../assets/Facebook.svg";
import { Form, Field } from "react-final-form";
import { useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const StyledLogIn = styled.div`
  background-image: linear-gradient(90deg, #ffffff 0%, #bbaaff 100%);
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  .imgRight {
    float: right;
    width: 854px;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledFormLog = styled.div`
  width: 480px;
  display: inline-block;
  margin-top: 258px;
  margin-left: 238px;
  h1 {
    margin-top: 0;
    font-size: 56px;
    font-family: "Poppins";
    line-height: 84px;
    margin-bottom: 20px;
  }
  label {
    display: inline-block;
    font-size: 16px;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    height: 46px;
    background-color: rgba(187, 170, 255, 0.5);
  }
  p {
    display: inline-block;
  }
  a {
    font-size: 14px;
    display: inline-block;
  }
  .lb1 {
    width: 100%;
  }
  .lb2 {
    width: 69%;
  }
  .showpw {
    position: relative;
  }
  .spw {
    cursor: pointer;
    position: absolute;
    right: 4%;
    top: 31%;
  }
  .btnLog {
    width: 480px;
    text-align: center;
    margin-top: 46px;
  }
  .loginDif {
    text-align: center;
    p {
      color: #5429ff;
    }
  }
  .lgdf {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .gg {
    cursor: pointer;
    width: 126px;
    border-radius: 40px;
    border: 1px solid #5429ff;
    padding: 12px 0 8px 0;
  }
  .signup {
    text-align: center;
    p {
      padding-right: 15px;
    }
    a {
      text-decoration: none;
      color: #5429ff;
    }
  }
`;


const LogIn = () => {
  let navigate = useNavigate();
  const selectAuth = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const onSubmit = async values => {
   const response = dispatch.auth.login(values)
   response.then((res)=>{
    dispatch.auth.setUsername(res.data.username);
    navigate("/");
    // console.log("r",res.data);
   })
   .catch((res) => console.log(res))
    console.log("res",response);

}
console.log(selectAuth)
  return (
    <StyledLogIn>
      <StyledFormLog>
        <Logo className="lg"></Logo>
        <h1>Log In</h1>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          render={({
            submitError,
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label for="Username" className="lb1">
                      Username
                    </label>
                    <input
                      {...input}
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label for="Password" className="lb2">
                      Password
                    </label>
                    <p>Forgot Password?</p>
                    <div className="showpw">
                      <div className="spw">
                        <ToggleEyes></ToggleEyes>
                      </div>
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  </div>
                )}
              </Field>
              {submitError && <div className="error">{submitError}</div>}
              <div className="btnLog">
                <Button
                  type="submit"
                  bgColor={"#5429FF"}
                  textColor={"#FFFFFF"}
                  fontFami={"DM Sans"}
                  fontSize={"16px"}
                  width={"126px"}
                  height={"37px"}
                  disabled={submitting}
                >
                  Login
                </Button>
              </div>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />
        <div className="loginDif">
          <p>or continue with</p>
          <div className="lgdf">
            <div className="gg">
              <Google></Google>
            </div>
            <div className="gg">
              <Github></Github>
            </div>
            <div className="gg">
              <Facebook></Facebook>
            </div>
          </div>
        </div>
        <div className="signup">
          <p>Don't have an account yet?</p>
          <a href="/" className="sup">
            Sign up for free
          </a>
        </div>
      </StyledFormLog>
      <div className="imgRight">
        <img src={PicLogIn} alt="PictureLogin" />
      </div>
    </StyledLogIn>
  );
};

export default LogIn;
