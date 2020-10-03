export const getData= async ()=>{
    let response = await fetch('/data/information.json');
    return response;
}