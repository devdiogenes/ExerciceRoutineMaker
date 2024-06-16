import example from '/example_routine.json'

export default class ExerciceRoutine {
    #routine
    constructor() {
        this.use_example_routine();
    }
    use_example_routine() {
        this.#routine = example;
    }
    get_routine() {
        let routine = [];
        this.#routine.forEach((exercice, index) => {
            routine.push(Object.assign({'numero': index+1}, exercice));
        })
        return routine;
    }
}