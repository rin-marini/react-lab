export type LetterType = {
    id: number,
    subject: string,
    isStarred: boolean
}

export const initialLetters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
  }, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
  }, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
  }];