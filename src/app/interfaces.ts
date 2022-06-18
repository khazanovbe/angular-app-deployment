export interface IResultEmotion{
    box: number[];
    emotions: IEmotion;

}

export interface IEmotion{
    angry: number,
    disgust: number,
    fear: number,
    happy: number,
    sad: number,
    surprise:number,
    neutral: number
}