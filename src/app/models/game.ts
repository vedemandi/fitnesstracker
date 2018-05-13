export class Game {

    Person: User[] = [];
    Myworkouts:Work[]=[];
    
}

export class User {
    Name: string;
    MyExerciseList: Work[] = [];
    Record: Work[] = [];
    Date: string;
}
export class Work{
    Date: string;
    workout: string;
    Totaltime:string;
}
