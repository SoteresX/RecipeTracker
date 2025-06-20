import getDifficultyText from "./getDifficultyText";
import formatTime from "./formatTime";
import getCurrency from "./getCurrency";

function getPropId(id, progress, value){
      switch(id){
        case "difficulty":
          return getDifficultyText(progress);
        case "time":
          return formatTime(parseInt(value));
        case "cost":
          return "~ " + getCurrency(value);
      }
}

export default getPropId;