import { searchKeywordAtom } from "@/context/location";
import { IconSearch, IconX } from "@/public/svgs";
import { selectStyles, unSelectStyles } from "@/styles/shared";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import styled from "styled-components";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);
  const [searchKeyWord, setSearchKeyWord] = useAtom(searchKeywordAtom);
  const [value, setValue] = useState(searchKeyWord);

  return (
    <FormContainer
      isfocus={focus}
      onSubmit={(e) => {
        e.preventDefault();
        if (value.length >= 1) {
          setSearchKeyWord(value);
        }
      }}
    >
      <Input
        ref={inputRef}
        type="text"
        placeholder="키워드 검색"
        maxLength={50}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Controller>
        {value.length >= 1 && (
          <ClearBtn
            type="button"
            onClick={() => {
              setValue("");
              inputRef.current && inputRef.current.focus();
            }}
          >
            <IconX />
          </ClearBtn>
        )}

        <SearchBtn type="submit">
          <IconSearch />
        </SearchBtn>
      </Controller>
    </FormContainer>
  );
};
const FormContainer = styled.form<{ isfocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0px 5px 0px 10px;
  border-radius: 7px;

  cursor: pointer;
  margin-bottom: 20px;

  ${(props) => (props.isfocus ? selectStyles : unSelectStyles)}
`;

const Input = styled.input`
  width: calc(100% - 55px);
  height: 100%;
  padding: 0;
  background: none;
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 45px;
`;

const ClearBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  left: 4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.f_lightGray};
  cursor: pointer;

  svg {
    width: 6px;
    height: 6px;
    fill: white;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0px;

  width: 25px;
  height: 100%;
  cursor: pointer;
  background: none;

  svg {
    width: 14px;
    height: 14px;
    fill: ${(props) => props.theme.color.bg_black};
  }
`;

export default SearchInput;
