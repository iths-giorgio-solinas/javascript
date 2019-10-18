 let myButton =document.querySelector(".myButton");
        let myInput = document.querySelector(".myInput");
        let listYears = document.querySelector(".listYears");
        let hidden = document.querySelectorAll(".hidden");
        
        myButton.addEventListener('click', getData())

        
        let name = document.querySelector(".name")
        for (let i=1979; i<2020; i++){
            let year = document.createElement("option");
            listYears.append(year);
            listYears[i-1979+1].innerHTML=i;

        }
        async function getData() {
            // let url = 'https://www.balldontlie.io/api/v1/players?search='  + myInput.value;
            let url = `https://www.balldontlie.io/api/v1/players?search=${myInput.value}`;
            let myDataJs =  await fetch (url);
            let myData =  await  myDataJs.json();
            
            if(myData.data.length==0){
                alert("No player found")
            }
            
            else{
                name.innerHTML= myData.data[0].first_name + " " + myData.data[0].last_name;
                listYears.addEventListener('change', async function (){

                    let minutes = document.querySelector(".minutes")
                    let points = document.querySelector(".points")
                    let percentage = document.querySelector(".percentage")
                    let threePointsPercentage = document.querySelector(".threePointsPercentage")
                    let freeThrownsPercentage = document.querySelector(".freeThrownsPercentage")
                    let assists= document.querySelector(".assists")
                    let offensiveRebounds = document.querySelector(".offensiveRebounds")
                    let defensiveRebounds = document.querySelector(".defensiveRebounds")
                    let steals = document.querySelector(".steals")
                    let turnovers = document.querySelector(".turnovers")
                    let fouls = document.querySelector(".fouls")
                    let playerStatsUrl = `https://www.balldontlie.io/api/v1/season_averages?season=${listYears.value}&player_ids[]=${myData.data[0].id}`;
                    let playerStatsJs = await fetch (playerStatsUrl);
                    let playerStats= await playerStatsJs.json();
                    if (playerStats.data.length==0){
                        alert(name.innerHTML + " didn't play during this season")

                    }
                    else{

                        minutes.innerHTML = playerStats.data[0].min;
                        points.innerHTML= playerStats.data[0].pts;
                        percentage.innerHTML= playerStats.data[0].fg_pct;
                        threePointsPercentage.innerHTML = playerStats.data[0].fg3_pct;
                        freeThrownsPercentage.innerHTML = playerStats.data[0].ft_pct;
                        assists.innerHTML = playerStats.data[0].ast
                        offensiveRebounds.innerHTML = playerStats.data[0].oreb;
                        defensiveRebounds.innerHTML = playerStats.data[0].dreb;
                        steals.innerHTML = playerStats.data[0].stl;
                        turnovers.innerHTML = playerStats.data[0].turnover;
                        fouls.innerHTML = playerStats.data[0].pf;

                    }

                })
                
            }
            
                console.log(myData.data);
        

        }       
