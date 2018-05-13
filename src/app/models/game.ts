export class Game {

    Person: User[] = [];
    
}

export class User {
    Name: string;
    MyExerciseList: Work[] = [];
    Record: Work[] = [];
    Date: number;
}
export class Work{
    Date: number;
    workout: string;
    Totaltime:string;
}
