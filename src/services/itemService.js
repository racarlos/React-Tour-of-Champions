import axios  from "axios";

export const itemService = { 

    itemsUrl: "http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/item.json",

    getItems: async function() {
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


            return receivedItems;
        } catch(error){
            console.error(error)
        }
    }
}