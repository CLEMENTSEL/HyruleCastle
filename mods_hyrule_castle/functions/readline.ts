import * as rl from 'readline-sync';
export const getInputL = (question: string) => rl.question(`${question}\n`);
export const getInput = (question: string) => rl.question(`${question}`);
export const getInputD = (question: string) => rl.keyIn(`${question}`);