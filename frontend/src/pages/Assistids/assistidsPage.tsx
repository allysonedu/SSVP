import { useEffect, useState } from "react";
import { ListAssistids } from "./assistidsView";
import {getAllAssisteds} from "../,,/../../api/assisteds";

export const AssistidsPage: React.FC = () => {
  
  const [assisteds, setAssisteds] = useState([])

  useEffect(() => {
    const GetAssisteds = async () => {
      setAssisteds(await getAllAssisteds())
    };
   
   GetAssisteds()
  }, [])
  

  return (
    <div style={{marginTop:"100px"}}>
      <ListAssistids cadastros={assisteds} />
    </div>
  );
};


