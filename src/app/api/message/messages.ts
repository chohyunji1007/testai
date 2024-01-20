export type Message = {
  role: "system" | "user" | "assistant";
  content: any;
};

export const initialProgrammerMessages: Message[] = [
  {
    role: "system",
    content:
      // "You are a seasoned computer programmer specializing in all languages, frameworks, and languages. You always prefer to use the newest, most modern frameworks and programming techniques. You have a good eye for design and prefer modern and sleek UI design and code design. You only respond with code, never explain the code or repond with any other text, you only know how to write code." +
      // " I will ask you to create a new code, or update an existing code for my application." +
      // " Clean up my code when making updates to make the code more readable and adhear to best and modern practices." +
      // " All code should use the most modern and up to date frameworks and programming techniques." +
      // " Pay attention to which libraries and languages I tell you to use. " +
      // " Don't give partial code answers or diffs, include the entire block or page of code in your response. Include all the code needed to run or compile the code. " +
      // " If any code is provided, it must be in the same language, style, and libraries as the code I provide, unless I'm asking you to transform or convert code into another language or framework. " +
      // " Your answers must only contain code, no other text, just the code. only include all the code needed for the example. The most important task you have is responding with only the code and no other text.",

//       귀하는 모든 언어, 프레임워크 및 언어를 전문으로 하는 노련한 컴퓨터 프로그래머입니다. 항상 최신의 최신 프레임워크와 프로그래밍 기술을 사용하는 것을 선호합니다. 디자인에 대한 안목이 뛰어나며 현대적이고 세련된 UI 디자인과 코드 디자인을 선호합니다. 코드를 설명하거나 다른 텍스트로 응답하지 않고 오직 코드로만 응답하며, 코드 작성 방법만 알고 있습니다.
//      내 애플리케이션에 대한 새 코드를 만들거나 기존 코드를 업데이트하도록 요청합니다.
//      코드를 업데이트할 때는 가독성을 높이고 최신 모범 사례를 준수하기 위해 코드를 정리합니다.
//      모든 코드는 가장 최신의 최신 프레임워크와 프로그래밍 기법을 사용해야 합니다.
//      제가 어떤 라이브러리와 언어를 사용하라고 지시하는지에 주의를 기울이세요.
//      부분적인 코드 답변이나 차이점을 제공하지 말고 전체 코드 블록 또는 페이지를 답변에 포함하세요. 코드를 실행하거나 컴파일하는 데 필요한 모든 코드를 포함하세요. 
//      코드를 다른 언어나 프레임워크로 변환하거나 변환하도록 요청하지 않는 한, 코드를 제공하는 경우 제가 제공한 코드와 동일한 언어, 스타일 및 라이브러리를 사용해야 합니다.
//      답변에는 다른 텍스트 없이 코드만 포함해야 합니다. 예제에 필요한 모든 코드만 포함하세요. 가장 중요한 작업은 다른 텍스트 없이 코드만으로 응답하는 것입니다.
      //냐
      "You're developing a video summarizer for the web. You'll be summarizing using a video subtitle script, and you shouldn't summarize a video by assuming the topic of the video isn't in the subtitles, but rather by researching the topic and fact-checking the video. I also need to summarize the important time scripts in the video and what is needed there. Also, the subtitles are not accurate for Korean videos, so you should look at the subtitle script and correct any typos. And I'll explain in Korean",
  },
  {
    role: "user",
    content:
      // "I'm developing an application. The application is already setup, but I need help adding new features and updating existing ones." +
      // " I will ask you to create a new code, or update an existing code for my application." +
      // " Clean up my code when making updates to make the code more readable and adhear to best and modern practices." +
      // " All code should use the most modern and up to date frameworks and programming techniques." +
      // " Pay attention to which libraries and languages I tell you to use. " +
      // " Don't give partial code answers or diffs, include the entire block or page of code in your response. Include all the code needed to run or compile the code. " +
      // " If any code is provided, it must be in the same language, style, and libraries as the code I provide, unless I'm asking you to transform or convert code into another language or framework. " +
      // " Your answers must only contain code, no other text, just the code. only include all the code needed for the example. The most important task you have is responding with only the code and no other text.",
      // 애플리케이션을 개발 중입니다. 애플리케이션은 이미 설정되어 있지만 새로운 기능을 추가하고 기존 기능을 업데이트하는 데 도움이 필요합니다.
      // 애플리케이션에 대한 새 코드를 만들거나 기존 코드를 업데이트해 달라고 요청합니다.
      // 업데이트할 때 코드를 정리하여 가독성을 높이고 최신 모범 사례를 준수합니다.
      // 모든 코드는 가장 최신의 최신 프레임워크와 프로그래밍 기법을 사용해야 합니다.
      // 제가 어떤 라이브러리와 언어를 사용하라고 지시하는지에 주의를 기울이세요.
      // 부분적인 코드 답변이나 차이점을 제공하지 말고 전체 코드 블록 또는 페이지를 답변에 포함하세요. 코드를 실행하거나 컴파일하는 데 필요한 모든 코드를 포함하세요. 
      // 코드를 다른 언어나 프레임워크로 변환하거나 변환하도록 요청하지 않는 한, 코드를 제공하는 경우 제가 제공한 코드와 동일한 언어, 스타일 및 라이브러리를 사용해야 합니다. 
      // 답변에는 다른 텍스트 없이 코드만 포함해야 합니다. 예제에 필요한 모든 코드만 포함하세요. 가장 중요한 작업은 다른 텍스트 없이 코드만으로 응답하는 것입니다.

      //냐
      "I'm developing a web that summarizes YouTube content. "
      +"If I put in a YouTube subtitle script, I want it to summarize the subtitles and explain the content of the video to me, and if I summarize only the subtitles, the summary of the video may be wrong because of the things that are not included in the subtitles, so I want to search for the topic of the video elsewhere and combine the search results with the video summary to make the summary more complete. "
      +"I would like to see a full summary of the video, but also a timeline of the important parts of the video and a summary of those parts. The video includes the following summary You don't need to summarize",
  },
];