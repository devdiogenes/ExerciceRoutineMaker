import example from '/example_routine.json'

export default class ExerciceRoutine {
    #routine
    load_routine() {
        this.#routine = JSON.parse(localStorage.getItem('routine'));
        if (!this.#routine) {
            this.#routine = example;
            this.save_routine();
        }
    }
    get_routine() {
        this.load_routine();
        let routine = [];
        this.#routine.forEach((exercice, index) => {
            routine.push(Object.assign({'numero': index+1}, exercice));
        })
        return routine;
    }
    save_routine() {
        localStorage.setItem('routine', JSON.stringify(this.#routine));
        window.dispatchEvent(new Event('routine-updated'));
    }
    update_exercice(exercice, row_number = null) {
        if (row_number == null) {
            this.#routine.push(exercice);
        } else {
            this.#routine[row_number] = exercice;
        }
        this.save_routine();
    }
}