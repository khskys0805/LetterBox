# LetterBox

### 사용기술
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white" /><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" /><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/>

### 프로젝트 기획 배경 및 차별점
최근 Instagram에서 서로 편지를 주고 받는 서비스가 굉장히 유행했다. 이러한 유행의 흐름을 타서 LetterBox를 기획하게 된다.
보편적인 서비스와 차별점을 두기 위해 편지를 익명으로 보내 상대가 준 힌트로 상대가 누군지 유추하여 맞히기 기능을 넣음으로써 재미를 더 추구했다.

### 로고 설명
 로고는 편지서비스를 나타낼 수 있도록 편지봉투에 LETTER BOX의 L과 B를 함축하여 만들었다
<br> ![image](https://user-images.githubusercontent.com/91455804/219406983-34b79ba2-5eea-4017-aaad-0eb185a7ae2d.png)


### 프로젝트 기능
1. 로그인(회원가입)<br>
  카카오와 네이버로 간편 회원가입, 로그인이 가능하며 로그인을 해야만 시간표를 만들 수 있고 강의를 선물 가능한다
2. 시간표 만들기<br>
  강의를 선물 받기 위한 시간표를 만드는 기능으로 로그인을 해야만 만들 수 있다
3. 내 시간표 확인하기<br>
  강의를 어느 시간에 선물 받았는지 확인할 수 있으며 몇개를 받았는지 볼 수 있다
4. 다른 사람 시간표 확인하기<br>
6. 강의 보내기<br>
  보내는 사람의 이름, 보낼 닉네임, 배경 색, 자신을 나타내는 힌트 3가지와 함께 편지를 담아 보내고 싶은 사람에게 강의를 보낼 수 있음. 강의는 23일 00시까지 보낼 수 있음. 그 이후에는 마지막 사진과 같이 나온다.
7. 선물받은 강의 확인하기<br>
  내 시간표에서 보고싶은 강의를 클릭하여 상대가 써준 편지를 확인할 수 있다 선물받은 강의를 7일에 걸쳐서 하루에 n/7개씩 확인이 가능한다
8. 정답 맞추기<br>
  선물받은 강의를 누가 보냈는지 정답 맞히기 기능을 통해 3가지 힌트로 유추하여 상대가 누군지 맞히기 가능하다 정답을 맞히면 그 상대에게 맞혔다고 메일이 간다

### 실행 환경 세팅하는 법(로컬에서 실행)
1. letterbox code가 담긴 압축파일을 다운 받는다
4. `./gradlew.bat build`: 프로젝트를 빌드한다 
  (application.properties가 없기 때문에 빌드에 실패, 궁금하다면 issue로 남겨주세요)
5. `cd .\build\libs\`: 서버 파일로 이동한다
6. `java -jar .\LetterBox-0.0.1-SNAPSHOT.jar`: 서버를 킨다(백을 키는 과정)
2. `cd .\src\main\frontend\` : 프론트 파일로 이동한다 
3. `npm start` : 리액트 서버를 킨다 (프론트를 키는 과정)
4. 프로젝트 즐기기

### 참여자
- 디자인: [khskys0805](https://github.com/khskys0805)<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/>
- 프론트: [gnfnfnr](https://github.com/gnfnfnr) <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
- 백엔드: [hyeonahhh](https://github.com/hyeonahhh) <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white" /><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
