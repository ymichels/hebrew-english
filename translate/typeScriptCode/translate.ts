import {dictionary} from './dict-he-en';

export function translate(hebrewWord:string){
    return dictionary.find(word => {
        return hebrewWord ==  word.translated
    })?.translation
}