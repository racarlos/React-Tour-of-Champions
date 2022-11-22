import axios  from "axios";

export const itemService = { 


    itemsUrl: "http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/item.json",


    filterByName: function(list, searchString){
        
        searchString = searchString.toLowerCase().trim();

		let filteredList = list.filter((data) => {

            let tags = data.tags.map((tag) => tag.toLowerCase())

            if(data.name.toLowerCase().includes(searchString) || tags.includes(searchString)){
                return data
            }
        })

        return filteredList;
    },

    getItems: async function(searchString) {
        try{

            const res = await axios.get(this.itemsUrl);
            let data =  Object.entries(res.data.data)

            let receivedItems = [];

            data.forEach((element) => {
                let itemData = {id: element[0], ...element[1]};
                
                // Add only items buyable from shop
                if(itemData.gold && itemData.gold.purchasable){
                    receivedItems.push(itemData);
                }
            });
                        
            // Filter by name/searchstring
            if(searchString){
                receivedItems = this.filterByName(receivedItems,searchString);
            }

            return receivedItems;
        } catch(error){
            console.error(error)
        }
    }
}