if (console) {
    console.json = (obj, indent = 4) => {
        console.log(JSON.stringify(obj, null, indent));
    }
}
