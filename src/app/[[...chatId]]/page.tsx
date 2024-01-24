import ChatContent from "./chat-content"
import ChatList, { ChatListSkeleton } from "./chat-list"
import { createChat } from "./actions"
import { Suspense, useEffect } from "react"
import ChatContentWrapper from "./chat-content-wrapper"

import { getSubtitles, getVideoDetails } from 'youtube-caption-extractor';
import { fetchTranscript } from "youtube-subtitle-transcript";
let allscript = "";

const homeUrl = 'https://localhost:3000'
const videoID = 'Kz3d_vGPtwc';

// const videoID = 'Kz3d_vGPtwc';
const lang = 'ko'; // Optional, default is 'en' (English)
const test = async(videoID: string, lang = 'en')=>{
  try{
    const { transcript, error } = await fetchTranscript("Kz3d_vGPtwc", "ko");
    // console.log(transcript);
    allscript = transcript.map(entry => entry.text).join('');
    const videoDetails = await getVideoDetails({ videoID, lang });
    console.log("videoDetails:!", videoDetails)
    
    allscript += "\n제목:" + videoDetails.title
    allscript += "\ndescription: " + videoDetails.description
    // allscript += "\n자막: " + videoDetails.subtitles.map(entry => entry.text).join('');
    
    console.log("allscript final: ", allscript)
    if(error!=undefined){
      console.log('error = ', error)
    }
    
  }
  catch(error){
    console.log(error);  
  }
}
test(videoID, lang)

// Fetching Subtitles
let subtitles;

const fetchSubtitles = async (videoID: string, lang = 'en') => {
  try {
    subtitles = await getSubtitles({ videoID, lang });
    console.log("subtitles:")
  } catch (error) {
    console.error('Error fetching subtitles:', error);
  }
};
// Fetching Video Details
const fetchVideoDetails = async (videoID: string, lang = 'en') => {
  try {
    
    console.log("videoDetails:");
  } catch (error) {
    console.error('Error fetching video details:', error);
  }
};


fetchSubtitles(videoID, lang);
fetchVideoDetails(videoID, lang);

export default function Page({ params }: { params: { chatId?: string[] } }) {
  const chatId = params.chatId?.[0]
  
  return (
    <div className="w-full h-full flex">
      <div className="w-80 h-full max-h-full border-r-2 border-neutral-300 dark:border-neutral-700 overflow-auto">
        <Suspense fallback={<ChatListSkeleton />}>
          <ChatList />
        </Suspense>
      </div>
      <div className="h-full flex-1 flex flex-col">
        {chatId ? (
          <Suspense fallback={<div className="flex-1" />}>
            <ChatContentWrapper chatId={chatId} />
          </Suspense>
        ) : (
          <ChatContent createChat={createChat} script={allscript}/>
        )}
      </div>
    </div>
  )
}
