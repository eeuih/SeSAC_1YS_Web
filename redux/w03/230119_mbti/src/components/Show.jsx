import styled from 'styled-components';
import PinkButton from './PinkButton';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  // 해당하는 키값을 들고 오기 위해 [result]
  const dispatch = useDispatch();
  // mbit 내 reset 함수를 실행하기 위한 dispatch

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <AdditionalImg src={explaination.img} alt="팩폭" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
