let eat = false;
let play = true;
let sleep = true;
let eating = new Promise((success, error) => {
    const x = 0;
    if (eat) {
        success('iam eating')
    } else {
        error('not eating')
    }
});


let playing = new Promise((success, error) => {
    if (play) {
        success('iam playing')
    } else {
        error('not plying')
    }
});

let sleeping = new Promise((success, error) => {
    if (sleep) {
        success('iam sleeping')
    } else {
        error('not sleep')
    }
});

eating.then(
    (resolve) => {
        console.log(resolve)
        playing.then(
            (resolve) => {
                console.log(resolve)
                sleeping.then(
                    (resolve) => console.log(resolve),
                    (rejected) => console.log(rejected)
                );
            },
            (rejected) => console.log(rejected)
        );
    },
    (rejected) => console.log(rejected)
);




