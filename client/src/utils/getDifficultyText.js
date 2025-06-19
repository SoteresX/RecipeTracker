function getDifficultyText(value){

    const difficultyText = ["Easy", "Medium", "Hard", "Challenging", "Extreme"];
    let result = difficultyText[value - 1]
    return result;

}

export default getDifficultyText;