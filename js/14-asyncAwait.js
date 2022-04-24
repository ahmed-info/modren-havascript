let eat = true;
let play = true;
let sleep = true;
const EATING = () => {
    return new Promise((success, error) => {
        if (eat) {
            success('iam eating')
        } else {
            error('not eat')
        }
    }
    );
}

const PLAYING = () => {
    return new Promise((success, error) => {
        if (play) {
            success('iam playing')
        } else {
            error('not play')
        }
    }
    );
}


const SLEEPING = () => {
    return new Promise((success, error) => {
        if (eat) {
            success('iam sleeping')
        } else {
            error('not sleep')
        }
    }
    );
}

const run = async () => {
    try {
        const eatMessage = await EATING();
        console.log(eatMessage)
        const playMessage = await PLAYING();
        console.log(playMessage)
        const sleepMessage = await SLEEPING();
        console.log(sleepMessage)
    } catch (error) {
        console.log(error)
    }
}
run();