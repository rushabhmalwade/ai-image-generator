// utils is a folder in which we store different functions that we can use throughout our application lateron


import { surpriseMePrompts } from '../constants/index';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //in case we get the same prompt again 2 or 3 times,
    //then we can recall the function so that it shuffles the prompt
    if(randomPrompt === prompt ) return getRandomPrompt(prompt)

    return randomPrompt;
}
