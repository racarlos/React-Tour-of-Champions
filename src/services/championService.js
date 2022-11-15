import axios  from "axios";


export const championService = {

    championsUrl: "http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json",

    filterByRole: function(list, selectedRole) {
		return list = list.filter((data) => 
			data.tags.includes(selectedRole)
		)
	},

	filterByName: function (list, searchString) {
		searchString = searchString.toLowerCase().trim();
		return list = list.filter((data) => 
			data.name.toLowerCase().includes(searchString) || data.id.toLowerCase().includes(searchString) 
		)
	},

    getChampions: async function(selectedRole, searchString) {
        try{
            const res = await axios.get(this.championsUrl);
            let data =  Object.entries(res.data.data)
            let receivedChampions = data.map((championData) => championData[1]);

            if(selectedRole){
                receivedChampions = this.filterByRole(receivedChampions,selectedRole);
            }

            if(searchString){
                receivedChampions = this.filterByName(receivedChampions,searchString);
            }
            
            console.log(selectedRole, searchString);

            return receivedChampions;
        } catch(error){
            console.error(error)
        }
    }
}