const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve({text : 'Selam'});
        }

        reject("Bir problem oluştu.");
    });
};

getComments(2)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));