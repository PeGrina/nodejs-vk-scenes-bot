import * as fs from 'fs';
import * as path from 'path';

export class Utils {
    private delimiter:string;

    public constructor(){
        this.delimiter = ' ';
    }

    public split(text: string | undefined): Array<string>{
        if(text != undefined){
            return text.toLocaleLowerCase().split(this.delimiter);
        }else{
            return [];
        }
    }

    public setCase(text: String): string{
        let txt: string = "";
        for(let i: number = 0; i < text.length; i++){
            if(Math.ceil(Math.random() * 2) == 2){
                txt += text[i].toLocaleUpperCase();
            }else{
                txt += text[i];
            }
        }
        return txt;
    }

    public getWords(): string[]{
        return fs.readFileSync(path.join(__dirname, 'words.txt'), { encoding: 'utf-8' }).split(this.delimiter);
    }

    public isWord(word: string): boolean{
        return this.getWords().indexOf(word) != -1;
    }

    public saveWords(words: string[]): void{
        fs.writeFileSync(path.join(__dirname, 'words.txt'), words.join(this.delimiter), { encoding: 'utf-8' });
    }

    public addWord(word: string){
        if(!this.isWord(word)){
            let words = this.getWords();
            word.replace(/\s{2,}/g," ");
            words.push(word);
            this.saveWords(words);
        }
    }
}