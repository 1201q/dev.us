import styled from "styled-components";

import { IconGithub, IconGoogle } from "@/public/svgs";
import { motion } from "framer-motion";
import useAuthInput from "./hooks/useAuthInput";

import { selectStyles, unSelectStyles } from "@/styles/shared";
import Link from "next/link";
import useLogin from "./hooks/useLogin";
import { useState } from "react";
import useSignup from "./hooks/useSignup";

const AuthPage = ({ mode }: { mode: "login" | "signup" }) => {
  const [error, setError] = useState<string | null>(null);
  const {
    focus: emailFocus,
    value: emailValue,
    onChange: onEmailChange,
    onInputFocus: onEmailFocus,
  } = useAuthInput();

  const {
    focus: pwFocus,
    value: pwValue,
    onChange: onPwChange,
    onInputFocus: onPwFocus,
  } = useAuthInput();

  const {
    focus: checkPwFocus,
    value: checkPwValue,
    onChange: oncheckPwChange,
    onInputFocus: oncheckPwFocus,
  } = useAuthInput();

  const {
    focus: nameFocus,
    value: nameValue,
    onChange: onNameChange,
    onInputFocus: onNameFocus,
  } = useAuthInput();

  const { loading, onLogin } = useLogin();
  const { loading: signupLoading, onSignup } = useSignup();
  return (
    <Container initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
      <FormContainer
        loading={loading || signupLoading}
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);

          if (mode === "login") {
            onLogin(emailValue, pwValue, () => {
              setError("로그인에 실패했습니다.");
            });
          } else if (mode === "signup") {
            onSignup(emailValue, pwValue, checkPwValue, nameValue, (msg) => {
              setError(msg);
            });
          }
        }}
      >
        <HeaderText>{mode === "login" ? "로그인" : "회원가입"}</HeaderText>
        {error && (
          <Error
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </Error>
        )}
        <motion.div>
          <InputHeader>이메일</InputHeader>
          <Input
            $isfocus={emailFocus}
            type="email"
            onFocus={() => onEmailFocus(true)}
            onBlur={() => onEmailFocus(false)}
            onChange={(e) => onEmailChange(e)}
            placeholder="이메일"
            value={emailValue}
            required
            autoComplete="on"
          />
        </motion.div>
        <motion.div>
          <InputHeader>비밀번호</InputHeader>
          <Input
            $isfocus={pwFocus}
            type="password"
            onFocus={() => onPwFocus(true)}
            onBlur={() => onPwFocus(false)}
            onChange={(e) => onPwChange(e)}
            placeholder="비밀번호"
            value={pwValue}
            required
            minLength={6}
            autoComplete="on"
          />
        </motion.div>
        {mode === "signup" && (
          <motion.div>
            <InputHeader>비밀번호 확인</InputHeader>

            <Input
              $isfocus={checkPwFocus}
              type="password"
              onFocus={() => oncheckPwFocus(true)}
              onBlur={() => oncheckPwFocus(false)}
              onChange={(e) => oncheckPwChange(e)}
              placeholder="비밀번호 확인"
              value={checkPwValue}
              required
              minLength={6}
              autoComplete="off"
            />
            <InputHeader>닉네임</InputHeader>
            <Input
              $isfocus={nameFocus}
              type="text"
              onFocus={() => onNameFocus(true)}
              onBlur={() => onNameFocus(false)}
              onChange={(e) => onNameChange(e)}
              placeholder="닉네임"
              value={nameValue}
              required
              minLength={3}
              autoComplete="off"
            />
          </motion.div>
        )}
        <SubmitBtn>{mode === "login" ? "로그인" : "회원가입"}</SubmitBtn>
        {mode === "login" && (
          <SignUpText>
            <Link href="/auth/signup">
              {mode !== "login" ? "로그인" : "회원가입"}
            </Link>
          </SignUpText>
        )}
        {mode === "login" && (
          <SocialContainer>
            <SocialBtn type="button">
              <IconGoogle width={24} height={24} />
              <p>Google 계정으로 로그인</p>
            </SocialBtn>
            <SocialBtn type="button">
              <IconGithub />
              <p>Github 계정으로 로그인</p>
            </SocialBtn>
          </SocialContainer>
        )}
      </FormContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled(motion.form)<{ loading: boolean }>`
  border-radius: 10px;
  padding: 25px 25px;
  width: 100%;
  max-width: 450px;
  border: 1px solid ${(props) => props.theme.color.border_gray};
  opacity: ${(props) => (props.loading ? "0.2" : "1")};
  pointer-events: ${(props) => props.loading && "none"};

  @media screen and (max-width: 768px) {
    padding: 0;
    border: none;
  }
`;

const SocialContainer = styled(motion.div)`
  margin-top: 45px;
`;

const HeaderText = styled(motion.p)`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const InputHeader = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.f_darkGray};
`;

const Error = styled(motion.div)`
  text-align: center;
  padding: 7px 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.f_red};
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

const Input = styled(motion.input)<{ $isfocus: boolean }>`
  font-size: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  padding: 0px 7px 0px 12px;
  border-radius: 7px;
  letter-spacing: 0.5px;

  ${(props) => (props.$isfocus ? selectStyles : unSelectStyles)}
`;

const SubmitBtn = styled(motion.button)`
  min-width: 100%;
  height: 45px;
  border-radius: 7px;
  margin-top: 30px;

  background-color: ${(props) => props.theme.color.bg_mint};
  margin-left: 0px;
  color: white;
  font-weight: 800;
  font-size: 19px;
`;

const SocialBtn = styled(SubmitBtn)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  background-color: white;
  border: 1px solid ${(props) => props.theme.color.border_gray};
  margin-top: 10px;
  height: 42px;

  p {
    font-size: 14px;
    color: ${(props) => props.theme.color.f_darkGray};
    font-weight: 500;
    padding-left: 50px;
  }

  svg {
    position: absolute;
    left: 12px;
  }

  :hover {
    background-color: ${(props) => props.theme.color.bg_lightGray};
  }
`;

const SignUpText = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.f_lightGray};
    font-weight: 600;
    font-size: 14px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
      color: ${(props) => props.theme.color.f_green};
    }
  }
`;

export default AuthPage;
