Vue.createApp({
    data(){
        return {
            llamas: {
                weight:'250 - 450 lbs',
                region:'Peru',
                color:'white, grey, reddish-brown, brown, dark brown, black',
                diet:'Bromgrass, Alfalfa, Corn silage',
            },
            alpacas: {
                weight:'108 - 198 lbs',
                region:'Peru',
                color:'beige, fawn, white, grey, reddish-brown, brown, dark brown, black',
                diet:'Pasture grass, hay, Corn silage',
            },
            llamaLink:"https://en.wikipedia.org/wiki/Llama",
            llamaLinkName:"Llama - Wikipedia",
            alpacaLink:"https://en.wikipedia.org/wiki/Alpaca",
            alpacaLinkName:"Alpaca - Wikipedia"
        }
    }
}).mount('#app');