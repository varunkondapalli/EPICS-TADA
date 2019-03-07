var appId = '9a34a870'
var appKey = 'd3abbc84c68c50f958cf6113fb4edeae'
var item = 'chicken'
  //var url = 'https://api.nutritionix.com/v1_1/search/' + item + '?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=' + appId + '&appKey=' + appKey';
  //var url = 'https://api.nutritionix.com/v1_1/search/chicken?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=9a34a870&appKey=d3abbc84c68c50f958cf6113fb4edeae'
  //import "isomorphic-fetch"
async function getData(){

  var url = 'https://api.nutritionix.com/v1_1/search/chicken?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=9a34a870&appKey=d3abbc84c68c50f958cf6113fb4edeae'
  calories = await fetch(url).then(
    response => response.json()).then(
      data => {
        console.log(data)
        return data
        //return data['Global Quote'][SYMBOL];
      }
    )
    console.log(calories);
}
