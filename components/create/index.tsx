import dynamic from "next/dynamic";
import { useState } from "react";
import CreateHeader from "./CreateHeader";
import styled from "styled-components";
import SelectOption from "../shared/dropdown/SelectOption";
import { teamSort } from "@/constants/options";

const Editor = dynamic(() => import("@/components/create/editor/Editor"), {
  loading: () => <div>...loading</div>,
  ssr: false,
});

const CreatePage = () => {
  const [editorFocus, setEditorFocus] = useState(false);

  return (
    <Container>
      <CreateHeader visible={editorFocus} />
      <MainContainer>
        <HeaderTextArea maxLength={50} placeholder="제목을 입력해주세요." />
        <SmallHeaderText>요약</SmallHeaderText>
        <TextArea
          maxLength={150}
          placeholder="이 모임을 짧게 소개하는 요약을 입력하세요.
예시 - 개발자를 위한 커뮤니티 앱을 기획 중입니다. 현재 디자이너 1명, 백엔드 개발자 1명이 있고, 현재 프론트 개발자를 찾고 있습니다!"
        />
        <SmallHeaderText>상세 소개글</SmallHeaderText>
        <Editor setFocus={setEditorFocus} />
        <SelectHeaderText>모집 포지션</SelectHeaderText>
        <SelectOption
          options={teamSort}
          selectOption={undefined}
          onSelect={(option) => console.log(option)}
          includeAll={false}
          height="42px"
        />
        <SelectHeaderText>기술 스택</SelectHeaderText>{" "}
        <SelectOption
          options={teamSort}
          selectOption={undefined}
          onSelect={(option) => console.log(option)}
          includeAll={false}
          height="42px"
        />
        <SelectHeaderText>모임 종류</SelectHeaderText>{" "}
        <SelectOption
          options={teamSort}
          selectOption={undefined}
          onSelect={(option) => console.log(option)}
          includeAll={false}
          height="42px"
        />
        <SelectHeaderText>모집 인원</SelectHeaderText>{" "}
        <SelectOption
          options={teamSort}
          selectOption={undefined}
          onSelect={(option) => console.log(option)}
          includeAll={false}
          height="42px"
        />
        <SelectHeaderText>모집 마감일</SelectHeaderText>{" "}
        <SelectOption
          options={teamSort}
          selectOption={undefined}
          onSelect={(option) => console.log(option)}
          includeAll={false}
          height="42px"
        />
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const MainContainer = styled.div`
  width: 700px;
  margin-top: 90px;
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;
const SmallHeaderText = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SelectHeaderText = styled(SmallHeaderText)`
  margin-top: 40px;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  height: fit-content;

  resize: none;
  font-size: 17px;
  margin-top: 20px;

  ::placeholder {
    line-height: 140%;
    font-weight: 400;
    color: ${(props) => props.theme.color.f_lightGray};
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const HeaderTextArea = styled(TextArea)`
  height: auto;
  min-height: 100px;
  font-size: 30px;
  font-weight: 600;
  margin: 0px -1px 30px -1px;

  ::placeholder {
    line-height: 140%;
    font-weight: 700;
    color: ${(props) => props.theme.color.f_lightGray};
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export default CreatePage;
