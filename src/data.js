// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
/*/export const filterData = (data, condition)=>{
  
  return(num1+num2)/*/

export const ordenarAscendente = (data) => {
  function sortPokemon(a,b){
    if(a.name < b.name){
       return -1;
       
    }
    
    if(a.name > b.name){
       return 1;
    }
    
 }
  return data.sort(sortPokemon);
};